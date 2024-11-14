"use client"

import { Users, MessageSquare, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Navbar } from "@/components/layout/navbar"

export default function CollaborationFeaturePage() {
  const { toast } = useToast()

  const handleTryDemo = () => {
    toast({
      title: "Demo Access Granted",
      description: "You now have access to the collaboration demo.",
    })
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-6">
        <Navbar />
        <div className="py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Team Collaboration</h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Work seamlessly with your team using our integrated collaboration tools and workspaces.
            </p>
            <Button onClick={handleTryDemo} className="bg-white text-purple-600 hover:bg-purple-50">
              Try Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Team Workspaces
                </CardTitle>
                <CardDescription>Organize your team and projects efficiently</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-lg">
                  [Workspace Demo]
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-6 w-6" />
                  Real-time Chat
                </CardTitle>
                <CardDescription>Communicate with your team in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-lg">
                  [Chat Demo]
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  Team Calendar
                </CardTitle>
                <CardDescription>Schedule and manage team events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-lg">
                  [Calendar Demo]
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}