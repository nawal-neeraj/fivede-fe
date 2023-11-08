const initialState = {
  url: "",
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IMAGE_URL":
      return { ...state, url: action.payload };

    default:
      return state;
  }
};

export default imageReducer;
