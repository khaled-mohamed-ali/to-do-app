'use client'
import React, {useEffect, useState} from 'react';
import TodoListItem from "@/app/components/todoListItem";
import axios from "axios";
import getAuth from "@/app/utils/getAuth";


const Todos = () => {

    const [todos, setTodos] = useState([])
    const [newTodo,setNewTodo] = useState('')



    const loadTodos = () => {
        // const userInfo = JSON.parse(localStorage.getItem('user'))
        axios.get('http://localhost:4000/todos',getAuth()).then(res => {setTodos(res.data)})
    }

    const createTodos = () => {
        axios.post('http://localhost:4000/todos', {task: newTodo},getAuth()).then(loadTodos);
        setNewTodo('')
    }


    useEffect( () => {
       loadTodos()
    }, [])



    return (
        <div className="container m-5 p-2 rounded mx-auto bg-light shadow">


            <div className="row m-1 p-3">
                <div className="col col-11 mx-auto">
                    <div
                        className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                        <div className="col">
                            <input
                                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                                type="text" placeholder="Add new .."
                                value={newTodo}
                                onChange={(e)=> setNewTodo(e.target.value)}
                            />
                        </div>
                        <div className="col-auto px-0 mx-0 mr-2">
                            <button onClick={createTodos} type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2 mx-4 border-black-25 border-bottom"></div>



            <div className="row m-1 p-4">
                <div className="col">
                    <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
                        <i className="fa fa-check bg-primary text-white rounded p-2"></i>
                        <u>My Todo-s</u>
                    </div>
                </div>
            </div>
            {todos.map((todo, index) => {
                return (
                    <div key={''+index}>
                        <TodoListItem onChange={loadTodos} {...todo}/>
                        {index < todos.length - 1 ? <div className="p-2 mx-4 border-black-25 border-bottom"/>
                            : ''}

                    </div>
                )
            })}
        </div>

    );
};

export default Todos;