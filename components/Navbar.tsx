'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-st-bg/95 backdrop-blur border-b border-st-border">
      <div className="container-max flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="font-inter-tight tracking-tighter text-2xl md:text-3xl font-bold">
          SAMURAI TERMINAL
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {/* TODO: Uncomment when pages are ready
          <a href="#markets" className="hover:text-st-blue transition-colors">
            Markets
          </a>
          <a href="#screeners" className="hover:text-st-blue transition-colors">
            Screeners
          </a>
          <a href="#ai-engine" className="hover:text-st-blue transition-colors">
            AI Engine
          </a>
          */}
          <a href="#pricing" className="hover:text-st-blue transition-colors">
            Pricing
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/terminal" className="btn-secondary">
            Open Terminal (Free)
          </Link>
          <Link href="/pricing" className="btn-primary">
            Contact Sales
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-st-surface border-b border-st-border">
          <div className="container-max py-4 space-y-4">
            {/* TODO: Uncomment when pages are ready
            <a
              href="#markets"
              className="block py-2 hover:text-st-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Markets
            </a>
            <a
              href="#screeners"
              className="block py-2 hover:text-st-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Screeners
            </a>
            <a
              href="#ai-engine"
              className="block py-2 hover:text-st-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              AI Engine
            </a>
            */}
            <a
              href="#pricing"
              className="block py-2 hover:text-st-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <Link href="/terminal" className="btn-secondary block text-center w-full">
              Open Terminal (Free)
            </Link>
            <Link href="/pricing" className="btn-primary block text-center w-full">
              Contact Sales
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
