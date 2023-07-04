import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';

const check = <FontAwesomeIcon icon={faCheck} />;
const deleteItem = <FontAwesomeIcon icon={faTrash} />;

function TodoItem(props) {
    return (
      <div className="item-container">
        <button 
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onClick={props.onComplete}
          >
            {check}
          </button>
        <li className="list-item">
          <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        </li>
        <button 
          className={`Icon Icon-delete`}
          onClick={props.onDelete}
          >
            {deleteItem}
          </button>
      </div>
    );
}

export { TodoItem };