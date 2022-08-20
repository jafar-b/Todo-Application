import React, { useState } from "react";
import { useEffect } from "react";
import "./Mainui.css";

export default function Mainui() {
  const [inputlist, setinputlist] = useState("");
  const [Itemarray, addItem] = useState([]);

  try {
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(Itemarray));
      console.log("item added to local storage");
    }, [Itemarray]);
  } catch (err) {
    console.log("not saved error: ", err);
  }

  const itemEvent = (event) => {
    setinputlist(event.target.value);
  };

  const clear = () => {
    addItem([]);
  };

  const deleteItem = (id) => {
    const updateditems = Itemarray.filter((elem, index) => {
      return index !== id;
    });

    addItem(updateditems);
  };

  const setItem = (event) => {
    addItem([...Itemarray, inputlist]);
  };

  return (
    <>
      <div className="root">
        <h1 className="heading-1"> WHAT IS UP..? </h1>
        <div className="main">
          <div className="container">
            <div className="heading">
              <h1>SO WHAT'S THE PLAN TODAY?</h1>
            </div>
            <div className="datainput">
              <input
                type="text"
                className="workinput"
                placeholder="Add Items"
                onChange={itemEvent}
              />
              <button type="submit" className="add" onClick={setItem}>
                <b>+</b>
              </button>
            </div>
            <ul className="list">
              {Itemarray.map((Itemval, index) => {
                return (
                  <li className="items" key={index}>
                    {Itemval}
                    <button
                      className="cancel"
                      onClick={() => {
                        deleteItem(index);
                      }}
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>

            <button className="clear" onClick={clear}>
              CLEAR ALL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
