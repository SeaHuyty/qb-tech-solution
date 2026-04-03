import type { CSSProperties } from "react";

const filledIconStyle: CSSProperties = {
  fontVariationSettings: "'FILL' 1",
};

type AdvantageCardProps = {
  icon: string;
  title: string;
  description: string;
  className: string;
};

const advantageCards = [
  {
    icon: "rocket_launch",
    title: "Cutting-Edge Innovation",
    description:
      "Access to R&D labs and the latest technological breakthroughs before they hit the mainstream.",
    className: "",
  },
  {
    icon: "groups",
    title: "Expert Team",
    description:
      "A collective of senior architects, data scientists, and creative engineers with decades of experience.",
    className: "md:translate-x-6",
  },
  {
    icon: "award_star",
    title: "Proven Track Record",
    description:
      "Delivering high-impact solutions for Fortune 500 companies and high-growth tech ventures alike.",
    className: "",
  },
];

function AdvantageCard({
  icon,
  title,
  description,
  className,
}: AdvantageCardProps) {
  return (
    <div
      className={`glass-card flex translate-x-0 items-start gap-6 p-8 transition-colors hover:bg-surface-container-high ${className}`}
    >
      <div className="rounded-lg bg-secondary-container/20 p-3 text-secondary">
        <span className="material-symbols-outlined" style={filledIconStyle}>
          {icon}
        </span>
      </div>
      <div>
        <h4 className="mb-1 font-headline text-xl font-bold">{title}</h4>
        <p className="text-sm text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}

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
            {advantageCards.map((card) => (
              <AdvantageCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                className={card.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
