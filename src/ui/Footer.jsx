import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import FooterItems from "../components/footer/FooterItems";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto   flex flex-col  md:flex-row p-12 gap-x-4">
      <div className="px-7 w-full md:w-[40%] flex flex-col gap-6 ">
        <div className="flex flex-col gap-2 text-4xl font-bold leading-0 tracking-wide">
          <h3>Easy</h3>
          <h3 className="text-blue-600">ahead</h3>
        </div>
        <p className=" text-gray-500 leading-7 tracking-wide font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          tenetur quam.
        </p>

        <button
          type="button"
          class="inline-flex w-full  items-center justify-between  rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-10"
          id="menu-button"
        >
          English
          <ChevronDown className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7C2fIha-uPeZPqSSx-_J2ajC0PWwgsCbCFHWmiU4HA&s"
            alt="playstore"
            className="w-1/2 sm:w-1/3 object-fill"
          />
          <img
            src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge.png"
            alt="app-store"
            className="w-1/2 sm:w-1/3"
          />
        </div>
        <div className="flex gap-9 md:gap-7 mb-10 items-start justify-start cursor-pointer ">
          <Twitter className="w-7 h-7" />
          <Facebook className="w-7 h-7" />
          <Instagram className="w-7 h-7" />
          <Linkedin className="w-7 h-7" />
          <Youtube className="w-7 h-7" />
        </div>
      </div>
      <FooterItems />
      <span></span>
    </footer>
  );
};
export default Footer;
