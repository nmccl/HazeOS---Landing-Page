
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Reveal from '../components/ui/Reveal'

export default function Privacy() {
  return (
    <div className="bg-background text-foreground">
      <div className="bg-background/60 backdrop-blur-sm min-h-screen">
        <header>
          <Navbar />
        </header> 

        <main className="px-4 py-12 sm:py-16">
          <section className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="font-serif text-5xl md:text-6xl tracking-wider">Privacy Policy</h1>
            <div className="mx-auto mt-4 h-1 w-24 bg-foreground" />
            <p className="mt-3 text-sm text-neutral-400">Last Updated: June 13, 2026</p>
          </section>

          <section className="max-w-4xl mx-auto space-y-6">
            <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">1. Introduction</h3>
              <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                This Privacy Policy describes how Haze ("the App," "we," "our," or "us"),
                developed by Noah McClung, handles information when you use the Haze iOS
                weather application. We are committed to protecting your privacy. Haze is
                designed to collect only what is strictly necessary to provide weather
                information, and no personal data is collected, stored, or sold by us.
              </p>
              <p className="mt-2 text-sm text-neutral-500">By using Haze, you agree to the practices described in this Privacy Policy.</p>
            </Reveal>

            <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">2. Information We Collect</h3>
              <h4 className="mt-3 font-medium">Location Data</h4>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                Haze requests access to your device's location through Apple's CoreLocation
                framework. Location data is used solely to fetch current weather conditions
                and forecasts for your present position.
              </p>
              <ul className="mt-2 list-disc list-inside text-sm text-neutral-500">
                <li>When you grant "While Using the App" location permission, your device's GPS coordinates are passed directly to Apple's WeatherKit service to retrieve weather data.</li>
                <li>Your location coordinates are never stored by us, never transmitted to our servers, and never shared with any third party other than Apple's WeatherKit.</li>
                <li>You may manually search for and select a city instead of sharing your device location.</li>
              </ul>
            </Reveal>

            <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">Other Details</h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">When you search for a city, MapKit (MKLocalSearchCompleter) processes the query to return suggestions. Haze does not log or store these queries.</p>
              <p className="mt-2 text-sm text-neutral-500">Haze does not collect names, emails, analytics, device identifiers, payment data, or media from your device. We do not use third-party analytics or ad SDKs.</p>
            </Reveal>

            <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">How We Use Information</h3>
              <p className="mt-2 text-sm text-neutral-500">We only use location data to fetch weather and display forecasts. Data is kept in-memory and discarded after use.</p>
            </Reveal>

            <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">Third-Party Services</h3>
              <p className="mt-2 text-sm text-neutral-500">Haze relies on Apple WeatherKit and MapKit. Review Apple's privacy policies for their practices. No other third-party services are integrated.</p>
            </Reveal>

            <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">Data Retention &amp; Sharing</h3>
              <p className="mt-2 text-sm text-neutral-500">We do not retain personal data or sell/share it. The only transmission is to Apple WeatherKit to retrieve weather data.</p>
            </Reveal>

            <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">Children's Privacy</h3>
              <p className="mt-2 text-sm text-neutral-500">Haze is not directed at children under 13. If you believe a child under 13 provided information, contact us.</p>
            </Reveal>

            <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">Your Rights</h3>
              <p className="mt-2 text-sm text-neutral-500">You can manage location permissions in device settings. Because we collect no personal data, CCPA/GDPR requests are generally not applicable. Apple may act as processor for WeatherKit.</p>
            </Reveal>

            <Reveal className="p-6 bg-muted/5 border border-border rounded-lg hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-serif font-semibold uppercase tracking-wide text-sm">Security, Changes &amp; Contact</h3>
              <p className="mt-2 text-sm text-neutral-500">We use Apple's secure networking. We may update this policy; the last updated date will change accordingly.</p>
              <p className="font-serif font-semibold mt-3 text-sm">Contact: <a className="text-primary" href="mailto:contact.silencedev@gmail.com">contact.silencedev@gmail.com</a></p>
            </Reveal>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
