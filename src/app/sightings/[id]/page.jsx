import { sql } from "@vercel/postgres";

export default async function SingleSighting({ params }) {
  const post = await sql`
    SELECT * FROM sightings WHERE id = ${params.id}`;
  return (
    <div>
      <p>{post.rows[0].name}</p>
    </div>
  );
}
