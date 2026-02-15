'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { TrendingUp, Zap, Shield } from 'lucide-react'
import LoginModal from './auth/LoginModal'

export default function Hero() {
  const router = useRouter()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-st-bg">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              The Best Financial Terminal Alternative.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Institutional-grade market data, real-time SEC analysis, and AI-powered screener.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-st-surface border border-st-border rounded-full">
                <Zap size={18} className="text-st-green" />
                <span className="text-sm">Real-time Data</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-st-surface border border-st-border rounded-full">
                <TrendingUp size={18} className="text-st-blue" />
                <span className="text-sm">Zero Latency</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-st-surface border border-st-border rounded-full">
                <Shield size={18} className="text-st-green" />
                <span className="text-sm">Open Source Data</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/terminal" className="btn-secondary text-lg px-8 py-4 inline-block">
                Start Free
              </Link>
              <Link href="/pricing" className="btn-primary text-lg px-8 py-4 inline-block">
                Contact Sales
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-st-surface border border-st-border rounded-lg p-6 shadow-2xl">
              <div className="bg-st-bg rounded p-4">
                {/* Fake dashboard mockup */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex justify-between items-center pb-4 border-b border-st-border">
                    <div className="h-4 w-24 bg-st-border rounded"></div>
                    <div className="flex gap-2">
                      <div className="h-4 w-4 bg-st-border rounded"></div>
                      <div className="h-4 w-4 bg-st-border rounded"></div>
                      <div className="h-4 w-4 bg-st-border rounded"></div>
                    </div>
                  </div>

                  {/* Chart area */}
                  <div className="h-48 bg-gradient-to-b from-st-border/20 to-st-border/5 rounded flex items-end gap-1 p-4">
                    {[20, 40, 35, 60, 45, 70, 55, 65].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-st-blue/50 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-st-bg border border-st-border rounded p-3 text-center">
                      <div className="text-sm text-gray-400">BTC</div>
                      <div className="font-mono text-st-green">+12.5%</div>
                    </div>
                    <div className="bg-st-bg border border-st-border rounded p-3 text-center">
                      <div className="text-sm text-gray-400">ETH</div>
                      <div className="font-mono text-st-red">-3.2%</div>
                    </div>
                    <div className="bg-st-bg border border-st-border rounded p-3 text-center">
                      <div className="text-sm text-gray-400">SPY</div>
                      <div className="font-mono text-st-green">+2.1%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={() => {
          setIsLoginModalOpen(false)
          router.push('/terminal')
        }}
      />
    </section>
  )
}
