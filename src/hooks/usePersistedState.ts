import { useState, useEffect, Dispatch, SetStateAction } from "react";

type IResponse<T> = [
  T,
  Dispatch<SetStateAction<T>>,
]

function usePersistedState<T>(key: string, initialState: any): IResponse<T> {
  const [state, setState] = useState(() => {
    const storageValue = typeof window === "undefined" ? localStorage.getItem(key) : initialState;

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
