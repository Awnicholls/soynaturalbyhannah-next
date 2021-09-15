import cc from "classcat";

import { useThemeState } from "../context/theme";

const buttonStyle = (theme) => {
  switch (theme) {
    // case "kitchen-sink-journal-chopchop-shop":
    //   return "bg-clementine text-black";
    default:
      return "bg-purple text-white hover:bg-dark-purple";
  }
};

function Button({ className, ...props }) {
  const theme = useThemeState();

  const buttonClass = cc([
    "appearance-none border-none py-0.5 px-1.5 md:px-2 text-lg md:text-xl rounded transition focus:outline-none",
    buttonStyle(theme),
    className,
  ]);

  if (props.href) return <a {...props} className={buttonClass} />;

  return <button {...props} className={buttonClass} />;
}

export default Button;
