import { useState } from "react";

interface Prop {
  key: string;
  initialValue: any;
}

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if( item ) {
        return JSON.parse(item);
      }else {
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  }
  );

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }

  return { storedValue, setValue };
}