export const setImage = (url) => {
  return {
    type: "SET_IMAGE_URL",
    payload: url,
  };
};

export const setArr = (arr) => {
  return {
    type: "SET_ARR",
    payload: arr,
  };
};
export const remArr = (arr) => {
  return {
    type: "RE_ARR",
    payload: arr,
  };
};
