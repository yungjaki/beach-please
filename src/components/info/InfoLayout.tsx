"use client";

import InfoSidebar from "./InfoSidebar";
import InfoSection from "./InfoSection";
import InfoCard from "./InfoCard";
import InfoNotice from "./InfoNotice";
import InfoAccordion from "./InfoAccordion";



export default function InfoLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* SIDEBAR */}
      <InfoSidebar />

      {/* CONTENT */}
      <main className="flex-1 px-6 md:px-16 py-24 space-y-32">
<InfoSection id="getting-there" title="Getting to the Festival">
  <InfoCard title="📍 Festival Location">
    <p>
      Beach, Please! takes place on the Black Sea coast in Romania,
      near <strong>Costinești</strong>.
    </p>
    <p>
      The festival area is clearly signposted and accessible via
      train, bus, car, and shuttle services.
    </p>
  </InfoCard>

  <InfoCard title="🚆 Arriving by Train">
    <p>
      The nearest train station is <strong>Costinești Tabără</strong>.
    </p>
    <p>
      During the festival period, additional trains and increased
      frequency are available from:
    </p>
    <ul className="list-disc list-inside">
      <li>Bucharest</li>
      <li>Constanța</li>
      <li>Other major Romanian cities</li>
    </ul>
    <p>
      From the station, the festival area is reachable on foot
      or via local shuttles.
    </p>
  </InfoCard>

  <InfoCard title="🚌 Arriving by Bus">
    <p>
      Regional and long-distance buses operate routes to
      <strong> Costinești</strong> and <strong>Constanța</strong>.
    </p>
    <p>
      Shuttle buses will run regularly between key arrival points
      and the festival entrance.
    </p>
  </InfoCard>

  <InfoCard title="🚗 Arriving by Car">
    <p>
      If you arrive by car, follow official festival signage
      and directions from staff.
    </p>
    <p>
      Dedicated parking areas will be available near the festival.
      Parking locations and prices will be announced closer
      to the event.
    </p>
    <p className="text-white/50">
      ⚠️ Parking directly near the entrance is limited.
    </p>
  </InfoCard>

  <InfoCard title="✈️ Arriving by Plane">
    <p>
      The closest airport is <strong>Mihail Kogălniceanu International Airport (CND)</strong>
      in Constanța.
    </p>
    <p>
      From the airport, you can reach the festival via:
    </p>
    <ul className="list-disc list-inside">
      <li>Train (via Constanța)</li>
      <li>Bus</li>
      <li>Taxi / rideshare</li>
    </ul>
  </InfoCard>

  <InfoCard title="🗓 Day 0 & Early Arrival">
    <p>
      Day 0 is reserved for early arrivals, check-in, and wristband pickup.
    </p>
    <p>
      If you arrive on Day 0, please follow staff instructions
      and signage for access points.
    </p>
  </InfoCard>

  <InfoCard title="ℹ️ Important Tips">
    <ul className="list-disc list-inside">
      <li>Plan your return transport in advance</li>
      <li>Expect heavy traffic during peak arrival times</li>
      <li>Follow official festival announcements for live updates</li>
    </ul>
  </InfoCard>
</InfoSection>
<InfoSection id="accommodation" title="Accommodation">
  <InfoCard title="🏕 On-site & Festival Area Stays">
    <p>
      Accommodation options near the festival include camping areas,
      private rentals, hotels, and guesthouses.
    </p>
    <p>
      Availability depends on demand and location. Official on-site
      accommodation details (if applicable) will be announced
      closer to the event.
    </p>
  </InfoCard>

  <InfoCard title="🏨 Hotels & Guesthouses">
    <p>
      The nearest accommodation options are located in:
    </p>
    <ul className="list-disc list-inside">
      <li><strong>Costinești</strong> (walking distance / short shuttle)</li>
      <li><strong>Constanța</strong> (larger city, more options)</li>
      <li><strong>Eforie Nord & Eforie Sud</strong></li>
    </ul>
    <p>
      Hotels and guesthouses fill up quickly during the festival period.
    </p>
  </InfoCard>

  <InfoCard title="🏠 Private Rentals (Airbnb & Similar)">
    <p>
      Apartments and private rooms are available throughout the region.
    </p>
    <p>
      When booking private accommodation, always check:
    </p>
    <ul className="list-disc list-inside">
      <li>Distance to the festival</li>
      <li>Transport options (train / shuttle)</li>
      <li>Check-in and check-out hours</li>
    </ul>
  </InfoCard>

  <InfoCard title="🚌 Shuttle & Transport to Accommodation">
    <p>
      Shuttle services may operate between the festival area
      and nearby cities during peak hours.
    </p>
    <p>
      Shuttle routes, schedules, and pricing will be announced
      closer to the event.
    </p>
  </InfoCard>

  <InfoCard title="🛏 Booking Tips">
    <ul className="list-disc list-inside">
      <li>Book as early as possible</li>
      <li>Consider staying slightly outside the festival area</li>
      <li>Check cancellation policies</li>
      <li>Confirm transport options in advance</li>
    </ul>
  </InfoCard>

  <InfoNotice>
    Accommodation is not included in the festival ticket unless
    explicitly stated. Always verify details directly with
    accommodation providers.
  </InfoNotice>
