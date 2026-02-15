import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Samurai Terminal',
  description: 'Terms of Service for Samurai Terminal financial platform',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-st-bg text-gray-100">
      <div className="pt-32 pb-20 container-max max-w-4xl">
        <Link href="/" className="text-st-blue hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last Updated: February 11, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Samurai Terminal (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use this Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Samurai Terminal
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the Service</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or &ldquo;mirroring&rdquo; the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
            <p>
              The materials on Samurai Terminal are provided on an &apos;as is&apos; basis. Samurai Terminal makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties
              or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other
              violation of rights. Further, Samurai Terminal does not warrant or make any representations concerning the accuracy, likely results,
              or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites
              linked to this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
            <p>
              In no event shall Samurai Terminal or its suppliers be liable for any damages (including, without limitation, damages for loss
              of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Samurai Terminal,
              even if Samurai Terminal or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Samurai Terminal could include technical, typographical, or photographic errors. Samurai Terminal does
              not warrant that any of the materials on this site are accurate, complete, or current. Samurai Terminal may make changes to the
              materials contained on this site at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Links</h2>
            <p>
              Samurai Terminal has not reviewed all of the sites linked to its website and is not responsible for the contents of any such
              linked site. The inclusion of any link does not imply endorsement by Samurai Terminal of the site. Use of any such linked website
              is at the user&apos;s own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
            <p>
              Samurai Terminal may revise these terms of service for this website at any time without notice. By using this website you are
              agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably
              submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at support@samuraiterminal.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
