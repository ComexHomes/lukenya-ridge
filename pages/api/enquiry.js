// Website contact form relay. Passes enquiries to the Zoho Forms "Website Enquiry" form
// (owned by info@comexhomes.ke). Zoho emails every new entry to info@comexhomes.ke.
const ZOHO_URL = "https://forms.zohopublic.com/balozi/form/WebsiteEnquiry/formperma/lMJLwfCsL2F8murEt4IYFdRYU6FWs7a6Xe9Ai3gVfw8/records";
const SITE = "https://www.lukenyaridge.com";

const clean = (v, max) => String(v == null ? "" : v).trim().slice(0, max);

function toZoho(b) {
  const parts = clean(b.name, 200).split(/\s+/);
  return {
    SingleLine: parts[0] || "",
    SingleLine1: parts.slice(1).join(" ") || "-",
    Email: clean(b.email, 200),
    PhoneNumber: clean(b.phone, 30),
    SingleLine2: "Lukenya Ridge: " + clean(b.interest, 100),
    MultiLine: clean(b.message, 3000),
    Website: SITE,
  };
}

async function relay(b) {
  if (clean(b.company, 200)) return { status: 200, body: { ok: true } }; // spam trap
  const data = toZoho(b);
  if (!data.SingleLine || !data.Email || !data.PhoneNumber || !data.SingleLine2) {
    return { status: 400, body: { ok: false, error: "Please fill in all required fields." } };
  }
  try {
    const res = await fetch(ZOHO_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/zoho.forms-v1+json" },
      body: JSON.stringify(data),
    });
    const json = await res.json().catch(() => ({}));
    if (res.ok && (json.encoded_string || json.thankyou_page_URL)) return { status: 200, body: { ok: true } };
    return { status: 502, body: { ok: false, error: "Could not send" } };
  } catch (e) {
    return { status: 502, body: { ok: false, error: "Could not send" } };
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }
  const b = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const out = await relay(b);
  return res.status(out.status).json(out.body);
}
