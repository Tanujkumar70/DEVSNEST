import Card from "./Card";
import React from "react";
import { useState } from "react";

const Container = () => {
  const obj = [
    {
      id: 0,
      name: "Rohit Sharma",
      imge: "./images/1.jpg"
    },
    {
      id: 1,
      name: "Yuzvendra Chahal",
      imge: "./images/2.jpg"
    },
    {
      id: 2,
      name: "Virat Kohli",
      imge: "./images/3.jpg"
    },
    {
      id: 3,
      name: "Hardik Pandaya",
      imge: "./images/4.png"
    }
  ];
  const [arr, setArr] = useState(obj);

  var arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    arr1.push(
      <Card
        id={arr[i].id}
        name={arr[i].name}
        img={arr[i].imge}
        ind={i}
        arr={arr}
        setArr={setArr}
      />
    );
  }
  return (
    <div className="container">
      {arr1.length > 0 ? arr1 : <div className="no"></div>}
    </div>
  );
};

export default Container;
