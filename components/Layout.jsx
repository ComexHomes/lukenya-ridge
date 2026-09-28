import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navigation from "./Navigation";
import Footer, { WhatsAppFloat } from "./Footer";

export default function Layout({ children }) {
  const router = useRouter();

  // Scroll reveal (same feel as Nyayo's AOS fade-up / zoom-in), content stays visible without JS
  useEffect(() => {
    const els = document.querySelectorAll("[data-aos]:not(.aos-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("aos-in"));
      return;
    }
    document.documentElement.classList.add("aos-ready");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("aos-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
      <main className="main">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export function Seo({ title, description, path = "" }) {
  const t = title ? `${title} | Lukenya Ridge` : "Lukenya Ridge | Premium Plots on Mombasa Road";
  const d =
    description ||
    "Lukenya Ridge by Comex Homes: premium 50 by 100 plots in a planned gated estate in Lukenya, 45 minutes from Nairobi CBD along the Mombasa Road growth corridor.";
  const url = `https://www.lukenyaridge.com${path}`;
  return (
    <Head>
      <title>{t}</title>
      <meta name="description" content={d} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.lukenyaridge.com/images/og.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
