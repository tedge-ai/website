import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-rim">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/icon.svg" alt="tedge" width={24} height={24} className="rounded-md" />
              <span className="text-sm font-semibold text-snow">
                tedge<span className="text-gold">.ai</span>
              </span>
            </div>
            <p className="text-xs text-mist leading-relaxed">
              AI-powered trading intelligence platform. Smart Market Structure
              analysis for smarter trading decisions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-snow uppercase tracking-wider mb-3">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-xs text-mist hover:text-snow transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-xs text-mist hover:text-snow transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://docs.tedge.ai" className="text-xs text-mist hover:text-snow transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold text-snow uppercase tracking-wider mb-3">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://app.tedge.ai/sign-up" className="text-xs text-mist hover:text-snow transition-colors">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="https://app.tedge.ai/sign-in" className="text-xs text-mist hover:text-snow transition-colors">
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold text-snow uppercase tracking-wider mb-3">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@tedge.ai" className="text-xs text-mist hover:text-snow transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://docs.tedge.ai" className="text-xs text-mist hover:text-snow transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-rim" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mist">
            &copy; {new Date().getFullYear()} tedge.ai — All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-mist hover:text-snow transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-mist hover:text-snow transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
