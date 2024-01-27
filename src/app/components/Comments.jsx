import { sql } from "@vercel/postgres";
import { Libre_Barcode_128 } from "next/font/google";

export default async function Comments({ id }) {
  const comments = await sql`
    SELECT * FROM comments WHERE sightings_id = ${id}`;
  return (
    <div>
      <ul>
        {comments.rows.map((comment) => (
          <li key={comment.id}>{`Username: ${comment.name}, Comment: ${comment.comment}`}</li>
        ))}
      </ul>
    </div>
  );
}
