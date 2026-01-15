// title: 实现一个react 的useState
const useState = (defaultValue) => {
  const value = useRef(defaultValue);
  const setValue = (newValue) => {
    if (typeof newValue === "function") {
      value.current = newValue(value.current);
    } else {
      value.current = value;
    }
  };
  dispatchAction();
  return [value, setValue];
};
