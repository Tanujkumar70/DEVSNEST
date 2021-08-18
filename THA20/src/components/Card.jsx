const Card = (props) => {
  const del = () => {
    const arr2 = props.arr.filter((e, i) => i != props.ind);
    console.log(arr2);
    props.setArr(arr2);
  };

  return (
    <div className="card">
      <img className="img" src={props.img} alt="" />
      <h1>{props.name}</h1>
      <button onClick={del}>
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
  );
};
export default Card;
