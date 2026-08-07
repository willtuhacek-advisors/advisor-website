import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tuhacek Wealth Advisors, LLC",
  description: "Get in touch to schedule a consultation.",
};

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-navy">
          Get in touch
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Replace this section with a contact form or your preferred
          scheduling link.
        </p>
        <div className="mt-8 border-t-4 border-gold pt-6 text-sm text-gray-700">
          <p>email@example.com</p>
          <p className="mt-2">(555) 555-5555</p>
        </div>
      </div>
    </div>
  );
}
