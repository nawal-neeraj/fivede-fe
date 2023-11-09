const initialState = {
  progress: 5,
};

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROGRESS":
      return { ...state, progress: action.payload };

    default:
      return state;
  }
};

export default progressReducer;
