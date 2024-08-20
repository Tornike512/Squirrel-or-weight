import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }) {
  const [showSmallModal, setShowSmallModal] = useState(true);

  return <GlobalContext.Provider value={{}}></GlobalContext.Provider>;
}
