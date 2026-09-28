import Link from "next/link";
import { PROJECT, whatsappLink } from "./data";

/* Full width hero banner with centred title, like the Nyayo main banner */
export function Banner({ image, title, subtitle }) {
  return (
    <section className="main-banner" data-aos="zoom-in">
      <img className="banner-image" src={image} alt={title} />
      <div className="banner-shade" />
      <div className="text">
        <h1>{title}</h1>
        {subtitle && <h3>{subtitle}</h3>}
      </div>
    </section>
  );
}

/* Catalogue chevron band (black and orange peaks) */
export function Chevrons({ tone = "light" }) {
  return <div className={`chevrons chevrons--${tone}`} aria-hidden="true" />;
}

/* Heading pair: small label + big title */
export function Heading({ small, big, center = true }) {
  return (
    <div className={`heading ${center ? "center" : ""}`}>
      {small && <h3>{small}</h3>}
      <h2>{big}</h2>
    </div>
  );
}

export function Buttons({ brochure = false, center = true }) {
  return (
    <div className={`btn-area ${center ? "center" : ""}`}>
      <a href={whatsappLink()} target="_blank" rel="noreferrer">
        <button className="btn">register interest</button>
      </a>
      {brochure && (
        <a href={PROJECT.brochure} target="_blank" rel="noreferrer">
          <button className="btn btn--ghost">download brochure</button>
        </a>
      )}
    </div>
  );
}

/* "You are viewing" strip, same as Nyayo's Enquirestrip */
export function Enquirestrip() {
  const items = [
    ["you are viewing", PROJECT.name],
    ["plot size", PROJECT.plotSize],
    ["total plots", PROJECT.totalPlots],
    ["access", PROJECT.distance],
    ["location", PROJECT.location],
  ];
  return (
    <section className="enquirestrip" data-aos="zoom-in">
      <div className="description-area">
        {items.map(([k, v]) => (
          <div className="place" key={k}>
            <h3>{k}</h3>
            <h2>{v}</h2>
          </div>
        ))}
      </div>
      <Buttons />
    </section>
  );
}

/* Image + text split section */
export function Split({ image, caption, reverse, children, orange }) {
  return (
    <section className={`split ${reverse ? "reverse" : ""}`}>
      <div className={`split-text ${orange ? "orange" : ""}`} data-aos="fade-up">
        {children}
      </div>
      <div className="split-image" data-aos="fade-up">
        <img src={image} alt={caption || ""} loading="lazy" />
        {caption && <span className="caption">{caption}</span>}
      </div>
    </section>
  );
}

export function PageLink({ href, children }) {
  return (
    <div className="btn-area center">
      <Link href={href}>
        <button className="btn">{children}</button>
      </Link>
    </div>
  );
}
