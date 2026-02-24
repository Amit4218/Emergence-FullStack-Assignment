import { useTheme } from "@/contexts/themProvider";
import { NavLink } from "react-router-dom";
import { Button } from "./button";

function navbar() {
  const { theme, setTheme } = useTheme();

  let themeToggleBtn = theme == "dark" ? "ri-moon-fill" : "ri-sun-fill";

  return (
    <nav className="py-3 px-3 flex justify-between items-center">
      <div id="page_icon" className="text-md sm:text-2xl">
        <NavLink
          to="/"
          className="ri-infinity-line sm:px-2 sm:py-2 rounded hover:bg-secondary"
        />
      </div>
      <div id="mid_content" className="flex gap-1 md:gap-4 font-semibold">
        <NavLink
          to={"/"}
          className="px-2 py-2 my-1 rounded hover:bg-secondary text-sm sm:text-md"
        >
          Home
        </NavLink>
        <NavLink
          to={"/contact"}
          className="px-2 py-2 my-1 rounded hover:bg-secondary text-sm sm:text-md"
        >
          Contact
        </NavLink>
        <NavLink
          to={"/about"}
          className="px-2 py-2 my-1 rounded hover:bg-secondary text-sm sm:text-md"
        >
          About
        </NavLink>
      </div>
      <div id="quick_links" className="flex gap-1">
        <NavLink
          to="mailto:amitbhagat621@gmail.com"
          target="_blank"
          className="ri-mail-send-line px-2 py-1 text-md hidden md:text-xl sm:block rounded hover:bg-secondary"
        />
        <NavLink
          to="https://github.com/Amit4218"
          target="_blank"
          className="ri-github-line px-2 py-1 text-md hidden md:text-xl sm:block rounded hover:bg-secondary"
        />
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant={"secondary"}
          className={`${themeToggleBtn} bg-primary-foreground text-black text-md dark:text-white`}
        ></Button>
      </div>
    </nav>
    //
  );
}

export default navbar;
