import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ComingSoon() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-3xl md:text-4xl font-bold text-snow mb-4">
            Coming Soon
          </h1>
          <p className="text-mist text-lg mb-8">
            tedge.ai is currently in private beta. We&apos;re putting the
            finishing touches on the platform before opening to the public.
          </p>
          <p className="text-mist text-sm mb-8">
            Want early access? Drop us a line at{" "}
            <a
              href="mailto:contact@tedge.ai"
              className="text-gold hover:underline"
            >
              contact@tedge.ai
            </a>
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-glass2 text-snow text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Back to home
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
