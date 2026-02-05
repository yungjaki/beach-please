import { Artist } from "@/data/artists";

export default function ArtistHero({ artist }: { artist: Artist }) {
  return (
    <section className="relative h-[70vh] flex items-end">
      <img
        src={artist.image}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 p-12">
        <h1 className="text-6xl font-bold">{artist.name}</h1>
        <p className="text-green-400 text-xl mt-2">{artist.genre}</p>

        <p className="mt-6 max-w-xl text-gray-300">
          {artist.description}
        </p>
      </div>
    </section>
  );
}
