"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BarChart3, Lock, Users, Globe, ShoppingBag, Smartphone, Sparkles, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { PricingSection } from "@/components/sections/pricing"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"
import { AnalyticsSection } from "@/components/sections/analytics"
import { Footer } from "@/components/layout/footer"

const features = [
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Deploy worldwide with our enterprise-grade infrastructure",
    color: "from-blue-500 to-cyan-300",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with advanced encryption",
    color: "from-purple-500 to-pink-300",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-second response times",
    color: "from-yellow-500 to-orange-300",
  },
]

const stats = [
  { value: "99.99%", label: "Uptime" },
  { value: "150+", label: "Countries" },
  { value: "10ms", label: "Latency" },
  { value: "24/7", label: "Support" },
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen bg-black">
      <header className="container mx-auto px-6 py-4">
        <Navbar />
      </header>

      <main>
        <section ref={containerRef} className="relative min-h-screen">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y, opacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black" />
            <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-20" />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10 pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 text-sm mb-6 inline-block">
                  <Sparkles className="inline-block w-4 h-4 mr-2" />
                  Trusted by 10,000+ companies worldwide
                </span>
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                The Future of
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
                  Business Operations
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Transform your business with AI-powered automation, real-time analytics, and enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-900 hover:bg-gray-100 text-lg h-14 px-8"
                >
                  Start free trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 text-lg h-14 px-8"
                >
                  Book a demo
                </Button>
              </div>
              <p className="text-gray-400 mt-4">
                No credit card required · 14-day free trial · Cancel anytime
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-20 grid grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-white"
                >
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-32 bg-black"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for the Future
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience cutting-edge technology that scales with your business
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-purple-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-800/50 hover:border-purple-600/50 transition-all duration-300"
                >
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <AnalyticsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}