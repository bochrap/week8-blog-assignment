import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function SightingsPage() {
  //   const posts = await sql'SELECT * FROM sightings;';
  const posts = await sql`
    SELECT * FROM sightings;
  `;
  return (
    <div>
      <h2>Dog Sightings</h2>
      <ul>
        {posts.rows.map((post) => (
          <Link key={post.id} href={`/sightings/${post.id}`}>
            <li key={post.id}>{post.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
