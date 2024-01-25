import { sql } from "@vercel/postgres";

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
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}
