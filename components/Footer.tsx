'use client'

export default function Footer() {
  return (
    <footer className="bg-st-surface border-t border-st-border py-16">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Terminal Features */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Terminal Features</h3>
            <ul className="space-y-2">
              {/* TODO: Uncomment when features are ready
              <li>
                <a href="#" className="text-gray-400 hover:text-st-blue transition-colors">
                  Stock Screener
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-st-blue transition-colors">
                  Crypto Heatmap
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-st-blue transition-colors">
                  Earnings Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-st-blue transition-colors">
                  API Documentation
                </a>
              </li>
              */}
              <li>
                <a href="/terminal" className="text-gray-400 hover:text-st-blue transition-colors">
                  Free Terminal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {/* TODO: Uncomment when company pages are ready
              <li>
                <a href="#" className="text-gray-400 hover:text-st-blue transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-st-blue transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-st-blue transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-st-blue transition-colors">
                  Contact
                </a>
              </li>
              */}
              <li>
                <a href="mailto:support@samuraiterminal.com" className="text-gray-400 hover:text-st-blue transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-st-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-st-blue transition-colors">
                  Terms of Service
                </a>
              </li>
              {/* TODO: Uncomment when legal pages are ready
              <li>
                <a href="/cookies" className="text-gray-400 hover:text-st-blue transition-colors">
                  Cookie Policy
                </a>
              </li>
              */}
              <li>
                <a href="/disclaimer" className="text-gray-400 hover:text-st-blue transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              {/* TODO: Uncomment when social media accounts are ready
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-st-blue transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-st-blue transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-st-blue transition-colors"
                >
                  Discord
                </a>
              </li>
              */}
              <li>
                <a href="mailto:support@samuraiterminal.com" className="text-gray-400 hover:text-st-blue transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-st-border pt-8 text-center text-gray-400">
          <p>
            © 2026 Samurai Financial Data Systems. Powered by{' '}
            <a
              href="https://github.com/marialuizafalci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-st-blue hover:underline"
            >
              lkcair
            </a>
            .
          </p>
          <p className="text-sm mt-4">
            Samurai Terminal provides market data for informational purposes only. Not investment advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
