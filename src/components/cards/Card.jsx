import { ChevronRight, Target } from "lucide-react";

const Card = ({ card }) => {
  const { icon, title, desc } = card;
  return (
    <div className="border-gray-200 border w-96  rounded-xl shadow-md hover:shadow-xl p-5">
      <div className="flex gap-2 flex-col">
        {icon}
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="leading-8 tracking-wide">{desc}</p>
        <button className=" flex mt-[30px] text-lg items-center text-blue-700">
          Learn more <ChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Card;
