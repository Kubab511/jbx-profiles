import { Link } from "react-router-dom";

export function Faq() {
  return (
    <>
      <h1 className="pt-24 text-slate-950 dark:text-[#ADB7BE] text-center font-bold text-4xl">FAQ</h1>
      <div className="py-4 mx-4 md:mx-32">
        <p className="text-slate-950 dark:text-[#ADB7BE] text-2xl font-bold px-2">
          How to install the profiles?
        </p>
        <p className="text-slate-950 dark:text-[#ADB7BE] text-xl px-2">
          Copy the .ini and .py files from the zip archive into "%appdata%\Virtuali\GSX\MSFS". If the profile requires anything else to be done (for example installing an exclusion file) it will be outlined in the readme.txt file located in the zip archive. Alternatively you can use the <Link className="hover:text-neutral-600 dark:hover:text-white underline" to={"https://flightsim.to/file/65242/drag-drop-installer-for-gsx-pro-profiles"} target="_blank">Drag&Drop Installer</Link> by ElevateSolutions
        </p>
      </div>
      <div className="py-4 mx-4 md:mx-32">
        <p className="text-slate-950 dark:text-[#ADB7BE] text-2xl font-bold px-2">
          How to install the liveries?
        </p>
        <p className="text-slate-950 dark:text-[#ADB7BE] text-xl px-2">
          Copy the package from the zip archive into your community folder like with any other msfs package
        </p>
      </div>
      <div className="py-4 mx-4 md:mx-32">
        <p className="text-slate-950 dark:text-[#ADB7BE] text-2xl font-bold px-2">
          What is the .py file for?
        </p>
        <p className="text-slate-950 dark:text-[#ADB7BE] text-xl px-2">
          The python script allows for more detailed profiles. It enables profile creators to set custom, more realistic names for stands as well as fully accurate stop positions which set the aircraft's nose wheel exactly on its stop position
        </p>
      </div>
      <div className="py-4 mx-4 md:mx-32">
        <p className="text-slate-950 dark:text-[#ADB7BE] text-2xl font-bold px-2">
          The jetway doesn't reach the aircraft?
        </p>
        <p className="text-slate-950 dark:text-[#ADB7BE] text-xl px-2">
          After spawning in, always use the "Reposition at this gate" feature to ensure the aircraft is stopped in the correct position so that the jetway can reach it. Additionally some sceneries have issues with jetways that can only be solved by the developer.
        </p>
      </div>
    </>
  )
}