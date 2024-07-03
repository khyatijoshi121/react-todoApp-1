import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "../css/App.css";
import Items from "./components/Items";
import { useState } from "react";

function App() {
  const itodoItems = [
    {
      name: "Buy Milk",
      dueDate: "30/05/2024",
    },
    {
      name: "Go to College",
      dueDate: "30/05/2024",
    },
    {
      name: "Watching react video",
      dueDate: "30/05/2024",
    },
    {
      name: "lunch",
      dueDate: "30/05/2024",
    },
  ];

  const [todoItems, setToDoItems] = useState();

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date : ${itemDueDate}`);
  };

  return (
    <center className="todo-container ">
      <AppName onNewItem={handleNewItem}></AppName>
      <AddToDo></AddToDo>
      <Items todoItems={todoItems}></Items>
    </center>
  );
}
export default App;
