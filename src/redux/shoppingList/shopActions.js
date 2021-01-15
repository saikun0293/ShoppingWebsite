import {
  ADD_ITEM,
  DELETE_ITEM,
  INC_QUANTITY,
  DEC_QUANITTY,
  DELETE_ALL,
} from "./shopTypes";

const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

const incQuantity = (item) => {
  return {
    type: INC_QUANTITY,
    payload: item,
  };
};

const decQuantity = (item) => {
  return {
    type: DEC_QUANITTY,
    payload: item,
  };
};

const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};

export { addItem, deleteItem, incQuantity, decQuantity, deleteAll };
