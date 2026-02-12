import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Samurai Terminal',
  description: 'Privacy Policy for Samurai Terminal - GDPR, CCPA, and LGPD compliant',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-st-bg text-gray-100">
      <div className="pt-32 pb-20 container-max max-w-4xl">
        <Link href="/" className="text-st-blue hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last Updated: February 11, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Samurai Terminal (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our website and services. This policy complies
              with GDPR (EU), CCPA (California), LGPD (Brazil), and other international privacy regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, account credentials</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent</li>
              <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
              <li><strong>Location Data:</strong> General geographic location based on IP address</li>
              <li><strong>Financial Information:</strong> When using premium features, payment information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Providing and maintaining the Service</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending administrative information and updates</li>
              <li>Improving and personalizing your experience</li>
              <li>Preventing fraud and illegal activities</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. GDPR Compliance (EU Users)</h2>
            <p className="mb-4">
              For EU residents, we process personal data based on:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Your consent</li>
              <li>Contract fulfillment</li>
              <li>Legal obligations</li>
              <li>Legitimate interests</li>
            </ul>
            <p className="mt-4">
              You have the right to: access, rectify, erase, restrict processing, data portability, and object to processing.
              Contact us to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. CCPA Compliance (California Users)</h2>
            <p className="mb-4">
              California residents have specific rights including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale/sharing of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. LGPD Compliance (Brazil Users)</h2>
            <p>
              We comply with Brazil&rsquo;s Lei Geral de Proteção de Dados (LGPD) regarding the processing of personal data of Brazilian residents.
              You have rights including access, correction, deletion, and portability of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to provide the Service and comply with legal obligations. When you
              request deletion, we delete or anonymize your data within 30 days, except where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Services</h2>
            <p>
              We may use third-party services for analytics, payment processing, and infrastructure. These third parties may have access to
              your personal information to perform tasks but are obligated to keep it confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
            <p>
              Your information may be transferred to, stored in, and processed in countries other than your country of residence. These
              countries may have different privacy laws. By using the Service, you consent to the transfer of your information to countries
              outside your country of residence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <p>
              For privacy-related inquiries or to exercise your privacy rights, contact us at: privacy@samuraiterminal.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
