export default function Footer() {
  return (
    <footer className="border-t-2 border-gold bg-pattern-navy py-8 text-center text-xs text-gray-300">
      &copy; {new Date().getFullYear()} Tuhacek Wealth Advisors, LLC. All
      rights reserved.
    </footer>
  );
}
