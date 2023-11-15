import './App.css'
import ToDoList from './ToDoList'
import { useState } from "react"

const initialTodos = [
  'Have Fun', 
  'Watch Beserk',
  'Go beserk', 
  'Go to bed'
]

function App() {

  const [todos, setTodos] = useState(initialTodos)
  const [showTodos, setShowTodos] = useState(true)

  return (
    <>
      <h1>React To-Do</h1>
      {showTodos && <ToDoList todos={todos}/>}
    </>
  )

}

export default App
