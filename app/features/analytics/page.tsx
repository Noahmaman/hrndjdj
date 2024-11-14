"use client"

import { BarChart, LineChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Navbar } from "@/components/layout/navbar"

export default function AnalyticsFeaturePage() {
  const { toast } = useToast()

  const handleTryDemo = () => {
    toast({
      title: "Demo Access Granted",
      description: "You now have access to the analytics demo.",
    })
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-6">
        <Navbar />
        <div className="py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Advanced Analytics</h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get deep insights into your business performance with real-time analytics and custom reports.
            </p>
            <Button onClick={handleTryDemo} className="bg-white text-purple-600 hover:bg-purple-50">
              Try Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-6 w-6" />
                  Real-time Metrics
                </CardTitle>
                <CardDescription>Monitor your key performance indicators in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                  [Demo Chart Placeholder]
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-6 w-6" />
                  Custom Reports
                </CardTitle>
                <CardDescription>Create and export custom reports for your business needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                  [Demo Report Placeholder]
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}