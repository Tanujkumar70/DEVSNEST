const initial = "";
const e = (state = initial, action) => {
  if (action.type === "email") {
    state = action.val2;
    // console.log(state);
    return state;
  }

  return state;
};
export default e;
