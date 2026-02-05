export default function HowItWorks() {
  const items = [
    {
      title: "Wristband Access",
      text: "Your ticket is exchanged for a wristband at check-in.",
    },
    {
      title: "Cashless Payments",
      text: "Pay for food, drinks, and merch using your wristband.",
    },
    {
      title: "Refunds",
      text: "Unused balance can be refunded after the festival.",
    },
    {
      title: "Personal & Secure",
      text: "Tickets and wristbands are personal and non-transferable.",
    },
  ];

  return (
    <section className="mt-32 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-black text-center mb-12">
        How tickets work
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-xl p-6 bg-black/60"
          >
            <h3 className="font-bold text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-white/60 text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
