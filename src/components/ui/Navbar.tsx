import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-lg font not-first:uppercase font-serif tracking-widest">
          Haze
        </Link>

        <button
          className="sm:hidden p-2 rounded-md text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
          <li>
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-serif tracking-widest text-sm">
              Home
            </Link>
          </li>
          <li>
            <a href="#changelog" className="text-foreground hover:text-primary transition-colors font-serif tracking-widest text-sm">
              What's New
            </a>
          </li>
          <li>
            <a href="#updates" className="text-foreground hover:text-primary transition-colors font-serif tracking-widest text-sm">
              Updates
            </a>
          </li>
          <li>
            <a
              href="https://apps.apple.com/us/app/haze-weather-app/id6778630921"
              target="_blank"
              rel="noreferrer"
              className="font-serif tracking-widest text-sm border border-foreground px-4 py-1.5 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Download
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden px-6 pb-4">
          <ul className="flex flex-col gap-3 font-serif tracking-widest text-sm">
            <li>
              <Link to="/" className="block text-foreground hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <a href="#changelog" className="block text-foreground hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                What's New
              </a>
            </li>
            <li>
              <a href="#updates" className="block text-foreground hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                Updates
              </a>
            </li>
            <li>
              <Link to="/privacy" className="block text-foreground hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="block text-foreground hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                Terms
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
