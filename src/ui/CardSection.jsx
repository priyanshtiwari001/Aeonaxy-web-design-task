import Cards from "../components/Cards";
import { Solution } from "../components/Solution";

const CardSection = () => {
  return (
    <section className="  max-w-screen-xl mx-auto mt-10 flex flex-col gap-y-12 items-center justify-center pb-10">
      <Solution />
      <div>
        <h1 className="text-3xl  text-center w-full md:text-4xl font-extrabold  ">
          Calendly can solve your specific pain points
        </h1>
      </div>
      <Cards />
    </section>
  );
};
export default CardSection;
