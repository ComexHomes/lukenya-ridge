import Link from "next/link";
import { Seo } from "@/components/Layout";
import { Banner, Chevrons, Heading, Buttons, Enquirestrip, Split, PageLink } from "@/components/Blocks";

const FEATURES = [
  { icon: "M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6", label: "Gated Estate Concept" },
  { icon: "M4 20L10 4M20 20L14 4M12 6v2M12 11v2M12 16v2", label: "12M & 9M Internal Roads" },
  { icon: "M3 12h18M3 6h18M3 18h18", label: "25M Wide Road Frontage" },
  { icon: "M12 3l9 7-9 7-9-7 9-7zM3 17l9 4 9-4", label: "2,025 m² Community Plot" },
  { icon: "M4 4h16v16H4zM4 12h16M12 4v16", label: "60 Planned Plots" },
  { icon: "M12 3c3 4 6 7 6 11a6 6 0 01-12 0c0-4 3-7 6-11z", label: "3M Drainage Wayleave" },
];

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <Banner image="/images/gate.jpg" title="Lukenya Ridge" subtitle="Mombasa Road Growth Corridor" />
      <Enquirestrip />

      <section className="intro" data-aos="fade-up">
        <Heading small="Welcome to" big="Lukenya Ridge" />
        <p className="lead">Premium plots on Nairobi&apos;s Mombasa Road growth corridor.</p>
        <p>
          A premium address designed for people who understand the value of owning land in the right location.
        </p>
        <p>
          Lukenya Ridge offers premium plots in a setting where nature, accessibility and long-term investment come
          together. Whether you are looking to build your dream home, establish a private retreat or secure a valuable
          investment for the future, Lukenya Ridge gives you the foundation to make it happen.
        </p>
        <h4 className="motto">SELECT. SECURE. BUILD.</h4>
        <Buttons brochure />
      </section>

      <Chevrons />
      <Split image="/images/estate-homes.jpg" caption="Estate concept" orange>
        <h2 className="display">Own a piece of the future.</h2>
        <h4>More Than Land. A Position for Tomorrow.</h4>
        <p>Property decisions are rarely just about today. The right land gives you options for tomorrow.</p>
        <p>
          Lukenya Ridge is designed for buyers who want to secure a piece of land with the flexibility to build now,
          develop later or hold as part of a growing property portfolio.
        </p>
        <p>
          With practical plot sizes and a thoughtfully planned estate layout, every parcel offers an opportunity to
          turn land into something meaningful.
        </p>
        <PageLink href="/plots">view the plots</PageLink>
      </Split>

      <section className="features" data-aos="fade-up">
        <Heading small="Find your" big="Place to Build" />
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className="feature" key={f.label}>
              <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={f.icon} />
              </svg>
              <p>{f.label}</p>
            </div>
          ))}
        </div>
        <PageLink href="/estate">check out more</PageLink>
      </section>

      <section className="gallery-strip" data-aos="fade-up">
        {[
          ["/images/estate-street.jpg", "Estate concept"],
          ["/images/pool.jpg", "Shared space concept"],
          ["/images/backyard.jpg", "Backyard concept"],
        ].map(([src, cap]) => (
          <Link href="/estate" className="tile" key={src}>
            <img src={src} alt={cap} loading="lazy" />
            <span>{cap}</span>
          </Link>
        ))}
      </section>

      <Split image="/images/aerial.jpg" caption="Layout concept" reverse>
        <h2 className="display dark">A location with room to grow.</h2>
        <p>
          Located within the Lukenya area, the development offers a compelling combination of accessibility, open
          surroundings and future potential.
        </p>
        <p>
          Just off Mombasa Road, a key regional transport corridor, and 45 minutes from Nairobi CBD, with Lukenya Hills,
          Daystar University and Kilili Shopping Centre in the surrounding area.
        </p>
        <PageLink href="/location">explore the location</PageLink>
      </Split>

      <section className="team" data-aos="fade-up">
        <Heading small="About the" big="Team" />
        <div className="team-grid">
          <div>
            <h3>Developer</h3>
            <h2>Comex Homes</h2>
          </div>
          <div>
            <h3>Project</h3>
            <h2>Lukenya Ridge</h2>
          </div>
          <div>
            <h3>Plot size</h3>
            <h2>50 x 100</h2>
          </div>
          <div>
            <h3>Enquiries</h3>
            <h2>
              <a href="tel:+254709501501">0709 501 501</a>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
