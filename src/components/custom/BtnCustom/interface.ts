export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonCustomProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  size?: ButtonSize;
}
