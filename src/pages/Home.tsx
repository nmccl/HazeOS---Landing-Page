import Footer from "@/components/ui/Footer";
import Reveal from "@/components/ui/Reveal";
import HazeOsIcon from "../assets/HazeOsIcon.png"
import BackgroundImage from "../assets/background.png"
import Navbar from "@/components/ui/Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
      <div 
        className="bg-background text-foreground"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for better blend and readability */}
        <div className="bg-background/60 backdrop-blur-sm">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
          <div className="max-w-4xl w-full space-y-12">
            {/* Hero Title */}
            <Reveal>
              <div className="text-center space-y- mb-20 mt-12">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wider leading-tight">
                  CALM.
                  <br />
                  ELEGANT.
                  <br />
                  IMMERSIVE.
                </h1>
                <div className="flex justify-center">
                  <div className="h-1 w-32 bg-foreground" />
                </div>
              </div>
            </Reveal>

            {/* Hero Content - Responsive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <div className="flex justify-center order-2 lg:order-1">
                <Reveal>
                  <img
                    src={HazeOsIcon}
                    alt="HazeOS Logo"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-xl"
                  />
                </Reveal>
              </div>

              {/* Right Side - Text Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <p className="font-serif text-sm md:text-base tracking-widest uppercase leading-relaxed">
                  HazeOS is a minimalistic weather-app designed to provide users with a unique and visually appealing experience.
                </p>

                {/* Features */}
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1 bg-foreground shrink-0" />
                    <div>
                      <h3 className="font-serif font-semibold text-sm md:text-base uppercase tracking-wide">Calm</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1 tracking-wide">Relaxing interface that reduces stress
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1 bg-foreground shrink-0" />
                    <div>
                      <h3 className="font-serif font-semibold text-sm md:text-base uppercase tracking-wide">Elegant</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1 tracking-wide">Refined aesthetics, thoughtfully designed</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1 bg-foreground shrink-0" />
                    <div>
                      <h3 className="font-serif font-semibold text-sm md:text-base uppercase tracking-wide">Immersive</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1 tracking-wide">Engaging experience that draws you in</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <button className="px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-serif uppercase text-xs tracking-widest shadow-sm hover:shadow-md">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Section */}
        <section className="py-24 px-4 bg-muted/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-12">
              <Reveal>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase">
                  Weather, Redefined
                </h2>
              </Reveal>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Real-Time Data",
                    description: "Always stay updated with live weather information"
                  },
                  {
                    title: "Intuitive Design",
                    description: "Experience simplicity without sacrificing functionality"
                  },
                  {
                    title: "Accessible",
                    description: "Weather information for everyone, everywhere"
                  }
                ].map((feature, idx) => (
                  <Reveal key={idx} className="block">
                    <div className="p-6 border border-border rounded-lg hover:bg-muted/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <h3 className="font-serif font-semibold uppercase text-sm md:text-base tracking-wide mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground tracking-wide leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
        </div>
         
      </div>
     
    </>
  );
};

export default Home;
