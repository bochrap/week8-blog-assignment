"use client";
import { useFormStatus } from "react-dom";

export default function SubmitSightingButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={pending ? "disabled" : ""}>
      {pending ? "Submitting..." : "Report Doggo"}
    </button>
  );
}
