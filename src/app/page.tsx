import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-pattern-navy">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Financial guidance built around{" "}
            <span className="text-gold">your goals</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
            Independent, fiduciary financial advice for individuals and
            families planning for retirement, investment, and long-term
            wealth.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-dark px-6 py-3 text-sm font-semibold text-navy-dark shadow-sm transition hover:from-gold-dark hover:to-gold"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-navy">
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
              <div
                key={service.title}
                className="border-t-4 border-gold pt-4"
              >
                <h3 className="font-medium text-navy">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="text-sm font-semibold text-founders-rock hover:text-navy"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-navy">
            Ready to talk?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Learn more about my background and approach, or get in touch to
            schedule a consultation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/about"
              className="rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:border-transparent hover:bg-gradient-to-r hover:from-navy hover:to-founders-rock hover:text-white"
            >
              About me
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-navy to-founders-rock px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-navy-dark hover:to-navy"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
