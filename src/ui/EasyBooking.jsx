import Button from "../components/Button";

const EasyBooking = () => {
  return (
    <div className="bg-[#092640] max-w-screen-2xl  flex  flex-col pt-20 gap-y-10 items-center text-white px-3">
      <h2 className="w-full text-4xl md:text-5xl text-center font-extrabold">
        Easy access for easy booking
      </h2>

      <p className="w-full md:w-1/2 text-center leading-6 tracking-wider ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est
        eum, assumenda quod pariatur fugit?
      </p>
      <div className="flex  gap-4 pb-20 ">
        <Button title="Start for free" />
        <Button
          title="Talk with Sales"
          className="bg-blue-dark px-8 py-4  border border-white hover:bg-white hover:text-black hover:transition-colors delay-100"
        />
      </div>
    </div>
  );
};
export default EasyBooking;
