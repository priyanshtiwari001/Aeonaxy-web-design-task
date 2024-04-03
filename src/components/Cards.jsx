import {
  MessageCircleCode,
  ShieldCheck,
  SquareLibrary,
  Target,
  UserRound,
  Zap,
} from "lucide-react";
import Card from "./Card";
const cards = [
  {
    icon: <Target className="w-9 h-9 text-blue-600" />,
    title: "Sales",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas tenetur est. Nemo animi, nostrum voluptatum similique quibusdam iusto sapiente? Nemo animi, nostrum",
  },
  {
    icon: <MessageCircleCode className="w-9 h-9 text-blue-600" />,
    title: "Recruiting",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas tenetur est. Nemo animi, nostrum voluptatum similique quibusdam iusto sapiente? Nemo animi, nostrum",
  },
  {
    icon: <SquareLibrary className="w-9 h-9 text-blue-600" />,
    title: "Education",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas tenetur est. Nemo animi, nostrum voluptatum similique quibusdam iusto sapiente? Nemo animi, nostrum",
  },
  {
    icon: <ShieldCheck className="w-9 h-9 text-blue-600" />,
    title: "Revenue Operation",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas tenetur est. Nemo animi, nostrum voluptatum similique quibusdam iusto sapiente? Nemo animi, nostrum",
  },
  {
    icon: <Zap className="w-9 h-9 text-blue-600" />,
    title: "Marketing",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas tenetur est. Nemo animi, nostrum voluptatum similique quibusdam iusto sapiente? Nemo animi, nostrum",
  },
  {
    icon: <UserRound className="w-9 h-9 text-blue-600" />,
    title: "Customer sucess",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas tenetur est. Nemo animi, nostrum voluptatum similique quibusdam iusto sapiente? Nemo animi, nostrum",
  },
];
const Cards = () => {
  return (
    <div className="w-full px-12 flex gap-4 flex-wrap items-center justify-center  ">
      {cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
};
export default Cards;
