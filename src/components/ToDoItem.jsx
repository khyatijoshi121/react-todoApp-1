import styles from "./AppName.module.css";
import { MdDelete } from "react-icons/md";
function ToDoItem({ TodoName, TodoDate }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 styles">{TodoName}</div>
        <div className="col-4 styles">{TodoDate}</div>
        <div className="col-2 styles">
          <button type="button" className="btn btn-danger styles">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
