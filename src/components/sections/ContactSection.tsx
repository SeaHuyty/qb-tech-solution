export default function ContactSection() {
  return (
    <section className="bg-surface-container-lowest py-24">
      <div className="container mx-auto px-8">
        <div className="glass-card mx-auto flex max-w-6xl flex-col overflow-hidden rounded-xl md:flex-row">
          <div className="border-outline-variant/10 bg-gradient-to-br from-[#0e141a] to-[#161c22] p-12 md:w-2/5 md:border-r">
            <h2 className="mb-4 font-headline text-3xl font-bold">
              Ready to Build the Future?
            </h2>
            <p className="mb-12 text-on-surface-variant">
              Let&apos;s discuss how Quantum Bridge can accelerate your
              technical roadmap and deliver the competitive edge you need.
            </p>
            <div className="space-y-6">
              <div className="group flex items-center gap-4">
                <span className="material-symbols-outlined rounded-full bg-primary/10 p-2 text-primary">
                  mail
                </span>
                <span className="cursor-pointer text-sm font-medium transition-colors hover:text-primary">
                  nexus@quantumbridge.tech
                </span>
              </div>
              <div className="group flex items-center gap-4">
                <span className="material-symbols-outlined rounded-full bg-primary/10 p-2 text-primary">
                  location_on
                </span>
                <span className="text-sm font-medium">
                  Silicon Valley HQ, San Jose
                </span>
              </div>
            </div>
          </div>

          <div className="bg-surface p-12 md:w-3/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-outline">
                    Full Name
                  </label>
                  <input
                    className="w-full rounded-sm border-none bg-surface-container-highest px-4 py-3 text-sm transition-all focus:ring-1 focus:ring-primary/40"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-outline">
                    Company Email
                  </label>
                  <input
                    className="w-full rounded-sm border-none bg-surface-container-highest px-4 py-3 text-sm transition-all focus:ring-1 focus:ring-primary/40"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-outline">
                  Project Overview
                </label>
                <textarea
                  className="w-full rounded-sm border-none bg-surface-container-highest px-4 py-3 text-sm transition-all focus:ring-1 focus:ring-primary/40"
                  placeholder="Briefly describe your vision..."
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full rounded-sm bg-gradient-to-br from-primary to-primary-container py-4 text-sm font-bold font-label uppercase tracking-widest text-on-primary shadow-lg shadow-primary-container/10 transition-all hover:brightness-110 active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
