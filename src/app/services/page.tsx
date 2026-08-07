import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Your Advisory Firm",
  description: "Financial advisory services.",
};

const services = [
  {
    title: "Retirement Planning",
    desc: "Build a plan to retire with confidence, tailored to your timeline and income needs. We model multiple scenarios so you can make decisions with a clear picture of the trade-offs.",
  },
  {
    title: "Investment Management",
    desc: "Diversified, goal-aligned portfolios managed with a long-term perspective, with regular reviews to keep your allocation aligned with your risk tolerance and objectives.",
  },
  {
    title: "Wealth & Estate Planning",
    desc: "Protect and transfer assets efficiently across generations, coordinating with your attorney and tax advisor to minimize friction and surprises.",
  },
  {
    title: "Tax-Aware Planning",
    desc: "Strategies that consider the tax impact of investment and withdrawal decisions, aimed at improving after-tax outcomes over time.",
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-navy">
          Services
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          A range of advisory services designed around your financial goals.
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="border-t-4 border-gold pt-4">
              <h2 className="text-lg font-semibold text-navy">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
