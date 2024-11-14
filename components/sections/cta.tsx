"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 bg-purple-600/20 backdrop-blur-lg" id="cta">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of companies that trust us to power their operations
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
            Start Free Trial
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white border-white hover:bg-white/10"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}