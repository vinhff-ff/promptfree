import React from "react";
import type { ButtonCustomProps } from "./interface";

const ButtonCustom: React.FC<
  React.PropsWithChildren<ButtonCustomProps>
> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  size = "md"
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn-custom btn-${size} ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;
