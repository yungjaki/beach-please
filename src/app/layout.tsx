import "./globals.css";
import { AnimationProvider } from "@/context/AnimationContext";
import { ArtistProvider } from "@/context/ArtistContext";
import Navbar from "@/components/Navbar";
import ArtistModal from "@/components/ArtistModal";
import { ParallaxProvider } from "@/context/ParallaxContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
      <ParallaxProvider>
        <AnimationProvider>
          <ArtistProvider>
            <Navbar />
            {children}
            <ArtistModal />
          </ArtistProvider>
        </AnimationProvider>
      </ParallaxProvider>
      </body>
    </html>
  );
}