</InfoSection>
<InfoSection id="check-in" title="Check-in & Wristband">
  <InfoCard title="🎫 Ticket Validation">
    <p>
      To access the festival, you must present a valid ticket along
      with a legal identification document.
    </p>
    <p>
      The personal details on the ticket must match the information
      on your ID.
    </p>
    <p>
      Accepted documents:
    </p>
    <ul className="list-disc list-inside">
      <li>ID card</li>
      <li>Passport</li>
      <li>Driver’s license</li>
    </ul>
  </InfoCard>

  <InfoCard title="🗓 Day 0 vs Festival Days">
    <p>
      <strong>Day 0</strong> is reserved for early arrivals,
      ticket validation, and wristband pickup.
    </p>
    <p>
      During festival days, check-in points will be open
      according to the daily schedule.
    </p>
    <p>
      We strongly recommend arriving on Day 0 to avoid
      waiting times.
    </p>
  </InfoCard>

  <InfoCard title="🎟 Wristband Access System">
    <p>
      After ticket validation, you will receive a festival wristband.
    </p>
    <p>
      The wristband grants access to:
    </p>
    <ul className="list-disc list-inside">
      <li>The festival area</li>
      <li>Stages</li>
      <li>Services inside the festival</li>
    </ul>
    <p>
      Wristbands must be worn at all times during the festival.
    </p>
  </InfoCard>

  <InfoCard title="💳 Cashless Payments">
    <p>
      Beach, Please! uses a <strong>cashless payment system</strong>.
    </p>
    <p>
      All purchases inside the festival are made using
      the wristband.
    </p>
    <p>
      You can top up your wristband:
    </p>
    <ul className="list-disc list-inside">
      <li>Online (before the event)</li>
      <li>At top-up points inside the festival</li>
    </ul>
  </InfoCard>

  <InfoCard title="🔁 Refunds After the Festival">
    <p>
      Any unused balance on your wristband can be refunded
      after the festival.
    </p>
    <p>
      Refund instructions and deadlines will be announced
      on the official website and channels.
    </p>
  </InfoCard>

  <InfoCard title="🚨 Lost or Damaged Wristbands">
    <p>
      Lost or damaged wristbands should be reported immediately
      at the support desk.
    </p>
    <p>
      Wristbands are personal and non-transferable.
    </p>
  </InfoCard>

  <InfoCard title="👶 Age Restrictions">
    <p>
      The minimum age to attend the festival is <strong>14 years</strong>.
    </p>
    <ul className="list-disc list-inside">
      <li>
        14-year-olds must be accompanied by a parent or legal guardian
      </li>
      <li>
        Attendees aged 15–18 must present a signed parental consent document
      </li>
    </ul>
  </InfoCard>

  <InfoNotice>
    Wristbands are strictly personal. Any attempt to remove,
    modify, or transfer a wristband may result in denied access
    without refund.
  </InfoNotice>
</InfoSection>

