import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Reveal from '../components/ui/Reveal'

export default function Terms() {
  return (
    
    <div className="min-h-screen flex flex-col">
       <header>
                <Navbar />
        </header> 

      <main className="px-4 py-12 sm:py-16 bg-background/60">
        <section className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="font-serif text-5xl md:text-6xl tracking-wider">Terms of Use</h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-foreground" />
          <p className="mt-3 text-sm text-neutral-400">Last Updated: June 13, 2026</p>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
            <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">1. Acceptance of Terms</h3>
            <p className="mt-3 text-sm text-neutral-500 leading-relaxed">By downloading, installing, or using Haze ("the App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App. These Terms constitute a legally binding agreement between you ("User") and Noah McClung ("Developer," "we," "our," or "us").</p>
          </Reveal>

          <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
            <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">2. License</h3>
            <p className="mt-2 text-sm text-neutral-500">Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download and use Haze on any Apple-branded device that you own or control, solely for your personal, non-commercial purposes.</p>
            <ul className="mt-2 list-disc list-inside text-sm text-neutral-500">
              <li>Reproducing, distributing, or publicly displaying the App or its contents</li>
              <li>Modifying, reverse engineering, decompiling, or disassembling the App</li>
              <li>Using the App for any commercial purpose or for any public display</li>
              <li>Removing any proprietary notices or labels from the App</li>
              <li>Using the App in any manner that could damage, disable, or impair it</li>
            </ul>
          </Reveal>

          <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
            <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">3. Apple App Store Terms</h3>
            <p className="mt-2 text-sm text-neutral-500">Your use of Haze is also subject to the Apple Media Services Terms and Conditions. In the event of a conflict between these Terms and the Apple Media Services Terms and Conditions, the Apple Media Services Terms and Conditions will govern with respect to App Store-specific matters.</p>
          </Reveal>

          <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
            <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">4. Weather Data and Accuracy</h3>
            <p className="mt-2 text-sm text-neutral-500">Haze provides weather data sourced from Apple WeatherKit. Weather information is provided for general informational purposes only.</p>
            <ul className="mt-2 list-disc list-inside text-sm text-neutral-500">
              <li>We do not guarantee the accuracy, completeness, timeliness, or reliability of any weather data displayed in the App.</li>
              <li>Do not rely solely on Haze for decisions affecting safety; consult official services as needed.</li>
              <li>We disclaim liability for loss, injury, or damage from reliance on App data.</li>
            </ul>
          </Reveal>

          <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
            <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">5. Location Services</h3>
            <p className="mt-2 text-sm text-neutral-500">Haze may request access to your device's location to provide localized weather information. By granting location permission, you consent to your device's location being passed to Apple WeatherKit for retrieving weather data.</p>
          </Reveal>

          <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
            <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">6. Intellectual Property</h3>
            <p className="mt-2 text-sm text-neutral-500">The App, including design elements and code (excluding third-party weather data), is owned by Noah McClung and protected by intellectual property laws. All rights not expressly granted are reserved.</p>
          </Reveal>

          <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
            <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">7. Third-Party Services</h3>
            <p className="mt-2 text-sm text-neutral-500 ">The App uses Apple WeatherKit and Apple MapKit. Your use of those services is subject to Apple's terms. We are not responsible for third-party availability or practices.</p>
          </Reveal>

          <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
            <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">8–11. Warranties, Liability &amp; Indemnity</h3>
            <p className="mt-2 text-sm text-neutral-500">The App is provided "as is" without warranties. To the fullest extent permitted by law, we disclaim warranties and limit liability; our total liability shall not exceed the amount you paid for the App (if any). You agree to indemnify and hold harmless the developer for claims arising from your use of the App.</p>
          </Reveal>

          <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
            <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">11–16. Changes, Termination, Governing Law</h3>
            <p className="mt-2 text-sm text-neutral-500">We may modify or discontinue the App or these Terms at any time. These Terms are governed by the laws of Tennessee and disputes are generally resolved via arbitration, subject to limited exceptions.</p>
            <p className="font-serif font-semibold mt-3 text-sm">Contact: <a className="text-primary" href="mailto:contact.silencedev@gmail.com">contact.silencedev@gmail.com</a></p>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  )
}
