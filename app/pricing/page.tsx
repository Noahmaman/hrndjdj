"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams and startups",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "2GB storage",
      "Email support",
      "Basic integrations",
      "API access",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    description: "Best for growing businesses",
    features: [
      "Unlimited team members",
      "Advanced analytics",
      "20GB storage",
      "Priority support",
      "Advanced integrations",
      "API access",
      "Custom domains",
      "Team collaboration tools",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Advanced security",
      "Custom contracts",
    ],
    popular: false,
  },
]

export default function PricingPage() {
  const { toast } = useToast()

  const handleSubscribe = (plan: string) => {
    toast({
      title: "Starting subscription process",
      description: `You selected the ${plan} plan. Redirecting to checkout...`,
    })
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-6">
        <Navbar />
        
        <div className="py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your business. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative glass-card ${
                  plan.popular ? "border-2 border-purple-500" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-500">/month</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-purple-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => handleSubscribe(plan.name)}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}