import { createContext, useState } from "react";

export const Cart = createContext(true);
export default function CartChangerContext({ children }) {
  const [isChange, setisChange] = useState(true);
  return (
    <Cart.Provider value={{ isChange, setisChange }}>{children}</Cart.Provider>
  );
}
