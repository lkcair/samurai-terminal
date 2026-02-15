'use client'

import { motion } from 'framer-motion'
import { Globe, Brain, TrendingUp } from 'lucide-react'

export default function FeaturesGrid() {
  const features = [
    {
      icon: Globe,
      title: 'Global Multi-Asset Coverage',
      description: 'Stocks, Crypto, Forex, and Futures in one unified view.',
      color: 'text-st-blue',
    },
    {
      icon: Brain,
      title: 'Proprietary AI Engine',
      description: 'Analyze filings and earnings transcripts in seconds, not hours.',
      color: 'text-st-green',
    },
    {
      icon: TrendingUp,
      title: 'Professional Tools',
      description: 'Technical indicators (RSI, MACD, Bollinger) at institutional precision.',
      color: 'text-st-blue',
    },
  ]

  return (
    <section id="markets" className="py-20 md:py-32 bg-st-bg">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Samurai Terminal</h2>
          <p className="text-xl text-gray-300">Institutional-grade tools, zero corporate overhead</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:border-st-blue/50 transition-colors duration-300 cursor-pointer group"
              >
                <div className={`${feature.color} mb-4`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-st-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
