import clsx from "clsx";

const Button = ({ title, className }) => {
  return (
    <button
      type="button"
      className={clsx(
        "bg-blue-600  hover:bg-blue-700 text-white px-8 py-4 rounded-lg  lg:rounded-full lg:text-sm",
        className
      )}
    >
      {title}
    </button>
  );
};
export default Button;
