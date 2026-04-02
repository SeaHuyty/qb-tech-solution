import type { CSSProperties } from "react";

const filledIconStyle: CSSProperties = {
  fontVariationSettings: "'FILL' 1",
};

export default function WhyChooseUsSection() {
  return (
    <section className="bg-surface-container-lowest py-24">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <span className="font-label text-sm uppercase tracking-[0.3em] text-primary-container">
              Advantage
            </span>
            <h2 className="mb-8 mt-4 font-headline text-4xl font-bold leading-tight md:text-5xl">
              Precision Engineered For Success
            </h2>
            <p className="mb-12 text-lg text-on-surface-variant">
              Our methodology blends deep-tech engineering with human-centric
              design, ensuring your solution is as intuitive as it is powerful.
            </p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>
                  <h4 className="font-headline text-lg font-bold">
                    Industry Certified
                  </h4>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Meeting global standards for security and architectural
                  integrity.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    support_agent
                  </span>
                  <h4 className="font-headline text-lg font-bold">
                    24/7 Dedicated Support
                  </h4>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Global monitoring and assistance for your critical
                  infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="glass-card flex items-start gap-6 p-8 transition-colors hover:bg-surface-container-high">
              <div className="rounded-lg bg-secondary-container/20 p-3 text-secondary">
                <span
                  className="material-symbols-outlined"
                  style={filledIconStyle}
                >
                  rocket_launch
                </span>
              </div>
              <div>
                <h4 className="mb-1 font-headline text-xl font-bold">
                  Cutting-Edge Innovation
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Access to R&amp;D labs and the latest technological
                  breakthroughs before they hit the mainstream.
                </p>
              </div>
            </div>

            <div className="glass-card flex translate-x-0 items-start gap-6 p-8 transition-colors hover:bg-surface-container-high md:translate-x-6">
              <div className="rounded-lg bg-secondary-container/20 p-3 text-secondary">
                <span
                  className="material-symbols-outlined"
                  style={filledIconStyle}
                >
                  groups
                </span>
              </div>
              <div>
                <h4 className="mb-1 font-headline text-xl font-bold">
                  Expert Team
                </h4>
                <p className="text-sm text-on-surface-variant">
                  A collective of senior architects, data scientists, and
                  creative engineers with decades of experience.
                </p>
              </div>
            </div>

            <div className="glass-card flex items-start gap-6 p-8 transition-colors hover:bg-surface-container-high">
              <div className="rounded-lg bg-secondary-container/20 p-3 text-secondary">
                <span
                  className="material-symbols-outlined"
                  style={filledIconStyle}
                >
                  award_star
                </span>
              </div>
              <div>
                <h4 className="mb-1 font-headline text-xl font-bold">
                  Proven Track Record
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Delivering high-impact solutions for Fortune 500 companies and
                  high-growth tech ventures alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
