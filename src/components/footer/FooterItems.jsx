import FooterItem from "./FooterItem";

const items = [
  {
    title: "About",
    item: ["about Calendly", "Contact Sales", "Newsroom", "Careers"],
  },
  {
    title: "Solutions",
    item: [
      "Customer succes",
      "sales",
      "Recruiting",
      "Information",
      "Marketing",
    ],
  },
  {
    title: "Popular features",
    item: [
      "Embed calendly",
      "Availablity",
      "Sending Notifications",
      "Using calendy mobile",
    ],
  },
  {
    title: "support",
    item: ["Help center", "Video tutorials", "Cookie settings"],
  },
  {
    title: "Add-Ons",
    item: ["Download from chrome", "Download from firefox"],
  },
  {
    title: "Developers",
    item: ["Developers tools"],
  },
];

const FooterItems = () => {
  return (
    <div className=" w-full lg:w-[60%]  flex  gap-7 md:gap-16 flex-wrap  justify-center ">
      {items.map((list) => (
        <FooterItem list={list} />
      ))}
    </div>
  );
};
export default FooterItems;
