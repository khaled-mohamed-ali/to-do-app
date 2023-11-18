'use client'
import React, {useState} from 'react';
import axios from "axios";
import getAuth from "@/app/utils/getAuth";


const TodoListItem = (props) => {


    const [completed, setCompleted] = useState(props.completed)

    const saveTask = (e) => {
        axios.put('http://localhost:4000/todos/' + props.id,
            {id: props.id, user_id: props.user_id, task: props.task, completed: !e.target.checked},
            getAuth())
            .then(() => {
                if (props.onChange) {
                    props.onChange()
                }
                setCompleted(!e.target.checked)
            })
    }

    const deleteTask = (e) => {
        axios.delete('http://localhost:4000/todos/' + props.id,
            getAuth())
            .then(() => {
                if (props.onChange) {
                    props.onChange()
                }
            })
    }


    return (
        <>
            <div className="row px-3 align-items-end todo-item rounded">
                <div className="col-auto m-1   d-flex align-items-center align-self-center">
                    <input type="checkbox" checked={completed}
                           style={{width: '25px',height: '25px'}}
                           onChange={(e) => saveTask(e)}
                    />
                </div>
                <div className="col px-1 text-secondary m-1 d-flex align-items-center">
                    <p className="fs-3">
                        {props.task}
                    </p>
                </div>
                <div className="ml-auto col-auto m-1 p-0 todo-actions">
                    <div className="row d-flex align-items-center justify-content-end">
                        <h5 className="m-0 p-0 px-2">
                            <i className="fa fa-trash-o text-danger btn m-0 p-0" title="Delete todo"></i>
                        </h5>
                    </div>
                    <div className="row todo-created-info">
                        <div className="col-auto d-flex align-items-center pr-2">
                            <i className="fa-solid fa-trash  fs-5  my-2 px-2 text-black-50 btn"
                               onClick={() => deleteTask()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
        ;
};

export default TodoListItem;