import { ReactNode } from "react";

export const definePlaceholder = (type: string, children: string) => {
  if (type === "number") return "00.00";
  if (type === "text") return `Escribe el ${children}`;
};
export const defineInputWidth = (icon: ReactNode) => {
  if(!icon) return "100%";
  return `90%`;
}