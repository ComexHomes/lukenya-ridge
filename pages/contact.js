import { useState } from "react";
import { Seo } from "@/components/Layout";
import { Banner, Heading } from "@/components/Blocks";
import { PROJECT, whatsappLink } from "@/components/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "Buying to build", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg =
      `Hello Comex Homes, I would like to register interest in Lukenya Ridge.\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterest: ${form.interest}` +
      (form.message ? `\nMessage: ${form.message}` : "");
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Register interest in Lukenya Ridge plots. Call 0709 501 501, email info@comexhomes.ke or chat with Comex Homes on WhatsApp."
      />
      <Banner image="/images/land.jpg" title="Contact" subtitle="Select. Secure. Build." />

      <section className="contact" data-aos="fade-up">
        <div className="contact-info">
          <Heading small="Talk to" big="Comex Homes" center={false} />
          <p>
            <strong>Call:</strong> <a href={`tel:${PROJECT.phoneIntl}`}>{PROJECT.phone}</a>
          </p>
          <p>
            <strong>Email:</strong> <a href={`mailto:${PROJECT.email}`}>{PROJECT.email}</a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              Chat with us
            </a>
          </p>
          <p>
            <strong>Office:</strong> Hurlingham Telkom Plaza, 1st Floor, Nairobi
          </p>
          <p>
            <strong>Hours:</strong> Monday to Friday 07:30am to 16:30pm, Saturday 09:00am to 13:00pm
          </p>
          <p>
            <a href={PROJECT.brochure} target="_blank" rel="noreferrer" className="text-link">
              Download the Lukenya Ridge brochure
            </a>
          </p>
        </div>

        <div className="contact-form">
          <h3>Register Interest</h3>
          {/* Website Enquiry form in Zoho Forms. Every submission is emailed to info@comexhomes.ke. */}
          <iframe
            title="Website Enquiry"
            aria-label="Website Enquiry"
            src="https://forms.zohopublic.com/balozi/form/WebsiteEnquiry/formperma/lMJLwfCsL2F8murEt4IYFdRYU6FWs7a6Xe9Ai3gVfw8?Website=https%3A%2F%2Fwww.lukenyaridge.com"
            style={{ width: "100%", height: "900px", border: "none", background: "#fff", borderRadius: 8 }}
          />
          <p style={{ marginTop: 12 }}>
            Prefer WhatsApp?{" "}
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              Chat with us
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
