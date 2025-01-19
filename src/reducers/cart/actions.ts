import { NavigateFunction } from "react-router-dom";

import { Item } from "./reducer";
import { TOrderInfo } from "src/pages/Cart/formValidators";

export enum ActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CHECKOUT_CART = "CHECKOUT_CART",
  INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY",
  DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
}

export type Actions =
  | {
      payload: { item: Item };
      type: ActionTypes.ADD_ITEM;
    }
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM;
      payload: { itemId: Item["id"] };
    }
  | {
      type: ActionTypes.CHECKOUT_CART;
      payload: {
        order: TOrderInfo;
        callback: NavigateFunction;
      };
    };

export function addItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: { item },
  } satisfies Actions;
}

export function removeItemAction(itemId: Item["id"]) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: { itemId },
  } satisfies Actions;
}

export function incrementItemQuantityAction(itemId: Item["id"]) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: { itemId },
  } satisfies Actions;
}

export function decrementItemQuantityAction(itemId: Item["id"]) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: { itemId },
  } satisfies Actions;
}

export function checkoutCartAction(
  order: TOrderInfo,
  callback: NavigateFunction
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: { order, callback },
  } satisfies Actions;
}
