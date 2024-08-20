import { createContext } from "react";

interface TGlobalContext {
  api: string;
  setApi: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  api: "",
  setApi: () => {},
  loading: false,
  setLoading: () => {},
});
