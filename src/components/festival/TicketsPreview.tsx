import { tickets } from "@/lib/data";
import TicketCard from "./TicketCard";


export default function TicketsPreview() {
return (
<section className="p-10 bg-neutral-950">
<h2 className="text-3xl text-green-400 mb-6">Tickets</h2>
<div className="grid md:grid-cols-3 gap-6">
{tickets.map((t) => (
<TicketCard key={t.id} type={t.name} />
))}
</div>
</section>
);
}