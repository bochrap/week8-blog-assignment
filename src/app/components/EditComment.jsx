import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";

export default function EditComment({ id }) {
  async function handleReport(formData) {
    "use server";

    const name = formData.get("username");
    const comment = formData.get("comment");

    // await sql`INSERT INTO comments (name, comment, sightings_id ) VALUES (${name}, ${comment}, ${id})`;

    // revalidatePath(`/sightings/${id}`);
    // redirect(`/sightings/${id}`);
  }

  return (
    <form name="addComment" id="addComment" action={handleReport}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" placeholder="Username" required />

      <label htmlFor="comment">Comment</label>
      <input type="text" name="comment" id="comment" placeholder="Your comment" required />
      <button type="submit">POST</button>
    </form>
  );
}
