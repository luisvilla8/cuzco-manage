interface Props {
  children: string;
}

export const Logo = ({ children }: Props) => {
  return (
    <h1>{ children }</h1>
  )
}
