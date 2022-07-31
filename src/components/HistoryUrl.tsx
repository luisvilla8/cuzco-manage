import { useLocation } from "react-router-dom";
import { getUrlInArray } from "../util";
import { HistoryPath } from "./HistoryPath";

export const HistoryUrl = () => {
  const { pathname } = useLocation();
  const history = getUrlInArray(pathname);
  return (
    <>
      {history.map( ( path ) => {
        return (
          <HistoryPath key={path.id} {...path}/>
        )
      })}
    </>
  )
}