<InfoSection id="wristbands" title="Wristbands & Payments">
  <InfoCard title="🎟 What Is the Festival Wristband?">
    <p>
      The festival wristband is your <strong>access pass</strong> and
      <strong>payment method</strong> during Beach, Please!
    </p>
    <p>
      After ticket validation, each attendee receives a personal,
      non-transferable wristband.
    </p>
    <p>
      The wristband must be worn at all times inside the festival area.
    </p>
  </InfoCard>

  <InfoCard title="🎫 Wristbands by Ticket Type">
    <p>
      The wristband you receive depends on your ticket type.
    </p>
    <ul className="list-disc list-inside">
      <li><strong>General Access</strong> – standard access to festival areas</li>
      <li><strong>VIP</strong> – access to VIP areas and services</li>
      <li><strong>Backstage / Special Access</strong> – restricted areas, where applicable</li>
    </ul>
    <p>
      Access permissions are encoded directly on the wristband.
    </p>
  </InfoCard>

  <InfoCard title="👶 Age-Based Wristbands">
    <p>
      Wristbands are also issued based on age category.
    </p>
    <ul className="list-disc list-inside">
      <li>
        <strong>14 years</strong> – wristband issued only with a parent or legal guardian
      </li>
      <li>
        <strong>15–17 years</strong> – wristband issued with parental consent document
      </li>
      <li>
        <strong>18+</strong> – full access wristband
      </li>
    </ul>
    <p>
      Age-based wristbands help staff identify access restrictions.
    </p>
  </InfoCard>

  <InfoCard title="🍺 Alcohol Access & Restrictions">
    <p>
      Alcoholic beverages are sold only to attendees with
      <strong>18+ wristbands</strong>.
    </p>
    <p>
      Staff may request ID verification at any time.
    </p>
    <p>
      Attempting to bypass age restrictions may result in
      wristband confiscation and removal from the festival.
    </p>
  </InfoCard>

  <InfoCard title="💳 Cashless Payment System">
    <p>
      Beach, Please! operates a <strong>cashless system</strong>.
    </p>
    <p>
      All payments inside the festival are made using the wristband,
      including:
    </p>
    <ul className="list-disc list-inside">
      <li>Food & drinks</li>
      <li>Merchandise</li>
      <li>Services inside the festival</li>
    </ul>
  </InfoCard>

  <InfoCard title="➕ Topping Up Your Wristband">
    <p>
      You can add money to your wristband:
    </p>
    <ul className="list-disc list-inside">
      <li>Online, before the festival</li>
      <li>At top-up points inside the festival</li>
    </ul>
    <p>
      Payments can be made using card or other announced methods.
    </p>
  </InfoCard>

  <InfoCard title="🔁 Refunds After the Festival">
    <p>
      Any unused balance on your wristband can be refunded
      after the festival.
    </p>
    <p>
      Refunds are requested online within a specified time window.
    </p>
    <p>
      Instructions and deadlines will be announced after the event.
    </p>
  </InfoCard>

  <InfoCard title="🚨 Lost or Damaged Wristbands">
    <p>
      If your wristband is lost or damaged, report it immediately
      at a festival support point.
    </p>
    <p>
      Wristbands are personal and non-transferable.
    </p>
    <p>
      Replacement policies depend on the situation and verification.
    </p>
  </InfoCard>

  <InfoNotice>
    Wristbands must not be removed, transferred, or modified.
    Any violation may result in denied access without refund.
  </InfoNotice>
</InfoSection>


<InfoSection id="rules" title="Festival Rules">
  <InfoAccordion title="✅ Allowed Items">
    <ul className="list-disc list-inside">
      <li>Small backpacks and bags</li>
      <li>Personal identification documents</li>
      <li>Festival wristband</li>
      <li>Mobile phones and power banks</li>
      <li>Prescription medication (with proof)</li>
    </ul>
  </InfoAccordion>

  <InfoAccordion title="🚫 Prohibited Items">
    <ul className="list-disc list-inside">
      <li>Weapons or sharp objects</li>
      <li>Illegal substances</li>
      <li>Glass containers</li>
      <li>Professional recording equipment</li>
      <li>Fireworks or flammable materials</li>
    </ul>
  </InfoAccordion>

  <InfoAccordion title="🔍 Security Checks">
    <p>
      All attendees are subject to security checks upon entry.
    </p>
    <p>
      Security staff may refuse entry to anyone violating
      festival rules.
    </p>
  </InfoAccordion>

  <InfoAccordion title="🚑 Medical & Safety">
    <p>
      Medical assistance is available on-site throughout
      the festival.
    </p>
    <p>
      If you or someone else needs help, contact festival staff
      or visit the nearest medical point immediately.
    </p>
  </InfoAccordion>

  <InfoAccordion title="⚠️ Behavior & Conduct">
    <p>
      Respect other attendees, artists, and staff.
    </p>
    <p>
      Any form of violence, harassment, or discrimination
      will not be tolerated.
    </p>
  </InfoAccordion>

  <InfoNotice>
    Festival organizers reserve the right to deny access
    or remove attendees who violate festival rules,
    without refund.
  </InfoNotice>
