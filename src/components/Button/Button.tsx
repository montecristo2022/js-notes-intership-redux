import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(
        "inline-flex py-2 px-3 rounded border-0 font-inherit cursor-pointer bg-blue-selected bg-default text-inherit hover:bg-blue-selected hover:text-white",
        {
          "bg-blue-custom text-white": selected,
        }
      )}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
