"use client"

import { FileText, Image as ImageIcon, Film, Music, MoreVertical, Download, Share2, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const recentFiles = [
  {
    name: "Project Presentation.pptx",
    type: "document",
    size: "2.4 MB",
    modified: "2 hours ago",
    icon: FileText,
  },
  {
    name: "Team Photo.jpg",
    type: "image",
    size: "3.2 MB",
    modified: "Yesterday",
    icon: ImageIcon,
  },
  {
    name: "Product Demo.mp4",
    type: "video",
    size: "234.5 MB",
    modified: "3 days ago",
    icon: Film,
  },
  {
    name: "Meeting Recording.mp3",
    type: "audio",
    size: "12.3 MB",
    modified: "Last week",
    icon: Music,
  },
]

export function RecentFiles() {
  return (
    <div className="space-y-2">
      {recentFiles.map((file) => (
        <div
          key={file.name}
          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <file.icon className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium">{file.name}</p>
              <p className="text-sm text-gray-500">{file.size} · {file.modified}</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Download className="h-4 w-4 mr-2" />
                Download
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                <Trash className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}