import { useState } from "react";

// import img
import logo from "/logo.png";

// import icon
import {
  RiSearchLine,
  RiShoppingBag4Line,
  HiMenuAlt3,
  IoMdArrowDropdown,
  IoClose,
} from "@/assets/icons";

const NavBar = () => {
  const [searchPage, setSearchPage] = useState(0);

  return (
    <>
      {/* navbar */}
      <nav className="flex justify-between items-center pt-5 px-4 lg:px-8 ">
        <div className="flex items-center gap-2">
          <div className="w-6 md:w-7">
            <img src={logo} alt="logo" width={"100%"} />
          </div>
          <span className="capitalize text-[var(--color-text-primary)] text-md font-medium">
            planto.
          </span>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-10">
            <li className="text-[var(--color-text-secondary)] capitalize cursor-pointer text-sm hover:text-[var(--color-text-primary)] transition-colors">
              home
            </li>
            <li className="text-[var(--color-text-secondary)] capitalize cursor-pointer text-sm hover:text-[var(--color-text-primary)] transition-colors">
              plants type
              <IoMdArrowDropdown className="inline-block" />
            </li>
            <li className="text-[var(--color-text-secondary)] capitalize cursor-pointer text-sm hover:text-[var(--color-text-primary)] transition-colors">
              more
            </li>
            <li className="text-[var(--color-text-secondary)] capitalize cursor-pointer text-sm hover:text-[var(--color-text-primary)] transition-colors">
              contact
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <RiSearchLine
            className="text-xl md:text-xl text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text-primary)] transition-colors"
            onClick={() => setSearchPage(searchPage === 0 ? 1 : 0)}
          />
          <RiShoppingBag4Line className="text-xl md:text-xl text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text-primary)] transition-colors" />
          <HiMenuAlt3 className="text-2xl text-[var(--color-text-secondary)]  block md:hidden cursor-pointer hover:text-[var(--color-text-primary)] transition-colors" />
        </div>
      </nav>

      {/* search screen */}
      <section
        className={`w-full h-full fixed top-0 left-0 bg-[var(--color-background-transparent)] backdrop-blur-xs ${
          searchPage ? "flex" : "hidden"
        } items-center justify-center`}
      >
        <div className="relative w-13/15 md:w-10/15 lg:w-8/15 h-2/20 md:h-2/20 lg:h-2/20 rounded-lg bg-[var(---color-primary)] border-1 border-[var(--border-primary-color)] flex items-center">
          <div className="w-2/15 lg:w-1/12 h-full flex items-center justify-center border-r-1 border-[var(--border-primary-color)]">
            <div
              className="absolute z-2 top-0 right-0 mt-[-3rem] rounded-full border-1 border-[var(--border-primary-color)] w-8 h-8 bg-[var(---color-primary)] flex items-center justify-center"
              onClick={() => setSearchPage(searchPage === 0 ? 1 : 0)}
            >
              <IoClose className="text-[var(--color-text-secondary)] cursor-pointer" />
            </div>
            <RiSearchLine className="text-[var(--border-primary-color)] text-xl" />
          </div>
          <input
            type="text"
            className="w-13/15 lg:w-11/12 h-full hover:none focus:outline-none text-[var(--color-text-secondary)] text-lg pl-3 pr-2 placeholder:text-lg placeholder:opacity-70"
            placeholder={"Search plant"}
          />
        </div>
      </section>
    </>
  );
};

export default NavBar;
