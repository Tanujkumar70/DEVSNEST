const Temp = ({ temp, setMeme }) => {
  return (
    <div className="temps">
      {temp.map((i) => {
        return (
          <div
            key={i.id}
            className="temp"
            onClick={() => {
              setMeme(i);
            }}
          >
            <div
              style={{ backgroundImage: `url(${i.url})` }}
              className="image"
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Temp;
