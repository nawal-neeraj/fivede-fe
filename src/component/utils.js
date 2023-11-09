export const cacheValue = (name, val) => {
  localStorage.setItem(name, JSON.stringify(val));
};

export const getValue = (name) => {
  const res = localStorage.getItem(name);
  return res;
};

export const clearValue = (name) => {
  localStorage.clear(name);
};
