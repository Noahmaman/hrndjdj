import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Security", href: "/features/security" },
    { label: "Enterprise", href: "#enterprise" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
    { label: "Support", href: "#support" },
    { label: "Status", href: "#status" },
  ],
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Licenses", href: "#licenses" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-purple-900/20 backdrop-blur-lg text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold">BoltSaaS</Link>
            <p className="mt-4 text-purple-200">
              Transform your business with our modern SaaS solutions. Built for the future of work.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#twitter" className="hover:text-purple-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#github" className="hover:text-purple-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#linkedin" className="hover:text-purple-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-purple-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-purple-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-purple-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-200">© 2024 BoltSaaS. All rights reserved.</p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-purple-200 hover:text-white text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}