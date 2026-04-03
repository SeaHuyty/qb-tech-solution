export default function NavBar() {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#0e141a]/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,218,243,0.08)]">
        <div className="mx-auto flex max-w-360 items-center justify-between px-8 py-4">
          <div className="text-xl font-bold tracking-tighter text-primary">
            Quantum Bridge
          </div>
          <div className="hidden items-center space-x-8 tracking-tight md:flex">
            <a
              className="text-outline-variant transition-all duration-300 hover:text-primary"
              href="#"
            >
              Services
            </a>
            <a
              className="text-outline-variant transition-all duration-300 hover:text-primary"
              href="#"
            >
              Why Us
            </a>
            <a
              className="text-outline-variant transition-all duration-300 hover:text-primary"
              href="#"
            >
              About
            </a>
            <a
              className="text-outline-variant transition-all duration-300 hover:text-primary"
              href="#"
            >
              Contact
            </a>
          </div>
          <button className="scale-95 rounded-sm bg-linear-to-br from-primary to-primary-container px-6 py-2 font-label font-bold text-sm uppercase tracking-wider text-on-primary transition-all duration-300 hover:opacity-80 active:scale-90">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}