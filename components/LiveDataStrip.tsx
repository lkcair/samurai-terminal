'use client'

import { motion } from 'framer-motion'

export default function LiveDataStrip() {
  const tickers = [
    { symbol: 'DEMO1', price: '$485.32', change: '+1.23', direction: 'up' },
    { symbol: 'DEMO2', price: '$45,230.50', change: '-2.45', direction: 'down' },
    { symbol: 'DEMO3', price: '$892.15', change: '+3.12', direction: 'up' },
    { symbol: 'DEMO4', price: '$2,845.67', change: '-0.89', direction: 'down' },
    { symbol: 'DEMO5', price: '$485.32', change: '+1.23', direction: 'up' },
    { symbol: 'DEMO6', price: '$45,230.50', change: '-2.45', direction: 'down' },
  ]

  return (
    <section className="py-8 bg-st-surface border-y border-st-border overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-12 px-4"
          animate={{ x: [0, -50 * (tickers.length - 4)] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {tickers.map((ticker, index) => (
            <div
              key={index}
              className="flex items-center gap-6 whitespace-nowrap min-w-max font-mono"
            >
              <span className="text-xl font-bold">{ticker.symbol}</span>
              <span className="text-lg text-gray-300">{ticker.price}</span>
              <span
                className={`text-lg font-semibold ${
                  ticker.direction === 'up' ? 'text-st-green' : 'text-st-red'
                }`}
              >
                {ticker.direction === 'up' ? '▲' : '▼'} {ticker.change}%
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
