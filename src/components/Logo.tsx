import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Logo = ({ children }: Props) => {
  return (
    <h1>{ children }</h1>
  )
}
