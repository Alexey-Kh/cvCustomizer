export const saveToLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const retrieveFromLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }
  return null;
};
