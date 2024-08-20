import { createContext } from "react";

interface TGlobalContext {
  api: string;
  setApi: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  api: "",
  setApi: () => {},
});
