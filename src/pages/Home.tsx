import { Link } from "react-router"
import PageShell from "../components/PageShell"
import Display from "../components/Display"

const Home = () => (
  <PageShell>
    <main>
      <section className="mx-auto grid max-w-6xl gap-14 px-6 pt-20 pb-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:pt-28">
        <div>
          <div className="theme-surface theme-line theme-muted mb-7 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs shadow-sm">
            <span className="theme-accent h-1.5 w-1.5 rounded-full" /> A quieter way to share data
          </div>
          <h1 className="max-w-xl text-5xl leading-[1.03] font-semibold tracking-[-0.07em] sm:text-6xl">
            Turn small bits of data into{" "}
            <span className="theme-faint">something worth sharing.</span>
          </h1>
          <p className="theme-muted mt-7 max-w-md text-lg leading-8">
            Data dot makes lightweight, link-ready pages for the information you want to put out
            into the world.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/create"
              className="theme-button rounded-full px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              Create a page <span className="theme-preview-muted ml-2">→</span>
            </Link>
            <a
              href="#how-it-works"
              className="theme-button-secondary rounded-full border px-5 py-3 text-sm font-medium transition-colors"
            >
              How it works
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <Display
            data={{
              title: "My Links",
              items: {
                ig: "ihopethisguydoesntexsist",
                ws: "vrtxx.uk",
              },
            }}
          />
        </div>
      </section>
      <section id="how-it-works" className="theme-line theme-surface border-y">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="theme-faint text-xs font-medium tracking-[0.18em] uppercase">
              Why data dot
            </p>
            <h2 className="mt-4 max-w-sm text-3xl leading-tight font-semibold tracking-[-0.05em]">
              All the useful bits. None of the noise.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              ["01", "Keep it simple", "Add a title and the links or details people need."],
              ["02", "Share one link", "Your page is encoded into a clean, portable URL."],
              ["03", "Stay in control", "Your data lives in the link. No account required."],
            ].map(([number, title, text]) => (
              <div key={number} className="theme-line-strong border-t pt-4">
                <span className="theme-faint text-xs">{number}</span>
                <h3 className="mt-8 text-base font-medium">{title}</h3>
                <p className="theme-muted mt-2 text-sm leading-6">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-16 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-[-0.04em]">Ready to make your page?</h2>
          <p className="theme-muted mt-2 text-sm">It takes less than a minute to get started.</p>
        </div>
        <Link
          to="/create"
          className="theme-button shrink-0 rounded-full px-5 py-3 text-sm font-medium"
        >
          Start creating <span className="theme-preview-muted ml-2">→</span>
        </Link>
      </section>
    </main>
  </PageShell>
)

export default Home
