"use client";

import { useFormStatus } from "react-dom";

const FormSubmit = () => {
  const status = useFormStatus();

  return (
    <>
      <button type="reset">Reset</button>
      <button disabled={status.pending}>
        {status.pending ? "Submitting..." : "Create post"}
      </button>
    </>
  );
};

export default FormSubmit;

// import { useActionState } from "react";
