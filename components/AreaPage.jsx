import Head from "next/head";
import Link from "next/link";
import { Seo } from "@/components/Layout";
import { Banner, Heading, Buttons, Enquirestrip } from "@/components/Blocks";
import { AREAS, FAQS, SITE } from "@/components/areas";

const FEATURES = [
  "50 x 100 plots, 60 planned plots",
  "Gated estate concept",
  "12M and 9M internal roads",
  "25M wide road frontage",
  "2,025 m² community plot",
  "About 45 minutes from Nairobi CBD via Mombasa Road",
];

export default function AreaPage({ slug }) {
  const a = AREAS.find((x) => x.slug === slug);
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Lukenya Ridge", item: SITE },
        { "@type": "ListItem", position: 2, name: a.h1, item: `${SITE}/${a.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  return (
    <>
      <Seo title={a.title} description={a.description} path={`/${a.slug}`} />
      <Head>
        {ld.map((d, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
        ))}
      </Head>
      <Banner image="/images/aerial.jpg" title={a.h1} subtitle="Lukenya Ridge, Mombasa Road" />
      <Enquirestrip />

      <section className="intro" data-aos="fade-up">
        <Heading small="Lukenya Ridge" big="50 x 100 Plots" />
        <p>{a.intro}</p>
        <ul style={{ margin: "16px auto 0", maxWidth: 640, textAlign: "left", listStyle: "disc", paddingLeft: 20, lineHeight: 1.9 }}>
          {FEATURES.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <p style={{ marginTop: 16 }}>
          See <Link href="/plots">the plots</Link>, the <Link href="/estate">estate concept</Link> and the{" "}
          <Link href="/location">location</Link>.
        </p>
        <Buttons brochure />
      </section>

      <section className="intro" data-aos="fade-up">
        <Heading small="Questions" big="Buyers Ask" />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "left" }}>
          {FAQS.map((f) => (
            <div key={f.q} style={{ borderBottom: "1px solid rgba(0,0,0,0.1)", padding: "10px 0" }}>
              <h3 style={{ fontWeight: 600 }}>{f.q}</h3>
              <p style={{ marginTop: 4 }}>{f.a}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 20 }}>
          More:{" "}
          {AREAS.filter((x) => x.slug !== a.slug).map((x, i) => (
            <span key={x.slug}>
              {i > 0 && " · "}
              <Link href={`/${x.slug}`}>{x.h1}</Link>
            </span>
          ))}
        </p>
        <p style={{ marginTop: 12 }}>
          Lukenya Ridge is by <a href="https://www.comexhomes.ke/">Comex Homes</a>. Looking for an apartment instead? See{" "}
          <a href="https://www.astanaresidence.com/">Astana Residence, Ngara</a>, studios from KES 3.51M.
        </p>
      </section>
    </>
  );
}
