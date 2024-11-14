"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Starter",
    price: "$29",
    features: ["5 Team Members", "Basic Analytics", "2GB Storage", "Email Support"],
  },
  {
    name: "Professional",
    price: "$99",
    features: ["Unlimited Team Members", "Advanced Analytics", "20GB Storage", "Priority Support", "Custom Integrations"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom Solutions", "Dedicated Support", "Unlimited Storage", "SLA", "Custom Security"],
  },
]

export function PricingSection() {
  return (
    <section className="py-16" id="pricing">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
              <p className="text-3xl font-bold mb-6">{tier.price}<span className="text-sm font-normal">/month</span></p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={tier.name === "Professional" ? "default" : "outline"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}