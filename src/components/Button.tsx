import React from "react";

type ButtonProps = {
  children: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
} & Omit<React.ComponentProps<"button">, "children">;

const Button = ({ handleClick, children, ...rest }: ButtonProps) => {
  return (
    <button onClick={(e) => handleClick(e, 1)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
