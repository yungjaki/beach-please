import { announcements } from "@/lib/data";
import AnnouncementCard from "./AnnouncementCard";


export default function AnnouncementsPreview() {
return (
<section className="p-10">
<h2 className="text-3xl text-green-400 mb-6">Announcements</h2>
<div className="space-y-6">
{announcements.map((a) => (
<AnnouncementCard key={a.id} title={a.title} />
))}
</div>
</section>
);
}