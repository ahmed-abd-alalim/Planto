import { StateContext } from "./context";
import { useEffect, useState } from "react";

// import types
import type { props, dataType } from "@/types";

// import json data
import data from "@storage/index.json";

export const StateProvider = ({ children }: props): React.JSX.Element => {
  const [appData, setAppData] = useState<dataType>([]);

  useEffect(() => {
    setAppData(data);
  }, []);

  return (
    <StateContext.Provider value={{ appData, setAppData }}>
      {children}
    </StateContext.Provider>
  );
};
