const user = (i) => {
  return {
    type: "user",
    val1: i
  };
};
const email = (i) => {
  return {
    type: "email",
    val2: i
  };
};
export { user, email };
