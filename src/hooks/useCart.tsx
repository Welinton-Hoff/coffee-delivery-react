import { useContext } from "react";

import { CartContext } from "src/contexts/CartProvider";

export function useCart() {
  return useContext(CartContext);
}
