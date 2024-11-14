"use client"

import Link from "next/link"
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings,
  MessageSquare,
  FileText,
  CreditCard
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
    id: "overview"
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
    id: "analytics"
  },
  {
    title: "Team",
    icon: Users,
    href: "/dashboard/team",
    id: "team"
  },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/dashboard/messages",
    id: "messages"
  },
  {
    title: "Documents",
    icon: FileText,
    href: "/dashboard/documents",
    id: "documents"
  },
  {
    title: "Billing",
    icon: CreditCard,
    href: "/dashboard/billing",
    id: "billing"
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
    id: "settings"
  }
]

interface DashboardNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function DashboardNav({ activeTab, onTabChange }: DashboardNavProps) {
  return (
    <nav className="w-64 bg-white dark:bg-gray-800 p-4 space-y-2 border-r min-h-screen">
      <div className="mb-8">
        <Link href="/" className="text-2xl font-bold text-purple-600">BoltSaaS</Link>
      </div>
      {menuItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className={cn(
            "w-full justify-start gap-2",
            activeTab === item.id && "bg-purple-50 text-purple-600 dark:bg-purple-900 dark:text-purple-200"
          )}
          onClick={() => onTabChange(item.id)}
        >
          <item.icon className="h-5 w-5" />
          {item.title}
        </Button>
      ))}
    </nav>
  )
}