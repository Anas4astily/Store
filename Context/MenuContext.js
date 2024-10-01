
import { createContext, useState } from "react";

export const Menu = createContext(true);
export default function MenuContext({children}) {
  const [isopen, setisopen] = useState(true);
  return (<Menu.Provider value={{ isopen, setisopen }}>{children}</Menu.Provider>);
}
