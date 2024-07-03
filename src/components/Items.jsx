import ToDoItem from "./ToDoItem";
const Items = ({ todoItems }) => {
  return (
    <div className="TodoItem-container">
      {todoItems.map((item) => (
        <ToDoItem
          key={item}
          TodoName={item.name}
          TodoDate={item.dueDate}
        ></ToDoItem>
      ))}
    </div>
  );
};
export default Items;
