import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { connectDB } from "@/lib/mongodb"
import { Note } from "@/models/Note"
import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectDB()
    const note = await Note.findOne({
      _id: params.id,
      userId: session.user.id,
    })

    if (!note) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 })
    }

    // Generate AI summary
    const { text } = await generateText({
      model: groq("llama3-8b-8192"), // You can choose other Groq models like "llama3-70b-8192"
      system:
        "You are a helpful assistant that creates concise summaries of notes. Provide a clear, brief summary that captures the key points.",
      prompt: `Please summarize the following note:

Title: ${note.title}
Content: ${note.content}

Provide a concise summary in 2-3 sentences.`,
    })

    return NextResponse.json({ summary: text })
  } catch (error) {
    console.error("Summarize note error:", error)

    // Fallback mock response if OpenAI fails
    return NextResponse.json({
      summary: "AI summarization is currently unavailable. This is a mock summary of your note content.",
    })
  }
}