</InfoSection>

<InfoSection id="during" title="During the Festival">
  <InfoCard title="🍔 Food & Drinks">
    <p>
      A wide variety of food and drink options will be available
      inside the festival area.
    </p>
    <p>
      Options include:
    </p>
    <ul className="list-disc list-inside">
      <li>Street food</li>
      <li>Vegetarian and vegan options</li>
      <li>Non-alcoholic and alcoholic beverages</li>
    </ul>
    <p>
      All purchases are made using the festival wristband.
    </p>
  </InfoCard>

  <InfoCard title="🚻 Toilets & Hygiene">
    <p>
      Toilets are available throughout the festival area
      and are cleaned regularly.
    </p>
    <p>
      Handwashing and sanitation points will be provided.
    </p>
    <p>
      Shower facilities may be available in designated areas
      (depending on accommodation type).
    </p>
  </InfoCard>

  <InfoCard title="🚑 Medical Assistance">
    <p>
      Medical teams are present on-site at all times.
    </p>
    <p>
      Medical points are clearly marked on the festival map.
    </p>
    <p>
      If you feel unwell or notice someone who needs help,
      contact staff immediately.
    </p>
  </InfoCard>

  <InfoCard title="ℹ️ Info & Help Points">
    <p>
      Information points are available throughout the festival.
    </p>
    <p>
      Festival staff can assist with:
    </p>
    <ul className="list-disc list-inside">
      <li>Directions</li>
      <li>Lost & found</li>
      <li>General assistance</li>
    </ul>
  </InfoCard>

  <InfoCard title="🛍 Merchandise">
    <p>
      Official Beach, Please! merchandise will be available
      inside the festival.
    </p>
    <p>
      Merchandise can be purchased using the wristband.
    </p>
  </InfoCard>

  <InfoCard title="🎵 Stages & Schedule">
    <p>
      Multiple stages operate throughout the festival.
    </p>
    <p>
      Daily schedules will be published on:
    </p>
    <ul className="list-disc list-inside">
      <li>The official website</li>
      <li>Festival social media channels</li>
      <li>On-site information boards</li>
    </ul>
  </InfoCard>

  <InfoNotice>
    Stay hydrated, take breaks when needed, and look out
    for each other. A great festival experience starts
    with taking care of yourself and those around you.
  </InfoNotice>
</InfoSection>

<InfoSection id="after" title="After the Festival">
  <InfoCard title="💳 Wristband Refunds">
    <p>
      Any unused balance on your festival wristband can be refunded
      after the event.
    </p>
    <p>
      Refunds are processed online through the official festival
      platform.
    </p>
    <p>
      Detailed instructions, deadlines, and processing times will be
      announced after the festival ends.
    </p>
  </InfoCard>

  <InfoCard title="🚌 Leaving the Festival">
    <p>
      Public transport, trains, and shuttle services will operate
      during peak departure hours.
    </p>
    <p>
      Expect higher traffic volume on the final day and plan your
      departure accordingly.
    </p>
    <p>
      Follow official announcements for live updates regarding
      transport schedules.
    </p>
  </InfoCard>

  <InfoCard title="🔍 Lost & Found">
    <p>
      Lost items can be reported at on-site information points during
      the festival.
    </p>
    <p>
      After the festival, the lost & found process will move online.
    </p>
    <p>
      Instructions on how to recover lost items will be published on
      the official website and social media channels.
    </p>
  </InfoCard>

  <InfoCard title="📩 Contact & Support">
    <p>
      For post-festival questions or issues, please contact the
      official support channels.
    </p>
    <p>
      Support information and contact forms will be available on the
      official website.
    </p>
  </InfoCard>

  <InfoCard title="💬 Feedback">
    <p>
      Feedback from attendees helps improve future editions of the
      festival.
    </p>
    <p>
      Surveys and feedback forms may be shared after the event.
    </p>
  </InfoCard>

  <InfoNotice>
    Refund requests, lost item claims, and support inquiries must be
    submitted within the announced timeframes. Requests outside
    these periods may not be processed.
  </InfoNotice>
</InfoSection>

      </main>
    </div>
  );
}
