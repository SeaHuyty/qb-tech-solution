export default function Footer() {
  return (
    <>
      <footer className="w-full border-t border-[#3b494c]/15 bg-[#090f15] py-12">
        <div className="flex flex-col items-center gap-8 px-8">
          <div className="text-lg uppercase tracking-[0.2em] text-[#00e5ff] font-['Space_Grotesk']">
            Quantum Bridge
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-['Inter']">
            <a
              className="text-[#3b494c] transition-colors hover:text-[#c3f5ff]"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-[#3b494c] transition-colors hover:text-[#c3f5ff]"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-[#3b494c] transition-colors hover:text-[#c3f5ff]"
              href="#"
            >
              Security
            </a>
            <a
              className="text-[#3b494c] transition-colors hover:text-[#c3f5ff]"
              href="#"
            >
              Status
            </a>
          </div>
          <div className="text-xs text-[#3b494c] font-['Inter']">
            © 2024 Quantum Bridge Tech Solution. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
