import { artists } from "@/data/artists";
import ArtistCard from "./ArtistCard";


export default function ArtistsPreview() {
return (
<section className="p-10">
<h2 className="text-3xl text-green-400 mb-6">Lineup</h2>
<div className="grid md:grid-cols-3 gap-6">
{artists.map((a) => (
<ArtistCard key={a.id} name={a.name} />
))}
</div>
</section>
);
}