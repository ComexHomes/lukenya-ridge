import { useState } from "react";
import { Seo } from "@/components/Layout";
import { Banner, Heading } from "@/components/Blocks";
import { PROJECT, whatsappLink } from "@/components/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "Buying to build", message: "" });
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Sent to /api/enquiry, which passes it to the Zoho "Website Enquiry" form; Zoho emails info@comexhomes.ke.
  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "failed");
      setForm({ name: "", phone: "", email: "", interest: "Buying to build", message: "" });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
    }
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
            <input required type="email" value={form.email} onChange={set("email")} />
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
          <button className="btn" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "sending..." : "send enquiry"}
          </button>
          {status === "sent" ? (
            <p style={{ marginTop: 12 }}>Thank you. Your enquiry has been sent and our team will contact you shortly.</p>
          ) : null}
          {status === "error" ? (
            <p style={{ marginTop: 12, color: "#b91c1c" }}>
              Sorry, your message did not go through. Please call 0709 501 501 or chat with us on WhatsApp.
            </p>
          ) : null}
        </form>
      </section>
    </>
  );
}
