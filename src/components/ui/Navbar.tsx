import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-lg font not-first:uppercase font-serif tracking-widest">
          HAZEOS
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
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-serif tracking-widest">
              Home
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="text-foreground hover:text-primary transition-colors font-serif tracking-widest">
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="text-foreground hover:text-primary transition-colors font-serif tracking-widest">
              Terms
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden px-6 pb-4">
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/" className="block text-foreground hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                Home
              </Link>
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
