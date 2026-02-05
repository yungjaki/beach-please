import TicketCard from "@/components/tickets/TicketCard";
import { tickets } from "@/data/tickets";
import UpgradeFlow from "../../components/tickets/UpgradeFlow";
import HowItWorks from "@/components/tickets/HowItWorks";

export default function TicketsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-24">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-6xl md:text-7xl font-black">
          Tickets
        </h1>
        <p className="mt-6 text-white/70 text-lg">
          Choose your experience. Five days. One unforgettable festival.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>

      {/* INFO */}
      <div className="max-w-3xl mx-auto mt-20 text-center text-white/50 text-sm">
        Tickets are personal and non-transferable.
        Wristbands are issued at check-in.
      </div>

      <UpgradeFlow />
      <HowItWorks />
    </main>
  );
}
