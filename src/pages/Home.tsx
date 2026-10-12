import { useState } from "react";
import Footer from "@/components/ui/Footer";
import Reveal from "@/components/ui/Reveal";
import HazeIcon from "../assets/HazeIcon.png";
import BackgroundImage from "../assets/background.png";
import Navbar from "@/components/ui/Navbar";
import ScreenshotCity from "../assets/screenshot-city.png";
import ScreenshotMountain from "../assets/screenshot-mountain.png";
import ScreenshotSunMoon from "../assets/screenshot-sunmoon.png";
import Screenshot7Day from "../assets/screenshot-7day.png";
import ScreenshotConditions from "../assets/screenshot-conditions.png";
import ScreenshotAirQuality from "../assets/screenshot-airquality.png";

const INIT = "INIT";
const SUBMITTING = "SUBMITTING";
const ERROR = "ERROR";
const SUCCESS = "SUCCESS";
type FormState = typeof INIT | typeof SUBMITTING | typeof ERROR | typeof SUCCESS;

const FORM_ID = "cmsl9g8ac2axy0j1akr5nhh84";
const LOOPS_DOMAIN = "app.loops.so";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>(INIT);
  const [errorMessage, setErrorMessage] = useState("");

  const reset = () => {
    setEmail("");
    setFormState(INIT);
    setErrorMessage("");
  };

  const hasRecentSubmission = () => {
    const now = Date.now();
    const prev = localStorage.getItem("haze-form-ts");
    if (prev && Number(prev) + 60_000 > now) {
      setFormState(ERROR);
      setErrorMessage("Too many signups — try again in a moment.");
      return true;
    }
    localStorage.setItem("haze-form-ts", String(now));
    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState !== INIT) return;
    if (!/.+@.+/.test(email)) {
      setFormState(ERROR);
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (hasRecentSubmission()) return;
    setFormState(SUBMITTING);

    fetch(`https://${LOOPS_DOMAIN}/api/newsletter-form/${FORM_ID}`, {
      method: "POST",
      body: `userGroup=Haze&email=${encodeURIComponent(email)}&mailingLists=`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => Promise.all([res.ok, res.json()]))
      .then(([ok, data]) => {
        if (ok) {
          setEmail("");
          setFormState(SUCCESS);
        } else {
          setFormState(ERROR);
          setErrorMessage(data.message || "Something went wrong.");
          localStorage.setItem("haze-form-ts", "");
        }
      })
      .catch((err) => {
        setFormState(ERROR);
        setErrorMessage(
          err.message === "Failed to fetch"
            ? "Too many signups — try again in a moment."
            : err.message || "Something went wrong."
        );
        localStorage.setItem("haze-form-ts", "");
      });
  };

  if (formState === SUCCESS) {
    return (
      <p className="font-serif text-sm tracking-widest uppercase text-foreground/60">
        Thanks — we'll be in touch.
      </p>
    );
  }

  return (
    <div className="w-full max-w-sm">
      {formState === ERROR && (
        <p className="font-serif text-xs tracking-wide text-red-500 mb-3">
          {errorMessage}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-transparent border-b border-foreground/40 focus:border-foreground outline-none py-2 text-sm font-serif tracking-wide placeholder:text-foreground/30 transition-colors"
        />
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="font-serif uppercase text-xs tracking-widest border border-foreground px-6 py-2 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            {formState === SUBMITTING ? "Sending…" : "Join Updates"}
          </button>
          {formState === ERROR && (
            <button
              type="button"
              onClick={reset}
              className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors font-serif"
            >
              ← Back
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

const detailScreenshots = [
  { src: ScreenshotSunMoon, alt: "Sun & Moon detail view" },
  { src: Screenshot7Day, alt: "7-day forecast view" },
  { src: ScreenshotConditions, alt: "Weather conditions view" },
  { src: ScreenshotAirQuality, alt: "Air quality view" },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-background text-foreground"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-background/60 backdrop-blur-sm">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
            <div className="max-w-4xl w-full space-y-12">
              <Reveal>
                <div className="text-center space-y- mb-20 mt-12">
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wider leading-tight">
                    CALM.
                    <br />
                    ELEGANT.
                    <br />
                    IMMERSIVE.
                  </h1>
                  <div className="flex justify-center mt-4">
                    <div className="h-1 w-32 bg-foreground" />
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center order-2 lg:order-1">
                  <Reveal>
                    <img
                      src={HazeIcon}
                      alt="Haze Logo"
                      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-xl"
                    />
                  </Reveal>
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                  <p className="font-serif text-sm md:text-base tracking-widest uppercase leading-relaxed">
                    Haze is a minimalistic weather app designed to provide a
                    unique and visually immersive experience.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Living Landscapes",
                        desc: "Hand-drawn scenes for desert, mountains, coast, forest, and more — animated with drifting clouds and falling rain.",
                      },
                      {
                        title: "Detailed Forecasts",
                        desc: "Sun & Moon arcs, a scrubable 24-hour line, 7-day overview, air quality, and full conditions — one swipe away.",
                      },
                      {
                        title: "Made Yours",
                        desc: "System, Light, Dark, or Warm paper tone. °F or °C, mph or km/h.",
                      },
                    ].map(({ title, desc }) => (
                      <div key={title} className="flex gap-4">
                        <div className="w-1 bg-foreground shrink-0" />
                        <div>
                          <h3 className="font-serif font-semibold text-sm md:text-base uppercase tracking-wide">
                            {title}
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground mt-1 tracking-wide">
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <a
                      href="https://apps.apple.com/us/app/haze-weather-app/id6778630921"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-serif uppercase text-xs tracking-widest shadow-sm hover:shadow-md"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* New in 2.0 — Phone screenshots */}
          <section className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
              <Reveal>
                <div className="text-center mb-16">
                  <p className="font-serif text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Haze 2.0
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase">
                    A sky that feels alive.
                  </h2>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <Reveal>
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={ScreenshotCity}
                      alt="Haze app showing city landscape with clear skies"
                      loading="lazy"
                      className="w-full max-w-xs rounded-3xl shadow-2xl border border-border/20"
                    />
                    <p className="font-serif text-xs tracking-widest uppercase text-muted-foreground text-center">
                      Clear skies over the city
                    </p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="flex flex-col items-center gap-4 md:mt-16">
                    <img
                      src={ScreenshotMountain}
                      alt="Haze app showing mountain landscape with rain"
                      loading="lazy"
                      className="w-full max-w-xs rounded-3xl shadow-2xl border border-border/20"
                    />
                    <p className="font-serif text-xs tracking-widest uppercase text-muted-foreground text-center">
                      Storm rolls in over the mountains
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal>
                <div className="mt-16 max-w-2xl mx-auto space-y-4 text-center">
                  <p className="font-serif text-sm tracking-wide text-muted-foreground leading-relaxed">
                    Ink clouds drift slowly around the sun. When it rains, storm
                    clouds roll in and rain falls across the scene. Each place
                    you save gets its own hand-drawn landscape — desert, coast,
                    lake, forest, and more.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Detail Views — App Store screenshots */}
          <section className="py-24 px-4 bg-muted/5">
            <div className="max-w-5xl mx-auto">
              <Reveal>
                <div className="text-center mb-16">
                  <p className="font-serif text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    A closer look
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase">
                    Weather, in greater detail.
                  </h2>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {detailScreenshots.map(({ src, alt }, i) => (
                  <Reveal key={i} className="block">
                    <img
                      src={src}
                      alt={alt}
                      className="w-full rounded-2xl shadow-lg border border-border/10 hover:-translate-y-1 transition-transform duration-300"
                    />
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {[
                    {
                      title: "Sun & Moon",
                      desc: "See exactly where the sun or moon sits right now — drag it through the day.",
                    },
                    {
                      title: "Next 24 Hours",
                      desc: "A single temperature line you can scrub hour by hour, with rain chances below.",
                    },
                    {
                      title: "7 Days",
                      desc: "The shape of the week at a glance. Tap any day for more.",
                    },
                    {
                      title: "Air Quality",
                      desc: "Today's index with what it means for you, sourced from Apple Weather and Open-Meteo.",
                    },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex gap-3">
                      <div className="w-1 bg-foreground/30 shrink-0 mt-1" />
                      <div>
                        <h3 className="font-serif font-semibold text-sm uppercase tracking-wide">
                          {title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 tracking-wide leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* What's New / Changelog */}
          <section id="changelog" className="py-24 px-4 scroll-mt-20">
            <div className="max-w-3xl mx-auto">
              <Reveal>
                <div className="text-center mb-12">
                  <p className="font-serif text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Release Notes
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl tracking-wider uppercase">
                    What's New in Haze 2.0
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="border border-border rounded-lg p-8 md:p-10 space-y-8 bg-background/40">
                  <p className="font-serif text-sm tracking-wide text-muted-foreground leading-relaxed italic">
                    Haze has a new look. Your clouds now move, and everything
                    else came along with it.
                  </p>

                  {[
                    {
                      heading: "A sky that feels alive",
                      items: [
                        "Hand-drawn landscapes that match where you are: desert, mountains, coast, lake, forest and more.",
                        "Ink clouds drift slowly around the sun.",
                        "When it rains, storm clouds roll in and rain falls across the scene.",
                      ],
                    },
                    {
                      heading: "All your places, one swipe away",
                      items: [
                        "Save any city and swipe up or down to move between them.",
                        "Each place has its own landscape and weather.",
                        "To remove a place, pull its page aside, or swipe it away in the location list.",
                      ],
                    },
                    {
                      heading: "A closer look",
                      preamble:
                        "Swipe over for a new page of advanced details:",
                      items: [
                        "Sun & Moon: see where the sun or moon is right now, and drag it through the day.",
                        "Next 24 Hours: a single temperature line you can scrub hour by hour, with rain chances below.",
                        "7 Days: the shape of the week at a glance. Tap any day for more.",
                        "Conditions: wind, UV, humidity and feels-like, each drawn to match.",
                        "Air Quality: today's index, with what it means for you.",
                      ],
                    },
                    {
                      heading: "Make it yours",
                      items: [
                        "Appearance: System, Light, Dark, or the new Warm paper tone.",
                        "Units: switch between °F and °C, mph and km/h.",
                      ],
                    },
                    {
                      heading: "Refined throughout",
                      items: [
                        "A Liquid Glass forecast bar and location search.",
                        "Smoother, quieter animations that respect Reduce Motion.",
                      ],
                    },
                  ].map(({ heading, preamble, items }) => (
                    <div key={heading} className="space-y-3">
                      <h3 className="font-serif font-semibold text-sm uppercase tracking-widest">
                        {heading}
                      </h3>
                      {preamble && (
                        <p className="text-xs text-muted-foreground tracking-wide">
                          {preamble}
                        </p>
                      )}
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-xs md:text-sm text-muted-foreground tracking-wide leading-relaxed"
                          >
                            <span className="mt-1.5 w-1 h-1 bg-foreground/40 rounded-full shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Updates Signup */}
          <section id="updates" className="py-24 px-4 bg-muted/5 scroll-mt-20">
            <div className="max-w-2xl mx-auto text-center">
              <Reveal>
                <div className="space-y-6">
                  <p className="font-serif text-xs tracking-widest uppercase text-muted-foreground">
                    Stay in the loop
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl tracking-wider uppercase">
                    Get Updates
                  </h2>
                  <p className="font-serif text-sm tracking-wide text-muted-foreground leading-relaxed">
                    Be the first to know about new features, improvements, and
                    what's coming next.
                  </p>
                  <div className="flex justify-center pt-2">
                    <NewsletterSignup />
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
