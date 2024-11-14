"use client"

import { Shield, Key, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Navbar } from "@/components/layout/navbar"

export default function SecurityFeaturePage() {
  const { toast } = useToast()

  const handleTryDemo = () => {
    toast({
      title: "Demo Access Granted",
      description: "You now have access to the security features demo.",
    })
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-6">
        <Navbar />
        <div className="py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Enterprise Security</h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Rest easy with our enterprise-grade security features and compliance standards.
            </p>
            <Button onClick={handleTryDemo} className="bg-white text-purple-600 hover:bg-purple-50">
              Try Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Data Protection
                </CardTitle>
                <CardDescription>Enterprise-grade encryption and security protocols</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-lg">
                  [Security Demo]
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-6 w-6" />
                  Access Control
                </CardTitle>
                <CardDescription>Role-based access control and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-lg">
                  [Access Control Demo]
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-6 w-6" />
                  Compliance
                </CardTitle>
                <CardDescription>Industry standard compliance and certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-lg">
                  [Compliance Demo]
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}