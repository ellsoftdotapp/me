import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router"

const ArrowUpRight = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5">
    <path
      d="M4 12 12 4M5 4h7v7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const PageShell = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"))

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    document.documentElement.classList.toggle("light", !isDark)
    localStorage.setItem("me-theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <div className="theme-page min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 font-semibold tracking-[-0.03em]">
          <span className="theme-button flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold">
            m
          </span>
          <span>me</span>
        </Link>
        <nav className="theme-surface theme-line flex items-center gap-1 rounded-full border p-1 text-sm shadow-sm">
          <Link
            to="/"
            className={`rounded-full px-4 py-2 transition-colors ${location.pathname === "/" ? "theme-nav-active" : "theme-nav-idle"}`}
          >
            Home
          </Link>
          <Link
            to="/create"
            className={`rounded-full px-4 py-2 transition-colors ${location.pathname === "/create" ? "theme-nav-active" : "theme-nav-idle"}`}
          >
            Create
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            onClick={() => setIsDark((current) => !current)}
            className="theme-toggle flex h-8 w-8 items-center justify-center rounded-full border text-sm transition-colors"
          >
            {isDark ? "☀" : "☾"}
          </button>
          <a
            href="https://github.com/ellsoftdotapp/me"
            target="_blank"
            rel="noreferrer"
            className="theme-muted hidden items-center gap-1.5 text-sm transition-colors sm:flex"
          >
            Open source <ArrowUpRight />
          </a>
        </div>
      </header>
      {children}
      <footer className="theme-line theme-faint mx-auto flex max-w-6xl items-center justify-between border-t px-6 py-6 text-xs lg:px-8">
        <span>Simple data, beautifully shared.</span>
        <span>Built for the web.</span>
      </footer>
    </div>
  )
}
export default PageShell
