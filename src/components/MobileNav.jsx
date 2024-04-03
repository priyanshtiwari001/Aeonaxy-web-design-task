import { useState } from "react";
import Button from "./Button";
import { X } from "lucide-react";
const MobileNav = ({ navItems }) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div className="lg:hidden z-10  ">
      <button
        onClick={handleClick}
        class="navbar-burger flex justify-end items-end p-3 text-blue-600"
      >
        {toggle ? (
          <X className="h-8 w-8" />
        ) : (
          <svg
            class="block h-8 w-8 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        )}
      </button>

      {toggle && (
        <>
          <div className="absolute  top-20 left-0 right-0  w-full z-20 bg-white ">
            <div className=" flex px-5 py-2 items-center text-xl gap-y-5 flex-col mt-10 ">
              {navItems.map((item, index) => (
                <a
                  href="#"
                  key={index}
                  className="border-[1px] cursor-pointer border-black rounded-lg  flex items-center justify-center h-10 w-full hover:bg-gray-100"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-y-7 mt-32 px-5 pb-7 ">
              <button className="px-7 text-lg  py-2 rounded-lg hover:bg-slate-300  bg-slate-200 ">
                LogIn
              </button>
              <Button title="Get started" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default MobileNav;
