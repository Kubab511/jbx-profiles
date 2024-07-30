import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
    <div className="footer border border-transparent border-t-[#484b6a] text-slate-950">
      <div className="container mx-auto p-6 flex flex-col items-center justify-between min-h-fit sm:flex-row">
        <img className="h-10 w-10" src="/vite.svg" alt="Icon" />
        <div className="flex">
          <Link to={"https://discord.com/app"} target="_blank">
            <FaDiscord className="h-10 w-10 sm:pt-0 pt-2 text-slate-950 hover:text-neutral-600 dark:text-[#ADB7BE] dark:hover:text-white" />
          </Link>
          <p className="text-slate-600 sm:pt-0 pt-2 my-auto pl-4">Copyright &#169; JBX Profiles 2024</p>
        </div>
      </div>
    </div>
    </>
  )
}