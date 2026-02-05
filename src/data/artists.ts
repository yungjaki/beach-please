export type Artist = {
  id: string;
  name: string;
  slug: string;
  image: string;
  genre: string;
  description: string;
  video: string;
  day: string;
  stage: string;
  time: string;
};

export const artists: Artist[] = [
  {
    id: "1",
    name: "Playboy Carti",
    slug: "playboy-carti",
    image: "/artists/carti.jpg",
    genre: "Rap",
    description:
      "One of Europe's fastest rising electronic artists bringing insane energy to the beach.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    day: "Friday",
    stage: "Main Stage",
    time: "22:00",
  },
  {
    id: "2",
    name: "Don Toliver",
    slug: "don-toliver",
    image: "/artists/toliver.jpg",
    genre: "Rap",
    description:
      "Underground techno queen known for hypnotic sunset beach performances.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    day: "Saturday",
    stage: "Wave Stage",
    time: "20:30",
  },
];
