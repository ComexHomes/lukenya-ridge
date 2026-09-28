import { Seo } from "@/components/Layout";
import { Banner, Chevrons, Heading, Buttons, Enquirestrip } from "@/components/Blocks";

const NEARBY = [
  ["Roads", "Mombasa Road: a key regional transport corridor. Exactly 45 mins from Nairobi CBD."],
  ["Lukenya Hills", "A defining natural landmark within the area."],
  ["Lukenya Resort / Getaway", "A peaceful resort located at the foot of the Lukenya Hills."],
  ["Lukenya Motocross", "5 mins away."],
  ["Lukenya Girls High School", "An established educational institution."],
  ["Daystar University", "A recognised university within the wider area."],
  ["Kilili Shopping Centre", "Convenience for everyday needs."],
];

export default function Location() {
  return (
    <>
      <Seo
        title="Location"
        path="/location"
        description="Lukenya Ridge sits off Mombasa Road, 45 minutes from Nairobi CBD, near Lukenya Hills, Daystar University and Kilili Shopping Centre."
      />
      <Banner image="/images/aerial.jpg" title="Location" subtitle="Lukenya, Mombasa Road" />
      <Enquirestrip />

      <section className="intro" data-aos="fade-up">
        <Heading small="A location with" big="Room to Grow" />
        <p>
          Located within the Lukenya area, the development offers a compelling combination of accessibility, open
          surroundings and future potential.
        </p>
        <p>
          The location provides an alternative to the congestion of the city while keeping you connected to key
          amenities and established destinations within the wider Lukenya area.
        </p>
      </section>

      <Chevrons />
      <section className="orange-band" data-aos="fade-up">
        <h4>Within the surrounding area</h4>
        <div className="nearby">
          {NEARBY.map(([t, d]) => (
            <div key={t}>
              <h5>{t}</h5>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="plan" data-aos="fade-up">
        <Heading small="Own where tomorrow is" big="Already Taking Shape" />
        <div className="plan-image">
          <img src="/images/location-sketch.png" alt="Location sketch of Lukenya Ridge off Mombasa Road" loading="lazy" />
        </div>
      </section>

      <section className="map" data-aos="fade-up">
        <iframe
          title="Lukenya area map"
          src="https://maps.google.com/maps?q=Lukenya%20Hills%2C%20Kenya&z=12&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p className="note center">Call us for directions and a guided site visit.</p>
        <Buttons />
      </section>
    </>
  );
}
