"use client"

import * as React from "react"
import { useToast as useToastBase } from "@/components/ui/use-toast"

export const useToast = () => {
  return useToastBase()
}