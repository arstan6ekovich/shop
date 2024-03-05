const initalStore = {
  product: [],
  basket: [],
  cash: 0,
};

export const Reducer = (state = initalStore, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, product: action.payload };
    case "ADD_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    default:
      return state;
  }
};
