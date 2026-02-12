'use client'

import Link from 'next/link'

export default function DisclaimerPage() {
  return (
    <main className="bg-st-bg text-white min-h-screen">
      {/* Header */}
      <div className="fixed w-full top-0 z-50 bg-st-bg/95 backdrop-blur border-b border-st-border">
        <div className="container-max flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="font-inter-tight tracking-tighter text-2xl md:text-3xl font-bold">
            SAMURAI TERMINAL
          </Link>
          <Link href="/" className="text-gray-400 hover:text-st-blue transition-colors">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-max max-w-4xl">
          <div className="bg-st-surface border border-st-border rounded-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Disclaimer</h1>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">General Disclaimer</h2>
                <p>
                  Samurai Terminal is provided for informational purposes only and does not constitute financial, investment, or trading advice.
                  The information, data, and analysis provided through this platform are sourced from third-party providers and are not guaranteed
                  to be accurate, complete, or timely.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">No Investment Advice</h2>
                <p>
                  We do not provide personalized investment recommendations or advice. All market data, analysis, and tools are provided for
                  educational and informational purposes only. You should not rely on our platform as a substitute for professional financial,
                  investment, or tax advice. Always consult with a qualified financial advisor before making any investment decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Risk Acknowledgment</h2>
                <p>
                  Trading and investing in financial markets involves substantial risk of loss. Past performance does not guarantee future results.
                  The value of securities, cryptocurrencies, and other assets can fluctuate significantly and may become worthless. You should only
                  invest money you can afford to lose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Data Accuracy</h2>
                <p>
                  While we strive to provide accurate and up-to-date information, Samurai Terminal makes no warranties or representations regarding
                  the accuracy, completeness, or reliability of the data provided. Market data may be delayed, and prices may not reflect actual
                  market conditions. Always verify critical information with official sources before making decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Data Sources</h2>
                <p>
                  Samurai Terminal aggregates data from various third-party sources including financial data providers and exchanges. We are not
                  responsible for errors, omissions, or inaccuracies in data provided by these sources. Please refer to the original sources for
                  definitive information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Samurai Terminal and its operators shall not be liable for any direct, indirect, incidental,
                  special, consequential, or punitive damages arising from your use of this platform, including loss of profits, data, or opportunities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">No Warranties</h2>
                <p>
                  Samurai Terminal is provided &quot;as is&quot; without warranties of any kind, express or implied, including merchantability, fitness for a
                  particular purpose, or non-infringement. We make no warranty that the platform will be uninterrupted, error-free, or secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">User Responsibility</h2>
                <p>
                  You assume full responsibility for your use of this platform and any decisions made based on the information provided. You acknowledge
                  that you have the knowledge and experience necessary to evaluate the merits and risks of using this platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Regulatory Compliance</h2>
                <p>
                  Samurai Terminal is an informational platform and does not provide brokerage services, execute trades, or hold customer funds.
                  Users are responsible for ensuring their use of this platform complies with all applicable laws and regulations in their jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Changes to Disclaimer</h2>
                <p>
                  We reserve the right to modify this disclaimer at any time. Continued use of Samurai Terminal following any changes constitutes
                  your acceptance of the updated disclaimer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
                <p>
                  If you have questions about this disclaimer, please contact us at{' '}
                  <a href="mailto:support@samuraiterminal.com" className="text-st-blue hover:underline">
                    support@samuraiterminal.com
                  </a>
                </p>
              </section>

              <div className="border-t border-st-border pt-8 mt-8">
                <p className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
