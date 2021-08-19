import React, { useState } from "react";
import "./App.css";
import CalorieCard from "./CalorieCard";
import Calories from "./CalorieInfo";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {
  const [items, setItems] = useState(Calories);
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState("");

  const EditCard = (index, title, cal) => {
    setItems((e) => {
      return e.map((card, i) => {
        if (i === index) return { title, cal };
        return card;
      });
    });
  };

  function Card(item, index) {
    return (
      <CalorieCard
        key={item.id}
        title={item.title}
        cal={item.cal}
        items={items}
        setItems={setItems}
        index={index}
        EditCard={EditCard}
      />
    );
  }

  return (
    <div className="App">
      <div className="text-fields">
        <TextField
          style={{ marginLeft: 25 }}
          id="outlined-basic"
          label="Add Item"
          size="small"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <TextField
          style={{ marginLeft: 25 }}
          id="outlined-basic"
          label="Add Calorie"
          size="small"
          variant="outlined"
          onChange={(e) => setCalorie(e.target.value)}
          value={calorie}
        />
        <Button
          style={{ marginLeft: 20, fontSize: 17 }}
          variant="contained"
          color="primary"
          onClick={() => {
            const arr = [{ title: title, cal: calorie }, ...items];
            setItems(arr);
            setTitle("");
            setCalorie("");
          }}
        >
          {" "}
          Add
        </Button>
      </div>

      <div className="Container">
        {items.length > 0 ? (
          items.map(Card)
        ) : (
          <h1 style={{ textAlign: "center" }}>NO DATA FOUND</h1>
        )}
      </div>
    </div>
  );
}

export default App;
