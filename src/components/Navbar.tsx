import Hamburger from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const ref = useRef(null);

  const darkModeHandler = () => {
    setDark(!dark);

    document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-dark");
    
    dark ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark");
  }

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if(theme === "dark") {
      setDark(true);
      document.body.classList.add("dark");
      document.body.classList.add("bg-dark");
    }

  }, []);

  const setClose = () => {
    setOpen(false);
  }

  return (
    <>
    <div className="fixed mx-auto border border-[#484b6a] border-t-transparent border-l-transparent border-r-transparent top-0 left-0 right-0 z-10 bg-[#fafafa] dark:bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <img src="/jbx-logo.png" alt="Logo" className="h-10 w-10"/>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex items-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <NavLink to="/" className={({ isActive }) => isActive ? "block bg-slate-300 dark:bg-[#343434] p-1 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded hover:cursor-default" : "block py-2 pl-3 pr-4 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-neutral-600 dark:hover:text-white hover:cursor-pointer"}>
              Home
            </NavLink>
            <NavLink to="/profiles" className={({ isActive }) => isActive ? "block bg-slate-300 dark:bg-[#343434] p-1 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded hover:cursor-default" : "block py-2 pl-3 pr-4 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-neutral-600 dark:hover:text-white hover:cursor-pointer"}>
              Profiles
            </NavLink>
            <NavLink to="/liveries" className={({ isActive }) => isActive ? "block bg-slate-300 dark:bg-[#343434] p-1 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded hover:cursor-default" : "block py-2 pl-3 pr-4 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-neutral-600 dark:hover:text-white hover:cursor-pointer"}>
              Liveries
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "block bg-slate-300 dark:bg-[#343434] p-1 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded hover:cursor-default" : "block py-2 pl-3 pr-4 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-neutral-600 dark:hover:text-white hover:cursor-pointer"}>
              Contact
            </NavLink>
            <NavLink to="/faq" className={({ isActive }) => isActive ? "block bg-slate-300 dark:bg-[#343434] p-1 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded hover:cursor-default" : "block py-2 pl-3 pr-4 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-neutral-600 dark:hover:text-white hover:cursor-pointer"}>
              FAQ
            </NavLink>
            <button className="block py-2 pl-3 pr-4" onClick={() => darkModeHandler()}>
              {dark && <IoSunny style={{ color: "#ADB7BE" }} />}
              {!dark && <IoMoon />}
            </button>
          </ul>
        </div>
        <div ref={ref} className="block md:hidden">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} color={dark ? "#ADB7BE" : "#020617"} />
        </div>
      </div>
      {isOpen && (
            <ul className="flex flex-col py-4 items-center">
              <NavLink to="/" onClick={setClose} className={({ isActive }) => isActive ? "block bg-slate-300 dark:bg-[#343434] p-1 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded hover:cursor-default" : "block py-2 pl-3 pr-4 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-neutral-600 dark:hover:text-white hover:cursor-pointer"}>
              Home
              </NavLink>
              <NavLink to="/profiles" onClick={setClose} className={({ isActive }) => isActive ? "block bg-slate-300 dark:bg-[#343434] p-1 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded hover:cursor-default" : "block py-2 pl-3 pr-4 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-neutral-600 dark:hover:text-white hover:cursor-pointer"}>
                Profiles
              </NavLink>
              <NavLink to="/liveries" onClick={setClose} className={({ isActive }) => isActive ? "block bg-slate-300 dark:bg-[#343434] p-1 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded hover:cursor-default" : "block py-2 pl-3 pr-4 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-neutral-600 dark:hover:text-white hover:cursor-pointer"}>
                Liveries
              </NavLink>
              <NavLink to="/contact" onClick={setClose} className={({ isActive }) => isActive ? "block bg-slate-300 dark:bg-[#343434] p-1 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded hover:cursor-default" : "block py-2 pl-3 pr-4 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-neutral-600 dark:hover:text-white hover:cursor-pointer"}>
                Contact
              </NavLink>
              <NavLink to="/faq" onClick={setClose} className={({ isActive }) => isActive ? "block bg-slate-300 dark:bg-[#343434] p-1 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded hover:cursor-default" : "block py-2 pl-3 pr-4 text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-neutral-600 dark:hover:text-white hover:cursor-pointer"}>
                FAQ
              </NavLink>
              <button className="block py-2 pl-3 pr-4" onClick={() => darkModeHandler()}>
              {dark && <IoSunny style={{ color: "#ADB7BE" }} />}
              {!dark && <IoMoon />}
            </button>
            </ul>
          )}
    </div>
    </>
  )
}