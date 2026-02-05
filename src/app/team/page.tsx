export default function TeamPage() {
  return (
    <main className="pt-40 px-8 max-w-6xl mx-auto">
      <h1 className="text-6xl font-black mb-16">
        Our Team
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Alex M.", role: "Founder" },
          { name: "Sara K.", role: "Creative Director" },
          { name: "David R.", role: "Production Lead" },
          { name: "Lena P.", role: "Marketing" },
          { name: "Tom S.", role: "Operations" },
        ].map((member) => (
          <div
            key={member.name}
            className="border border-white/10 rounded-2xl p-8 bg-black/40"
          >
            <h3 className="font-bold text-xl mb-2">
              {member.name}
            </h3>
            <p className="text-white/60">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
