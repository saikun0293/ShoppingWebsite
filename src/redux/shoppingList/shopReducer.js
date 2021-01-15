import {
  ADD_ITEM,
  DELETE_ITEM,
  INC_QUANTITY,
  DEC_QUANITTY,
  DELETE_ALL,
} from "./shopTypes";

const items = {
  items: [],
};

const itemsReducer = (state = items, action) => {
  const item = action.payload;
  const current = [...state.items]; //doing so creates new obj reference whose changes react can detect
  let id, index;

  if (item && item.hasOwnProperty("id")) {
    id = item.id;
    index = state.items.findIndex((x) => x.id === id);
  }

  switch (action.type) {
    case ADD_ITEM:
      current.push(item);
      return {
        items: current,
      };
    case DELETE_ITEM:
      let newItems = current.filter((i) => i.id !== id);
      return {
        items: newItems,
      };
    case INC_QUANTITY:
      current[index].quantity++;
      return {
        items: current,
      };
    case DEC_QUANITTY:
      if (current[index].quantity > 1) current[index].quantity--;
      return {
        items: current,
      };
    case DELETE_ALL:
      return {
        items: [],
      };
    default:
      return state;
  }
};

export default itemsReducer;
