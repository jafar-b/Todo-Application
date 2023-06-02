import React, { useState } from "react";
import { useEffect } from "react";
import "./Mainui.css";
export default function Mainui() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodo] = useState([]);

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
  // const fetchdata=fetch("http://localhost:3001/", {method:"POST", mode: "cors", credentials: "same-origin",  headers: {
  //   "Content-Type": "application/json",
  //   // 'Content-Type': 'application/x-www-form-urlencoded',
  // }})
  // .then((response) => {
  //   return response.json();
  // })
  // .then(function (data) {
  //   setTodo(data)
  //   console.log(todos);
  //   console.log("hellobrother");
  //   console.log(data.map(item => item.Todo));
  // })
  // .catch((error) => {
  //   console.log("Error in the fetch from backend!!!   -->" + error);
  // });

  const deleteAll = () => {
    try {
      fetch("http://localhost:3001/deleteAll", { method: "DELETE" }).catch(
        (e) => {
          console.log(e);
        }
      );
    } catch (e) {
      console.log(e);
      alert("Error Deleting Todos please check your connection");
    }

    alert("Deleted All Todos");
    window.location.reload(true);
  };

  const deleteItem = (id) => {
    fetch(`http://localhost:3001/${id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          console.log("Item deleted successfully");
          // Perform any additional actions or UI updates as needed
        } else {
          console.log("Error deleting item");
        }
      })
      .catch((error) => {
        console.error("Error deleting item", error);
      });
    const updatedTodos = todos.filter((todo) => todo._id !== id);
    setTodo(updatedTodos);
  };

  useEffect(() => {
    const endpoint = "http://localhost:3001/getalltodos";
    fetch(endpoint, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the retrieved data
        setTodo(data);
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  }, []);

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
            <form
              method="post"
              action="http://localhost:3001/api"
              onSubmit={(event) => {
                event.preventDefault();
                fetch("http://localhost:3001/api", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ Todo: newTodo }),
                })
                  .then((response) => {
                    if (response.ok) {
                      console.log("Item added successfully");
                      // Perform any additional actions or UI updates as needed
                    } else {
                      console.log("Error adding item");
                    }
                  })
                  .catch((error) => {
                    console.error("Error adding item", error);
                  });

                // Reset the input field
                setNewTodo("");
              }}
            >
              <div className="datainput">
                <input
                  type="text"
                  className="workinput"
                  placeholder="Add Items"
                  value={newTodo}
                  name="Todo"
                  required
                  onChange={(event) => {
                    setNewTodo(event.target.value);
                  }}
                />

                <button
                  type="submit"
                  className="add"
                  onClick={(e) => { 
                    const updatedTodos = todos.concat(e.target.value);
                    if(newTodo===""){
                      alert("Please enter a Todo!")
                    }
                    window.location.reload(true);
                    console.log(updatedTodos);
                  }}
                >

                  <b>+</b>
                </button>
              </div>
            </form>
            <ul className="list">
              {todos.map((value, index) => {
                return (
                  <li className="items" key={index}>
                    {value.Todo}
                    <button
                      className="cancel"
                      key={index}
                      onClick={() => deleteItem(value._id)}
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>

            <button className="clear" onClick={deleteAll}>
              CLEAR ALL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
