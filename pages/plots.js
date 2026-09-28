import { Seo } from "@/components/Layout";
import { Banner, Chevrons, Heading, Buttons, Enquirestrip, Split } from "@/components/Blocks";

const IDEAL = [
  ["Dream Homes", "Build a home designed around your lifestyle."],
  ["Investment", "Secure land with long-term wealth-building potential."],
  ["Development", "Create a residential or income-generating asset."],
  ["Future Planning", "Buy today and build when the time is right."],
];

const FACTS = [
  ["Plot size", "50 x 100"],
  ["Plots in the estate", "60"],
  ["Internal roads", "12M & 9M wide"],
  ["Frontage", "25M wide road"],
  ["Community plot", "2,025 m²"],
  ["Drainage", "3M wide wayleave"],
];

export default function Plots() {
  return (
    <>
      <Seo
        title="The Plots"
        path="/plots"
        description="Premium 50 by 100 plots at Lukenya Ridge: 60 plots in a planned estate with 12M and 9M internal roads, a community plot and 25M road frontage."
      />
      <Banner image="/images/hero-pin.jpg" title="The Plots" subtitle="Premium 50 x 100 Plots" />
      <Enquirestrip />

      <section className="intro" data-aos="fade-up">
        <Heading small="Different dreams." big="One smart decision." />
        <div className="ideal-grid">
          {IDEAL.map(([t, d]) => (
            <div className="ideal" key={t}>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <Buttons brochure />
      </section>

      <Chevrons />
      <section className="orange-band" data-aos="fade-up">
        <p>Imagine a home where the surroundings give you room to breathe.</p>
        <p className="strong">
          Mornings begin without the rush of the city.
          <br />
          Children have space to play.
          <br />
          Weekends feel like an escape.
        </p>
        <p>
          And your property becomes a place where family, privacy and leisure come together. Lukenya Ridge is for those
          who believe that a better lifestyle begins with having the right space.
        </p>
      </section>

      <section className="plan" data-aos="fade-up">
        <Heading small="Estate" big="Site Layout" />
        <div className="facts">
          {FACTS.map(([k, v]) => (
            <div className="fact" key={k}>
              <h3>{k}</h3>
              <h2>{v}</h2>
            </div>
          ))}
        </div>
        <a href="/images/site-layout.png" target="_blank" rel="noreferrer" className="plan-image">
          <img src="/images/site-layout.png" alt="Lukenya Ridge site layout showing 60 plots, roads and community plot" loading="lazy" />
        </a>
        <p className="note">Tap the layout to open it full size. Plot availability is confirmed at the time of booking.</p>
      </section>

      <Split image="/images/land.jpg" caption="Your plot">
        <h2 className="display dark">Your name belongs on a piece of this land.</h2>
        <p>The opportunity is simple.</p>
        <p className="strong">
          Choose your plot.
          <br />
          Secure your ownership.
          <br />
          Start planning your future.
        </p>
        <p>
          Whether you are buying to build, invest, retire or create a legacy, Lukenya Ridge gives you the space to begin.
        </p>
        <Buttons center={false} />
      </Split>
    </>
  );
}
