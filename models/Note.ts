import mongoose from "mongoose"

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

// Create compound index for user-specific queries
NoteSchema.index({ userId: 1, updatedAt: -1 })

export const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema)
