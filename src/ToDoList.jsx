import ToDoListItem from "./ToDoListItem"
import './ToDoList.css'



export default function ToDoList({ todos }) {
  
  const toDoListItems = todos.map((todo, idx) => <ToDoListItem todo={todo} index={idx} key={idx}/>)

    return (
      <ul className='UlPadding'>
        {toDoListItems}
      </ul>
    );
  }
