// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";

export default function Report() {
  async function handleReport(formData) {
    "use server";

    const name = formData.get("name");
    const date = formData.get("year") + formData.get("month") + formData.get("day") + formData.get("hrs") + formData.get("mins");
    const is_truename = formData.get("is_truename");
    const looks = formData.get("looks");
    const was_happy = formData.get("was_happy");
    const postcode = formData.get("postcode");
    const location_desc = formData.get("location_desc");
    const notes = formData.get("notes");
    const picture_url = formData.get("picture_url");

    await sql`INSERT INTO sightings (name, date, is_true_name, looks, was_happy, postcode, location_desc, notes, photo ) VALUES (${name},${date}, ${is_truename}, ${looks}, ${was_happy}, ${postcode}, ${location_desc}, ${notes}, ${picture_url})`;

    // console.log(name, date, is_truename, looks, was_happy, postcode, location_desc, notes, picture_url);

    revalidatePath("/sightings");
    redirect("/sightings");
  }

  return (
    <form action={handleReport}>
      <span>Date of sighting</span>
      <select id="year" name="year" required>
        <option value="" defaultValue>
          --Year--
        </option>
        <option value="2024">2024</option>
      </select>
      <select id="month" name="month" required>
        <option value="" defaultValue>
          --Month--
        </option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>

      <select id="day" name="day" required>
        <option value="" defaultValue>
          --Day--
        </option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="12">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>

      <select id="hrs" name="hrs" required>
        <option value="" defaultValue>
          --Hrs--
        </option>
        <option value="00">00:</option>
        <option value="01">01:</option>
        <option value="02">02:</option>
        <option value="03">03:</option>
        <option value="04">04:</option>
        <option value="05">05:</option>
        <option value="06">06:</option>
        <option value="07">07:</option>
        <option value="08">08:</option>
        <option value="09">09:</option>
        <option value="10">10:</option>
        <option value="11">11:</option>
        <option value="12">12:</option>
        <option value="13">13:</option>
        <option value="14">14:</option>
        <option value="15">15:</option>
        <option value="16">16:</option>
        <option value="17">17:</option>
        <option value="18">18:</option>
        <option value="19">19:</option>
        <option value="20">20:</option>
        <option value="21">21:</option>
        <option value="22">22:</option>
        <option value="23">23:</option>
      </select>

      <select id="mins" name="mins" required>
        <option value="" defaultValue>
          --Mins--
        </option>
        <option value="00">:00</option>
        <option value="15">:15</option>
        <option value="30">:30</option>
        <option value="45">:45</option>
      </select>

      <br />

      <label htmlFor="name">Name/Nickname</label>
      <input type="text" name="name" id="name" placeholder="Name the dog" required />
      <br />

      <span>Is it dogs real name?</span>
      <input type="radio" id="yes" name="is_truename" value="YES" required defaultChecked />
      <label htmlFor="yes">YES</label>

      <input type="radio" id="no" name="is_truename" value="NO" />
      <label htmlFor="">NO</label>
      <br />

      <span>Was doggy happy?</span>
      <input type="radio" id="yes" name="was_happy" value="YES" required defaultChecked />
      <label htmlFor="yes">YES</label>

      <input type="radio" id="no" name="was_happy" value="NO" />
      <label htmlFor="">NO</label>
      <br />

      <label htmlFor="looks">Looks</label>
      <input type="text" name="looks" id="looks" placeholder="Dogs look" required />
      <br />

      <label htmlFor="postcode">Postcode</label>
      <input type="text" name="postcode" id="postcode" placeholder="Sighting postcode" required />
      <br />

      <label htmlFor="location_desc">Sighting place description</label>
      <input type="text" name="location_desc" id="location_desc" placeholder="Describre the location" required />
      <br />

      <label htmlFor="picture_url">Image URL</label>
      <input type="text" name="picture_url" id="picture_url" placeholder="Add dogs photo URL" />
      <br />

      <label htmlFor="notes">Notes</label>
      <input type="text" name="notes" id="notes" placeholder="Add notes" />
      <br />
      <button type="submit">POST</button>
    </form>
  );
}
