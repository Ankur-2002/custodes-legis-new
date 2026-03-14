const stats = [
  { value: "95%", label: "Cases Won" },
  { value: "863+", label: "Trusted Client" },
  { value: "124+", label: "Dedicated Lawyer" },
  { value: "25%", label: "Case Dismissed" },
];

const StatsSection = () => {
  return (
    <section className="bg-navy py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h2 className="mb-2 font-heading text-4xl font-bold text-gold lg:text-5xl">
                {stat.value}
              </h2>
              <p className="text-sm uppercase tracking-wider text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
