"use client";
import { useFormStatus } from "react-dom";

export default function SubmitCommentButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={pending ? "disabled" : ""}>
      {pending ? "Adding Comment..." : "Add comment"}
    </button>
  );
}
