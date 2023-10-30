import { useState } from "react";
import { addNew } from "../actions/todoActions";
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from "./assests/SearchBar";
// eslint-disable-next-line react/prop-types
const AddTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const { title, description } = formData;
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addNew(formData));
    console.log(todos)
    setFormData({
      title: '',
      description: '',
    });
  }

  const handleChanges = e =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <SearchBar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input 
          value={title}
          onChange={handleChanges}
          className="row" 
          placeholder="Title..." 
          type="text" name="title" 
          id="tile" />
          <input 
          value={description}
          onChange={handleChanges}
          className="row" placeholder="Description..." type="text" name="description" id="description" />
          <button className="btn btn-primary text-white">Submit</button>
        </form>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AddTodo;