import { PropsWithChildren, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [api, setApi] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ api, setApi, loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}
