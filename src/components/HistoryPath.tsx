import { HistoryPath as HistoryPathStyled } from "../styled-components";
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from "react-router-dom"

interface Props {
  pathName: string;
  pathUrl: string;
  isLast: boolean;
}

export const HistoryPath = ({ pathName, pathUrl, isLast }: Props) => {
  return (
    <Link to={pathUrl}>
      <HistoryPathStyled isLast={isLast}>
        {pathName}
        <IoIosArrowForward />
      </HistoryPathStyled>
    </Link>
  )
}
