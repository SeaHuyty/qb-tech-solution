export default function NavBar() {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#0e141a]/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,218,243,0.08)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-4">
          <div className="text-xl font-bold tracking-tighter text-[#c3f5ff] font-['Space_Grotesk']">
            Quantum Bridge
          </div>
          <div className="hidden items-center space-x-8 tracking-tight font-['Space_Grotesk'] md:flex">
            <a
              className="text-[#3b494c] transition-all duration-300 hover:text-[#c3f5ff]"
              href="#"
            >
              Services
            </a>
            <a
              className="text-[#3b494c] transition-all duration-300 hover:text-[#c3f5ff]"
              href="#"
            >
              Why Us
            </a>
            <a
              className="text-[#3b494c] transition-all duration-300 hover:text-[#c3f5ff]"
              href="#"
            >
              About
            </a>
            <a
              className="text-[#3b494c] transition-all duration-300 hover:text-[#c3f5ff]"
              href="#"
            >
              Contact
            </a>
          </div>
          <button className="scale-95 rounded-sm bg-gradient-to-br from-primary to-primary-container px-6 py-2 font-label text-sm uppercase tracking-wider text-on-primary transition-all duration-300 hover:opacity-80 active:scale-90">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}