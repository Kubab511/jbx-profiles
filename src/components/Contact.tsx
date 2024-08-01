import { Link } from "react-router-dom";

export function Contact() {
  return (
    <>
      <h1 className="pt-24 text-slate-950 dark:text-[#ADB7BE] text-center font-bold text-4xl">Contact</h1>
      <p className="text-slate-950 dark:text-[#ADB7BE] text-xl text-center px-2">
        If you have any questions, comments or issues reach out to us at <Link className="hover:text-neutral-600 dark:hover:text-white" to={"#"}>#</Link> or on our discord server linked below
      </p>
    </>
  )
}