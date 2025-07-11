"use client"

import { useEffect, useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { NotesTab } from "./notes-tab"
import { TasksTab } from "./tasks-tab"
import { useAppStore } from "@/lib/store"
import { LogOut, User } from "lucide-react"

export function DashboardClient() {
  const { data: session } = useSession()
  const { setNotes, setTasks, setLoading } = useAppStore()
  const [activeTab, setActiveTab] = useState("notes")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [notesRes, tasksRes] = await Promise.all([fetch("/api/notes"), fetch("/api/tasks")])

        if (notesRes.ok) {
          const notes = await notesRes.json()
          setNotes(notes)
        }

        if (tasksRes.ok) {
          const tasks = await tasksRes.json()
          setTasks(tasks)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [setNotes, setTasks, setLoading])

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">My Workspace</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                <span>{session?.user?.name}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center space-x-2 bg-transparent"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome back, {session?.user?.name}!</h2>
          <p className="text-gray-600">Manage your notes and tasks in one place</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
          </TabsList>

          <TabsContent value="notes" className="mt-6">
            <NotesTab />
          </TabsContent>

          <TabsContent value="tasks" className="mt-6">
            <TasksTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
