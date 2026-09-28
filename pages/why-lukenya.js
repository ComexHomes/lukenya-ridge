import { Seo } from "@/components/Layout";
import { Banner, Chevrons, Heading, Buttons, Enquirestrip, Split } from "@/components/Blocks";

const ADVANTAGE = [
  ["Space", "Room to create the property you envision."],
  ["Accessibility", "Connection to established roads and surrounding destinations."],
  ["Tranquillity", "A setting away from the everyday intensity of the city."],
  ["Potential", "An area offering opportunities for future residential and property development."],
  ["Lifestyle", "A more open environment for living, retreat and recreation."],
];

export default function WhyLukenya() {
  return (
    <>
      <Seo
        title="Why Lukenya"
        path="/why-lukenya"
        description="Why buy land in Lukenya: space, accessibility, tranquillity, growth potential and lifestyle, 45 minutes from Nairobi CBD."
      />
      <Banner image="/images/pool.jpg" title="Why Lukenya?" subtitle="Space without feeling disconnected" />
      <Enquirestrip />

      <section className="intro" data-aos="fade-up">
        <Heading small="Why" big="Lukenya?" />
        <p className="lead">Lukenya offers something increasingly difficult to find: space without feeling disconnected.</p>
        <p>
          It provides an environment suited to people seeking a quieter setting, more room and an opportunity to own
          property away from the intensity of Nairobi&apos;s built-up areas.
        </p>
      </section>

      <Chevrons />
      <section className="orange-band" data-aos="fade-up">
        <h4>The Lukenya Advantage</h4>
        <div className="advantage">
          {ADVANTAGE.map(([t, d]) => (
            <div key={t}>
              <h5>{t}</h5>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <Split image="/images/backyard.jpg" caption="Backyard concept">
        <h2 className="display dark">Different dreams. One smart decision.</h2>
        <p>
          <strong>Dream Homes.</strong> Build a home designed around your lifestyle.
        </p>
        <p>
          <strong>Investment.</strong> Secure land with long-term wealth-building potential.
        </p>
        <p>
          <strong>Development.</strong> Create a residential or income-generating asset.
        </p>
        <p>
          <strong>Future Planning.</strong> Buy today and build when the time is right.
        </p>
        <Buttons brochure center={false} />
      </Split>
    </>
  );
}
