import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { MENU } from "./data";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  return (
    <header className="site-header">
      <nav className="nav">
        <Link href="/" aria-label="Lukenya Ridge home">
          <img className="nav-logo" src="/images/lukenya-logo.png" alt="Lukenya Ridge" />
        </Link>
        <button
          className={`nav__menu-bar ${open ? "is-open" : ""}`}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`nav__overlay ${open ? "active" : ""}`} onClick={() => setOpen(false)} />
      <div className={`nav__menu-list ${open ? "active" : ""}`}>
        {MENU.map((m) =>
          m.external ? (
            <a key={m.text} className="nav__link" href={m.href} target="_blank" rel="noreferrer">
              {m.text}
            </a>
          ) : (
            <Link
              key={m.text}
              href={m.href}
              className={`nav__link ${router.pathname === m.href ? "current" : ""}`}
            >
              {m.text}
            </Link>
          )
        )}
      </div>
    </header>
  );
}
