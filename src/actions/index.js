// action createrを定義

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});
