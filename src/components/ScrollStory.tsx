"use client";

import CinematicSection from "./CinematicSection";
import Link from "next/link";
import FAQCard from "./FAQCard";
import ManifestoSection from "./ManifestoSection";
import TeamMemberCard from "./TeamMemberCard";
import { useState } from "react";
import FAQItem from "./FAQItem";
import TicketsCTASection from "./TicketsCTASection";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HangingMic, { MicState } from "@/components/HangingMic";
import { useParallax } from "@/context/ParallaxContext";
import { useTransform } from "framer-motion";
import ExperienceSection from "./ExperienceSection";


function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      question: "What is the minimum age to attend the festival?",
      answer: `For security reasons, the minimum age to attend Beach, Please! 2026 is 14 years old.

If you are 14 years old at the date of entrance, you must be accompanied by a parent or legal guardian.

If you are between 15 and 18 years old, you must also present a legal document signed by your parent or legal guardian.`,
    },
    {
      question: "What documents should I bring to the festival?",
      answer: `To check in at the festival, you must have a valid ticket whose personal details match those found in a valid legal document (ID card, passport, or driver's license).

You must present the document in its original form, along with the ticket.

If you are a minor, a legal guardian must also sign an affidavit.`,
    },
    {
      question: "Can I change the name on a ticket?",
      answer: `All Beach, Please! 2026 tickets are nominal and non-transferable.

Access to the event is guaranteed only to those whose legal personal details match those on the ticket.`,
    },
  ];

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}


export default function ScrollStory() {
const manifestoRef = useRef(null);
const faqRef = useRef(null);
const teamRef = useRef(null);


const manifestoInView = useInView(manifestoRef, { amount: 0.6 });
const faqInView = useInView(faqRef, { amount: 0.4 });
const teamInView = useInView(teamRef, { amount: 0.4 });

let micState: MicState = "hidden";

if (manifestoInView && !faqInView) {
  micState = "hanging";
} else if (faqInView && manifestoInView) {
  micState = "falling";
} else if (faqInView && !teamInView) {
  micState = "fallen";
} else if (teamInView) {
  micState = "exit";
}

const { mouseX, mouseY } = useParallax();

const ringX = useTransform(mouseX, [-300, 300], [-12, 12]);
const ringY = useTransform(mouseY, [-300, 300], [-12, 12]);




  return (
    <div>
    <HangingMic state={micState} />
<div ref={manifestoRef}>
  <ManifestoSection />
</div>

<div ref={faqRef}>
  <section className="relative h-screen snap-start flex items-start pt-32">
    <div className="w-full max-w-5xl mx-auto px-6">
      <h2 className="text-5xl md:text-6xl font-black mb-16">
        Frequently asked questions
      </h2>

      <FAQAccordion />
    </div>
  </section>
</div>

{/* SECTION — TEAM */}
<div ref={teamRef}>
<section className="relative h-screen snap-start flex items-start pt-32">
  <div className="w-full max-w-6xl mx-auto px-6">
    <h2 className="text-6xl font-black mb-12">
      The team behind it
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
      <TeamMemberCard
        name="Andrei Selaru"
        role="Co-Founder"
        image="/team/andrei.jpg"
      />
      <TeamMemberCard
        name="George Carabelea"
        role="Co-Founder & Organizer"
        image="/team/george.jpg"
      />
      <TeamMemberCard
        name="Mihai Zavragiu"
        role="Executive Producer"
        image="/team/mihai.jpg"
      />
    </div>

    <div className="text-right">
      <Link
        href="/team"
        className="text-brand-green hover:underline"
      >
        Meet the full team →
      </Link>
    </div>
  </div>
</section>
</div>

{/* SECTION — WELCOME / EXPERIENCE */}
    <ExperienceSection />   

    <TicketsCTASection />
    </div>
  );
}
