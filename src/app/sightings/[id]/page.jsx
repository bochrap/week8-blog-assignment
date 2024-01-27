import { sql } from "@vercel/postgres";
import Comments from "@/app/components/Comments";

export default async function SingleSighting({ params }) {
  const post = await sql`
    SELECT * FROM sightings WHERE id = ${params.id}`;
  console.log(post);
  return (
    <div>
      <div>
        <p>Name: {post.rows[0].name}</p>
        <p>Real name: {post.rows[0].is_true_name}</p>
        <p>How it looks: {post.rows[0].looks}</p>
        <p>Was happy: {post.rows[0].was_happy}</p>
        <p>Postcode: {post.rows[0].postcode}</p>
        <p>Location description{post.rows[0].location_desc}</p>
        <p>Notes: {post.rows[0].notes}</p>
        <p>When: {post.rows[0].date}</p>
      </div>
      <Comments id={post.rows[0].id} />
    </div>
  );
}
