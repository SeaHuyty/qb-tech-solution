export default function Footer() {
  return (
    <>
      <footer className="w-full border-t border-outline-variant/15 bg-surface-container-lowest py-12">
        <div className="flex flex-col items-center gap-8 px-8">
          <div className="text-lg uppercase tracking-[0.2em] text-primary-container font-bold">
            Quantum Bridge
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-['Inter']">
            <a
              className="text-outline-variant transition-colors hover:text-primary"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-outline-variant transition-colors hover:text-primary"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-outline-variant transition-colors hover:text-primary"
              href="#"
            >
              Security
            </a>
            <a
              className="text-outline-variant transition-colors hover:text-primary"
              href="#"
            >
              Status
            </a>
          </div>
          <div className="text-xs text-outline-variant font-['Inter']">
            © 2024 Quantum Bridge Tech Solution. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
