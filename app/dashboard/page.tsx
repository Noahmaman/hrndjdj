"use client"

import { useState } from "react"
import { 
  BarChart3, 
  Users, 
  CreditCard, 
  Settings, 
  Bell,
  Calendar,
  LayoutDashboard,
  MessageSquare,
  Upload,
  FileText,
  Image as ImageIcon,
  Film,
  Music,
  Code
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"
import { DashboardNav } from "@/components/layout/dashboard-nav"
import { DashboardHeader } from "@/components/layout/dashboard-header"
import { FileUploader } from "@/components/dashboard/file-uploader"
import { RecentFiles } from "@/components/dashboard/recent-files"
import { StorageUsage } from "@/components/dashboard/storage-usage"
import { ActivityFeed } from "@/components/dashboard/activity-feed"

const stats = [
  {
    title: "Total Storage",
    value: "234.5 GB",
    description: "of 500 GB used",
    icon: CreditCard,
    progress: 47
  },
  {
    title: "Files",
    value: "1,234",
    description: "+20 this week",
    icon: FileText,
    progress: 65
  },
  {
    title: "Team Members",
    value: "12",
    description: "+2 new this month",
    icon: Users,
    progress: 80
  },
  {
    title: "Projects",
    value: "24",
    description: "8 in progress",
    icon: LayoutDashboard,
    progress: 33
  }
]

const fileTypes = [
  { type: "Images", icon: ImageIcon, count: 342, size: "5.2 GB" },
  { type: "Videos", icon: Film, count: 130, size: "12.1 GB" },
  { type: "Audio", icon: Music, count: 242, size: "3.4 GB" },
  { type: "Documents", icon: FileText, count: 520, size: "1.2 GB" }
]

export default function DashboardPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("overview")
  const [isUploading, setIsUploading] = useState(false)

  const handleUpload = async (files: FileList) => {
    setIsUploading(true)
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      toast({
        title: "Files Uploaded",
        description: `Successfully uploaded ${files.length} files`,
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <DashboardHeader onNotificationClick={() => {}} />
      <div className="flex">
        <DashboardNav activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="flex-1 p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                  <Progress value={stat.progress} className="mt-3" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>File Management</CardTitle>
                <CardDescription>Upload and manage your files</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUploader onUpload={handleUpload} isUploading={isUploading} />
                <div className="mt-6">
                  <h4 className="font-semibold mb-4">Storage by File Type</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {fileTypes.map((type) => (
                      <div key={type.type} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                          <type.icon className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium">{type.type}</p>
                          <p className="text-sm text-gray-500">{type.count} files · {type.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <ActivityFeed />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Files</CardTitle>
                <CardDescription>Your recently uploaded files</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentFiles />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Storage Usage</CardTitle>
                <CardDescription>Storage space distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <StorageUsage />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}