import { Check } from "lucide-react";
import React, { JSX } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  priority?: "primary" | "normal";
  iconPosition?: "leading" | "trailing";
  icon?: JSX.Element;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  priority = "primary",
  iconPosition = "",
  icon,
  children,
  ...props
}) => {
  const baseStyles = "rounded-md px-4 py-2 font-semibold focus:outline-none";

  const styles = {
    primary:
      "bg-primary text-white hover:bg-primary-hover active:bg-primary-active disabled:bg-primary-disabled disabled:cursor-not-allowed",
    normal:
      "bg-normal text-white hover:bg-normal-hover active:bg-normal-active disabled:bg-normal-disabled disabled:cursor-not-allowed",
  };

  const buttonClass = twMerge(baseStyles, styles[priority], props.className);

  return (
    <button className={buttonClass} {...props}>
      {icon && iconPosition === "leading" && (
        <span className="mr-2">
          <Check />
        </span>
      )}
      {children}
      {icon && iconPosition === "trailing" && (
        <span className="ml-2">
          <Check />
        </span>
      )}
    </button>
  );
};

export default Button;
