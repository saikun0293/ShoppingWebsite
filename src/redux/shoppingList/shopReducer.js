import { ADD_ITEM, DELETE_ITEM, INC_QUANTITY, DEC_QUANITTY } from "./shopTypes";

const items = {
  items: [],
};

const itemsReducer = (state = items, action) => {
  const item = action.payload;
  const id = item.id;
  const index = state.items.findIndex((x) => x.id === id);
  switch (action.type) {
    case ADD_ITEM:
      state.items.append(item);
      return {
        items: state.items,
      };
    case DELETE_ITEM:
      const newItems = state.items.filter((i) => i.id !== id);
      return {
        items: newItems,
      };
    case INC_QUANTITY:
      state.items[index].quantity++;
      break;
    case DEC_QUANITTY:
      state.items[index].quantity--;
      break;
    default:
      return state;
  }
};

export default itemsReducer;
