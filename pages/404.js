import Link from "next/link";
import { Seo } from "@/components/Layout";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="intro" style={{ paddingTop: 180, minHeight: "60vh" }}>
        <h2 className="display dark">This page is not on the map.</h2>
        <div className="btn-area center">
          <Link href="/">
            <button className="btn">back to home</button>
          </Link>
        </div>
      </section>
    </>
  );
}
