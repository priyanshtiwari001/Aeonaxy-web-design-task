import { ChevronDown, Menu } from "lucide-react";
import Button from "../components/Button";

import MobileNav from "../components/MobileNav";
import clsx from "clsx";

const navItems = [
  "Individuals",
  "Team",
  "Enterprise",
  "Product",
  "Pricing",
  "Resouces",
];
const Navbar = () => {
  return (
    <>
      <nav
        className={clsx(
          " flex items-center bg-p flex-row justify-between px-7 py-3 max-w-screen-xl mx-auto"
        )}
      >
        <img src="/logo.svg" alt="calendly" className="w-[160px] mr-3" />
        <div className="hidden lg:flex gap-x-5 lg:gap-x-9 font-medium">
          {navItems.map((item, index) =>
            index == 3 || index == 5 ? (
              <div className="  lg:flex items-center ">
                <a href="#" key={index}>
                  {item}
                </a>
                <ChevronDown className="w-4 h-4" />
              </div>
            ) : (
              <a href="#" key={index}>
                {item}
              </a>
            )
          )}
        </div>
        <div className="hidden lg:flex gap-3 ">
          <button className="px-5 py-1  rounded-lg hover:bg-slate-300 ">
            LogIn
          </button>
          <Button title="Get started" />
        </div>
        <MobileNav navItems={navItems} />
      </nav>
    </>
  );
};
export default Navbar;
