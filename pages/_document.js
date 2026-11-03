import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-KE">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jost:wght@300;400;500;600&family=Nunito:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Place",
                  "@id": "https://www.lukenyaridge.com/#estate",
                  name: "Lukenya Ridge",
                  description:
                    "A planned gated estate of 60 plots of 50 x 100 ft in Lukenya, just off Mombasa Road in Machakos County, about 45 minutes from Nairobi CBD, by Comex Homes.",
                  url: "https://www.lukenyaridge.com",
                  image: "https://www.lukenyaridge.com/images/og.jpg",
                  address: { "@type": "PostalAddress", addressLocality: "Lukenya", addressRegion: "Machakos County", addressCountry: "KE" },
                  containedInPlace: { "@type": "Place", name: "Mombasa Road corridor, Machakos County, Kenya" },
                  amenityFeature: [
                    "Gated estate concept",
                    "12M and 9M internal roads",
                    "25M wide road frontage",
                    "2,025 m2 community plot",
                  ].map((n) => ({ "@type": "LocationFeatureSpecification", name: n, value: true })),
                },
                {
                  "@type": "RealEstateAgent",
                  "@id": "https://www.comexhomes.ke/#organization",
                  name: "Comex Homes",
                  url: "https://www.comexhomes.ke",
                  telephone: "+254709501501",
                  email: "info@comexhomes.ke",
                  makesOffer: {
                    "@type": "Offer",
                    name: "50 x 100 plot at Lukenya Ridge",
                    availability: "https://schema.org/InStock",
                    url: "https://www.lukenyaridge.com/plots",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
