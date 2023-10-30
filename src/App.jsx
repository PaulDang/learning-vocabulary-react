import "bootstrap/dist/css/bootstrap.min.css"
import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddTodo />}></Route>
      <Route path="/add" element={<AddTodo />}></Route>
      <Route path="/list" element={<TodoList />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
