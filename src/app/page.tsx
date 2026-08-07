export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight">
            Your Advisory Firm
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-zinc-600 sm:flex">
            <a href="#services" className="hover:text-zinc-900">
              Services
            </a>
            <a href="#about" className="hover:text-zinc-900">
              About
            </a>
            <a href="#contact" className="hover:text-zinc-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Financial guidance built around your goals
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
            Independent, fiduciary financial advice for individuals and
            families planning for retirement, investment, and long-term
            wealth.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-700"
            >
              Schedule a consultation
            </a>
          </div>
        </section>

        <section id="services" className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight">
              Services
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Retirement Planning",
                  desc: "Build a plan to retire with confidence, tailored to your timeline and income needs.",
                },
                {
                  title: "Investment Management",
                  desc: "Diversified, goal-aligned portfolios managed with a long-term perspective.",
                },
                {
                  title: "Wealth & Estate Planning",
                  desc: "Protect and transfer assets efficiently across generations.",
                },
              ].map((service) => (
                <div key={service.title}>
                  <h3 className="font-medium">{service.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 max-w-2xl text-zinc-600">
            Add a short bio here covering your background, credentials, and
            approach to advising clients.
          </p>
        </section>

        <section
          id="contact"
          className="border-t border-zinc-200 bg-zinc-50"
        >
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight">
              Get in touch
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-600">
              Replace this section with a contact form or your preferred
              scheduling link.
            </p>
            <p className="mt-6 text-sm text-zinc-500">
              email@example.com &middot; (555) 555-5555
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Your Advisory Firm. All rights
        reserved.
      </footer>
    </div>
  );
}
