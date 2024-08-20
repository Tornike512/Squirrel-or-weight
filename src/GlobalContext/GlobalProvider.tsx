import { PropsWithChildren, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [api, setApi] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ api, setApi }}>
      {children}
    </GlobalContext.Provider>
  );
}
