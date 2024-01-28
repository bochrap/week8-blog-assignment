import { sql } from "@vercel/postgres";

export default async function Comments({ id }) {
  const comments = await sql`
    SELECT * FROM comments WHERE sightings_id = ${id}`;
  return (
    <div>
      <ul>
        {comments.rows.map((comment) => (
          <li key={comment.id}>
            {`${comment.name} said: ${comment.comment}`}
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
