import { useNavigate } from "react-router-dom";

import {
  useMemo,
  ReactNode,
  useEffect,
  useReducer,
  useCallback,
  createContext,
} from "react";

import {
  addItemAction,
  removeItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
} from "src/reducers/cart/actions";

import { OrderInfo } from "src/pages/Cart";
import { cartReducer, Item, Order } from "src/reducers/cart/reducer";

interface CartContextType {
  cart: Item[];
  orders: Order[];
  addItem: (item: Item) => void;
  checkout: (order: OrderInfo) => void;
  removeItem: (itemId: Item["id"]) => void;
  decrementItemQuantity: (itemId: Item["id"]) => void;
  incrementItemQuantity: (itemId: Item["id"]) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({
  children,
}: Readonly<CartContextProviderProps>) {
  const navigate = useNavigate();

  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cart: [], orders: [] },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );

      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON);
      else return cartState;
    }
  );

  const { cart, orders } = cartState;

  const addItem = useCallback((item: Item) => {
    dispatch(addItemAction(item));
  }, []);

  const removeItem = useCallback((itemId: Item["id"]) => {
    dispatch(removeItemAction(itemId));
  }, []);

  const checkout = useCallback(
    (order: OrderInfo) => {
      dispatch(checkoutCartAction(order, navigate));
    },
    [navigate]
  );

  const incrementItemQuantity = useCallback((itemId: Item["id"]) => {
    dispatch(incrementItemQuantityAction(itemId));
  }, []);

  const decrementItemQuantity = useCallback((itemId: Item["id"]) => {
    dispatch(decrementItemQuantityAction(itemId));
  }, []);

  const contextValues = useMemo(
    () => ({
      cart,
      orders,
      addItem,
      checkout,
      removeItem,
      decrementItemQuantity,
      incrementItemQuantity,
    }),
    [
      cart,
      orders,
      addItem,
      checkout,
      removeItem,
      decrementItemQuantity,
      incrementItemQuantity,
    ]
  );

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);
      localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
    }
  }, [cartState]);

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}
