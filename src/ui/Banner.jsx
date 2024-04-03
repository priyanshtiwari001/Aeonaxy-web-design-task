import { Solution } from "./../components/Solution";
import Button from "../components/Button";

const Banner = () => {
  return (
    <section className=" max-w-screen-xl  pt-16 overflow-hidden relative mx-auto px-7 h-[560px] flex flex-col  items-center ">
      <Solution />
      <h1 className="text-5xl md:text-6xl w-full text-center font-bold my-9 md:my-14  ">
        <span className="text-blue-600 ">Calendly </span> for the work you do
      </h1>
      <p className="w-full md:w-1/2 text-md md:text-xl text-center text-gray-500 font-light leading-0 tracking-wide mb-10">
        Across a range of uses, Calendly helps people and teams build
        efficiency, professionalism and results into the work they do.
      </p>
      <Button title="Contact sales" className=" px-14 py-5 m-5  " />
      <div className="absolute top-[90%] md:top[70%] left-1/2  -translate-x-1/2 -translate-y-1/2 flex h-full w-full items-center justify-center">
        <div className="h-[80%] w-[90%] md:h-full md:w-full  rounded-t-full rounded-tl-full rounded-tr-full bg-blue-400 opacity-5 "></div>
      </div>
    </section>
  );
};
export default Banner;
