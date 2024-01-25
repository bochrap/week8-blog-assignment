import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div id="page-title">
        <h1>U.W.O. DOGSPOTTING</h1>
        <p>(Unidentified Wagging Object)</p>
      </div>
      <nav>
        <Link href={"/"}>REPORT</Link>
        <Link href={"/"}>HOME</Link>
        <Link href={"/"}>BROWSE</Link>
      </nav>
      <hr />
    </header>
  );
}
