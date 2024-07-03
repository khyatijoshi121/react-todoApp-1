import { BiMessageAdd } from "react-icons/bi";
function AddToDo({ onNewItem }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 style">
          <input type="text" placeholder="Enter ToDo here"></input>
        </div>
        <div className="col-4 style">
          <input type="date"></input>
        </div>
        <div className="col-2 style">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => onNewItem("a", "b")}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
