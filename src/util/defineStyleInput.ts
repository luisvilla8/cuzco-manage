import { ReactNode } from "react";

export const definePlaceholder = (type: string, children: string) => {
  if (type === "number") return "00.00";
  if ( ["text", "textarea"].includes(type) ) return `Escribe el ${children}`;
};
export const defineInputWidth = (icon: ReactNode) => {
  if(!icon) return "100%";
  return `90%`;
}