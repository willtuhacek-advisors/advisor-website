import Image from "next/image";
import type { Metadata } from "next";
import { basePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Your Advisory Firm",
  description: "Background and experience.",
};

export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-navy">
          About
        </h1>
        <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:items-start">
          <Image
            src={`${basePath}/images/headshot.jpg`}
            alt="Portrait"
            width={280}
            height={280}
            className="h-56 w-56 flex-shrink-0 rounded-full border-4 border-gold object-cover"
            priority
          />
          <div>
            <h2 className="text-xl font-semibold text-navy">Your Name</h2>
            <p className="mt-1 text-sm font-medium text-founders-rock">
              Financial Advisor
            </p>
            <p className="mt-6 max-w-2xl leading-7 text-gray-700">
              13+ years of experience leading and working with teams, high
              net-worth clients, C-Suite and top-level executives in
              demanding metric-based technical and financial environments. A
              proactive self-starter with a proven track record of success
              in tackling ambiguous challenges and driving positive business
              impact by delivering actionable insights and compelling
              data-backed practical solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
