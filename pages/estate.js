import { useState } from "react";
import { Seo } from "@/components/Layout";
import { Banner, Heading, Buttons, Enquirestrip } from "@/components/Blocks";

const CONCEPTS = [
  ["/images/gate.jpg", "Gate Concept"],
  ["/images/aerial.jpg", "Layout Concept"],
  ["/images/estate-street.jpg", "Estate Concept"],
  ["/images/estate-homes.jpg", "Concept Estate"],
  ["/images/pool.jpg", "Shared Space Concept"],
  ["/images/backyard.jpg", "Backyard Concept"],
  ["/images/living.jpg", "Living Room Concept"],
  ["/images/bedroom.jpg", "Bedroom Concept"],
  ["/images/bathroom.jpg", "Bathroom Concept"],
];

export default function Estate() {
  const [active, setActive] = useState(null);
  return (
    <>
      <Seo
        title="Estate Concept"
        path="/estate"
        description="See the Lukenya Ridge estate concept: gated entrance, planned streets, shared spaces and home design ideas for your plot."
      />
      <Banner image="/images/estate-street.jpg" title="Estate Concept" subtitle="What your plot can become" />
      <Enquirestrip />

      <section className="intro" data-aos="fade-up">
        <Heading small="Imagine" big="The Estate" />
        <p>
          A thoughtfully planned estate layout with a gated entrance, wide internal roads, a central community plot and
          room for every family to build the home they envision. The concepts below show what Lukenya Ridge can grow
          into.
        </p>
      </section>

      <section className="concepts">
        {CONCEPTS.map(([src, cap], i) => (
          <button className="tile" key={src} onClick={() => setActive(i)} data-aos="fade-up">
            <img src={src} alt={cap} loading="lazy" />
            <span>{cap}</span>
          </button>
        ))}
      </section>
      <p className="note center">Images are artist&apos;s concepts for illustration only.</p>

      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-label={CONCEPTS[active][1]}>
          <img src={CONCEPTS[active][0]} alt={CONCEPTS[active][1]} />
          <p>{CONCEPTS[active][1]}</p>
          <button className="lightbox-close" aria-label="Close">
            ×
          </button>
        </div>
      )}

      <section className="intro" data-aos="fade-up">
        <Buttons brochure />
      </section>
    </>
  );
}
