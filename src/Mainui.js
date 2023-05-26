import React, { useState } from "react";
import { useEffect } from "react";
import "./Mainui.css";
export default function Mainui() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodo] = useState(null);

  // const handleSubmit = () => {
  //   fetch("http://localhost:3001/api", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   })
  //     .then((r) => r.json())
  //     .then((response) => console.log(response));
  // };
  // useEffect(() => {
  //   var obj = {
  //     Todo: "hello",
  //   };

  // }, []);

  // useEffect(() => {
  //   // fetch todos from localhost at starting.
  //   getLocalTodos();
  // }, []);

  // useEffect(() => {
  //   // Save to Local Storage
  //   saveToLocal();
  // }, [todos]);

  // const saveToLocal = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };

  // // if todos present in localstorage then set into to the todos array hooks
  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let localTodo = JSON.parse(localStorage.getItem("todos"));
  //     setTodo(localTodo);
  //     console.log(todos.length);
  //   }
  // };

  // const clear = () => {
  //   setTodo([]);
  // };

  // const deleteItem = (id) => {
  //   const updateditems = todos.filter((elem, index) => {
  //     return index !== id;
  //   });

  //   setTodo(updateditems);
  // };

  // const setItem = () => {
  //   if (newTodo === "") {
  //     alert("Please enter a Todo.");
  //   } else {
  //     setTodo([...todos, newTodo]);
  //     setNewTodo("");
  //   }
  // };
useEffect(()=>{
    fetch("http://localhost:3001/api/alldata", {})
      .then((response) => {
        return response.json();
      })
      .then(function (data) {
        setTodo(data)
        console.log(todos);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error in the fetch from backend!!!   -->" + error);
      });
  },[]);

  return (
    <>
      <div className="root">
        <h1 className="heading-1">
          {" "}
          ToDo App By &nbsp;{" "}
          <a href="https://github.com/jafar-b" target="blank">
            {" "}
            Jafar{" "}
          </a>
          🛃{" "}
        </h1>
        <div className="main">
          <div className="container">
            <div className="heading">
              <h1>SO WHAT'S THE PLAN TODAY?</h1>
            </div>
            <form method="post" action="http://localhost:3001/api">
              <div className="datainput">
                <input
                  type="text"
                  className="workinput"
                  placeholder="Add Items"
                  value={newTodo}
                  name="Todo"
                  onChange={(event) => {
                    setNewTodo(event.target.value);
                  }}
                /> 

                <button type="submit" className="add">
                  <b>+</b>
                </button>
              </div>
              {/* <ul className="list">
              {todos.map((Itemval, index) => {
                return ( 
                  <li className="items" key={index}>
                    {Itemval}
                    <button 
                      className="cancel"
                      onClick={() => {
                        // deleteItem(index);
                      }} 
                    >
                      X 
                    </button>
                  </li>
                );
              })}
            </ul> */}

              <button className="clear">CLEAR ALL</button>
            </form>
          
          </div>
        </div>
      </div>
    </>
  );
}
