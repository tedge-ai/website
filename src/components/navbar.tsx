import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rim bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icon.svg" alt="tedge" width={28} height={28} className="rounded-lg" />
          <span className="text-lg font-semibold text-snow tracking-tight">
            tedge<span className="text-gold">.ai</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-mist hover:text-snow transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-mist hover:text-snow transition-colors">
            Pricing
          </a>
          <a href="https://docs.tedge.ai" className="text-sm text-mist hover:text-snow transition-colors">
            Docs
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://app.tedge.ai/sign-in" className="text-sm text-mist hover:text-snow transition-colors px-3 py-2">
            Sign in
          </a>
          <a
            href="https://app.tedge.ai/sign-up"
            className="text-sm bg-gold text-ink hover:bg-gold/80 font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </header>
  );
}
