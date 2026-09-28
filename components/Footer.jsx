import { PROJECT, whatsappLink } from "./data";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="top">
        <div className="area">
          <img className="footer-logo" src="/images/lukenya-logo-white.png" alt="Lukenya Ridge" />
          <p className="footer-tag">SELECT. SECURE. BUILD.</p>
        </div>
        <div className="area">
          <h3>Office Hours</h3>
          <p>Monday to Friday 07:30am to 16:30pm</p>
          <p>Saturday 09:00am to 13:00pm</p>
        </div>
        <div className="area">
          <h3>Comex Homes</h3>
          <p>Hurlingham Telkom Plaza, 1st Floor.</p>
          <p>
            Phone: <a href={`tel:${PROJECT.phoneIntl}`}>{PROJECT.phone}</a>
          </p>
          <p>
            <a href={`mailto:${PROJECT.email}`}>{PROJECT.email}</a>
          </p>
          <p>
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </p>
        </div>
      </div>
      <div className="bottom">
        <a href="https://www.comexhomes.ke/" target="_blank" rel="noreferrer">
          <img className="footer-comex" src="/images/comex-logo-white.png" alt="Comex Homes" />
        </a>
        <p>Lukenya Ridge &copy; {new Date().getFullYear()} · A Comex Homes project</p>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a className="wa-float" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
        <path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.2.6 4.4 1.7 6.3L3 29l7.3-1.9c1.8 1 3.8 1.5 5.8 1.5 7 0 12.7-5.7 12.7-12.6S23 3 16 3zm0 23.2c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4.3 1.1 1.2-4.2-.3-.4c-1-1.7-1.5-3.5-1.5-5.5C5.4 9.8 10.2 5.1 16 5.1s10.6 4.7 10.6 10.5S21.8 26.2 16 26.2zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.7-2.1s0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  );
}
