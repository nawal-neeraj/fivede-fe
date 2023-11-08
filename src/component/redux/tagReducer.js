const initialValues = {
  arr: [],
};

export default (state = initialValues, action) => {
  switch (action.type) {
    case "SET_ARR":
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    case "RE_ARR":
      return {
        ...state,
        arr: action.payload,
      };

    default:
      return state;
  }
};
