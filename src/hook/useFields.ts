import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getFieldsByTableName } from "../pages";
import { getCurrentTableName } from "../util";

export const useFields = () => {
  const [currentFields, setCurrentFields] = useState([])
  const [currentTableName, setCurrentTableName] = useState("")
  const { pathname } = useLocation();
  
  const getCurrentFields = () => {
    const tableName = getCurrentTableName(pathname);
    setCurrentTableName(tableName);
    const fields = getFieldsByTableName(tableName);
    setCurrentFields(fields);
  }

  useEffect(() => {
    getCurrentFields();
  }, [])

  return { currentFields, currentTableName }
}
