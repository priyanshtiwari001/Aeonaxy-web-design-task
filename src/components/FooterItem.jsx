const FooterItem = ({ list }) => {
  return (
    <div className=" w-[40%] md:w-[27%] p-1 capitalize">
      <h4 className="font-semibold text-xl mb-3 md:mb-7 ">{list.title}</h4>
      <div className="font-light text-sm flex flex-col gap-1 md:gap-4">
        {list.item.map((ele) => (
          <p>{ele}</p>
        ))}
      </div>
    </div>
  );
};
export default FooterItem;
