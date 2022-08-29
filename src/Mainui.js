
import React, { useState } from "react";
import { useEffect } from "react";
import "./Mainui.css";
export default function Mainui() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodo] = useState([]);


  useEffect(() => {

    // fetch todos from localhost at starting.
    getLocalTodos();
  
  }, []);


  useEffect(() => {

    // Save to Local Storage
    saveToLocal();


  }, [todos]);


  const saveToLocal = () => {

    localStorage.setItem("todos", JSON.stringify(todos))
  }

  // if todos present in localstorage then set into to the todos array hooks
  const getLocalTodos = () => {

    if (localStorage.getItem("todos") === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      let localTodo = JSON.parse(localStorage.getItem("todos"))
      setTodo(localTodo);
      console.log(todos.length)
    }

  }


  const itemEvent = (event) => {
    event.preventDefault()
   
     setNewTodo(event.target.value);
  };
  
  const clear = () => {
    setTodo([]);
  };

  const deleteItem = (id) => {
    const updateditems = todos.filter((elem, index) => {
      return index !== id;
    });

    setTodo(updateditems);
  };

  const setItem = () => {
    if(newTodo === ""){
       alert("Please enter a Todo.")
    }else{
      setTodo([...todos, newTodo]);
      setNewTodo("");
    }
  };


  return (
    <>
      <div className="root">
        <h1 className="heading-1"> ToDo App By &nbsp;  <a  href="https://github.com/jafar-b" target="blank"> Jafar </a>🛃 </h1>
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
                value={newTodo}
                onChange={itemEvent}
              />

              <button type="submit" className="add" onClick={setItem}>
                <b>+</b>
              </button>
            </div>
            <ul className="list">

              {
                todos.map((Itemval, index) => {
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
                })
              }
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
