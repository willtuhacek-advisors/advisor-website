export default function Footer() {
  return (
    <footer className="border-t-2 border-gold bg-navy py-8 text-center text-xs text-gray-300">
      &copy; {new Date().getFullYear()} Your Advisory Firm. All rights
      reserved.
    </footer>
  );
}
