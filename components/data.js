// Central project facts. Edit here and every page updates.
export const PROJECT = {
  name: "Lukenya Ridge",
  tagline: "Premium plots on Nairobi's Mombasa Road growth corridor.",
  location: "Lukenya, Mombasa Road",
  plotSize: "50 x 100 Plots",
  totalPlots: "60 Plots",
  distance: "45 Mins from CBD",
  phone: "0709 501 501",
  phoneIntl: "+254709501501",
  email: "info@comexhomes.ke",
  brochure: "/Lukenya-Ridge-Catalogue.pdf",
};

export const whatsappLink = (msg) =>
  `https://wa.me/254709501501?text=${encodeURIComponent(
    msg || "Hello Comex Homes, I would like to register interest in Lukenya Ridge plots."
  )}`;

export const MENU = [
  { text: "Home", href: "/" },
  { text: "The Plots", href: "/plots" },
  { text: "Estate Concept", href: "/estate" },
  { text: "Location", href: "/location" },
  { text: "Why Lukenya", href: "/why-lukenya" },
  { text: "Contact", href: "/contact" },
  { text: "Comex Homes", href: "https://www.comexhomes.ke/", external: true },
];
