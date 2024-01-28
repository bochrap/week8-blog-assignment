import { sql } from "@vercel/postgres";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default async function SightingsPage() {
  revalidatePath("/sightings");
  const posts = await sql`
    SELECT * FROM sightings;
  `;
  console.log(posts);
  return (
    <div>
      <h2>Dog Sightings</h2>

      {posts.rows.map((post) => (
        <Link key={post.id} href={`/sightings/${post.id}`}>
          <div key={post.id} id="sighting">
            <p>{post.postcode}</p>
            <p>{post.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
