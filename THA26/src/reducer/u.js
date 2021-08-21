//make diff reducer file
// it is a pure js ()
//it take two para -- state,action
const initial = "";
const u = (state = initial, action) => {
  if (action.type === "user") {
    state = action.val1;
    // console.log(state);
    return state;
  }

  return state;
};
export default u;
