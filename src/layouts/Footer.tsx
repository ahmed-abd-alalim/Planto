import { useState } from "react";

// import img
import logo from "/logo.png";

// import icon
import {
  FaLinkedin,
  FaSquareGithub,
  FaYoutube,
  FaSquareBehance,
} from "@/assets/icons";

const Footer = () => {
  const [emailInbutValue, setEmailInbutValue] = useState<string>("");

  return (
    <footer className="bg-[var(--color-footer-bg)]  pt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center md:text-start px-5 py-4">
          <div className="flex gap-2 items-center mb-5 justify-center md:justify-start">
            <img src={logo} alt="logo" className="w-[2rem]" />
            <h3 className="text-[var(--color-text-primary)] text-[1.5rem] font-medium">
              planto.
            </h3>
          </div>
          <span className="text-[var(--color-text-secondary)] text-[.9rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <div className="text-center md:text-start px-5 py-4 md:m-auto">
          <h4 className="capitalize text-[var(--color-text-primary)] font-bold mb-5">
            quick link`s
          </h4>
          <ul className="text-[var(--color-text-secondary)]  capitalize font-medium">
            <li className="my-2 hover:text-[var(--color-text-primary)] transition-colors cursor-pointer">
              home
            </li>
            <li className="my-2 hover:text-[var(--color-text-primary)] transition-colors cursor-pointer">
              plant type`s
            </li>
            <li className="my-2 hover:text-[var(--color-text-primary)] transition-colors cursor-pointer">
              contact
            </li>
            <li className="my-2 hover:text-[var(--color-text-primary)] transition-colors cursor-pointer">
              privacy
            </li>
          </ul>
        </div>
        <div className="md:text-start px-5 py-4 flex flex-col items-center md:items-start">
          <h4 className="capitalize text-[var(--color-text-primary)] font-bold mb-5">
            for every update`s
          </h4>
          <div className="w-14/15 h-[3rem] border-[var(--color-text-primary)] border-2 rounded-md overflow-hidden">
            <input
              type="text"
              value={emailInbutValue}
              onChange={(e) => setEmailInbutValue(e.target.value)}
              placeholder="enter email..."
              className="h-full w-[70%]  pl-3 pr-2 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] placeholder:capitalize placeholder:text-[.8rem] placeholder:opacity-50 focus:outline-none "
            />
            <button className="h-[3rem] w-[30%] uppercase text-[--color-footer-bg] font-medium bg-[var(--color-text-primary)] text-[0.9rem] ">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-8 pb-5">
        <div className="flex items-center justify-center md:justify-start gap-2 px-5 order-2 md:order-1 mt-5 md:mt-0">
          <p className="text-[var(--color-text-secondary)] font-medium text-[.8rem]">
            © 2025 Planto. All Right Reserved by
          </p>
          <a
            href="https://ahmedabdalalim.pages.dev/"
            target="_blank"
            className="w-[1.3rem] pt-1"
          >
            <img
              src="https://raw.githubusercontent.com/ahmed-abd-alalim/ahmed-abd-alalim/main/assets/3A.png"
              alt="3A"
              width={"100%"}
            />
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 px-5 order-1 md:order-2">
          <a
            href="https://www.linkedin.com/in/ahmed-abd-alalim-286768299/"
            className="text-[var(--color-text-secondary)] text-[1.5rem] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ahmed-abd-alalim"
            className="text-[var(--color-text-secondary)] text-[1.5rem] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <FaSquareGithub />
          </a>
          <a
            href="https://www.youtube.com/@AhmedAbdAlalim3A"
            className="text-[var(--color-text-secondary)] text-[1.5rem] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.behance.net/ahmedabdalalim/"
            className="text-[var(--color-text-secondary)] text-[1.5rem] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <FaSquareBehance />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
