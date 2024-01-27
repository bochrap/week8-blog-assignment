import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div id="page-title">
        <h1>U.W.O. DOGSPOTTING</h1>
        <p>(Unidentified Wagging Object)</p>
      </div>
      <nav>
        <Link href={"/report"}>REPORT</Link>
        <Link href={"/"}>HOME</Link>
        <Link href={"/sightings"}>BROWSE</Link>
      </nav>
    </header>
  );
}
