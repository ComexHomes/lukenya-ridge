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

        <form className="contact-form" onSubmit={submit}>
          <h3>Register Interest</h3>
          <label>
            Full name
            <input required value={form.name} onChange={set("name")} />
          </label>
          <label>
            Phone number
            <input required type="tel" value={form.phone} onChange={set("phone")} />
          </label>
          <label>
            Email
            <input type="email" value={form.email} onChange={set("email")} />
          </label>
          <label>
            I am interested in
            <select value={form.interest} onChange={set("interest")}>
              <option>Buying to build</option>
              <option>Investment</option>
              <option>Development</option>
              <option>Booking a site visit</option>
            </select>
          </label>
          <label>
            Message (optional)
            <textarea rows="3" value={form.message} onChange={set("message")} />
          </label>
          <button className="btn" type="submit">
            send via whatsapp
          </button>
        </form>
      </section>
    </>
  );
}
