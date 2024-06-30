import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, getTodoListFromWeb, getTodoListFromWebCustom, removeTodo, setTodoCompleted } from '../store/todoSlice';
import "./Todo.scss";

function Todo() {
    const [inputText, setInputText] = useState("")
    const [descText, setDescText] = useState("");
    const dispatch = useDispatch<any>();

    const {todos, pending} = useSelector((state: any) => state.todo);

    useEffect(() => {
        dispatch(getTodoListFromWebCustom())
    }, [])

    const handleMarkCompleted = (id: string) => {
        dispatch(setTodoCompleted({id}));
    }

    const handleInputTextChange = (e: any) => {
        setInputText(e.target.value);
    }

    const handleDescTextChange = (e: any) => {
        setDescText(e.target.value);
    }

    const handleRemove = (id: string) => {
        dispatch(removeTodo({id}));
    }

    const handleAddTodo = (e: any) => {
        e.preventDefault();
        dispatch(addTodo({
            id: Date.now().toString(),
            title: inputText,
            desc: descText,
            createdTime: Date.now().toString(),
            completed: false,
            completedTime: ''
        }))
        setInputText('')
        setDescText('')
    }

  return (
    <div className='todo-container'>
        <form className='todo-form' onSubmit={handleAddTodo}>
            <label htmlFor="title">Title</label>
            <input id='title' type="text" value={inputText} onChange={handleInputTextChange}/>
            <label htmlFor="desc">Description</label>
            <input id="desc" type="text" value={descText} onChange={handleDescTextChange}/>
            <button onClick={handleAddTodo}>Add</button>
        </form>
        <div className='todo-list-title'>To do items</div>
        {pending && <div>Loading...</div>}
        <div className='todo-list'>{todos.map((todo: any) => (
            <div className='todo-item' key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.desc}</p>
                <p>Completed: {todo.completed ? "Yes" : "No"}</p>
                <div>
                    <button onClick={() => handleMarkCompleted(todo.id)}>Mark completed</button>
                    <button onClick={() => handleRemove(todo.id)}>Remove</button>
                </div>
            </div>
        ))}</div>

    </div>
  )
}

export default Todo