'use client'
import React, {useState} from 'react';
import axios from "axios";
import getAuth from "@/app/utils/getAuth";


const TodoListItem = (props) => {

    // 1 id
    // 2 user_id
    // 3 completed
    // 4 task
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


    return (
        <>
            <div className="row px-3 align-items-center todo-item rounded">
                <div className="col-auto m-1 p-0 d-flex align-items-center">
                    <input  type="checkbox" checked={completed}
                    onChange={(e) => saveTask(e)}

                    />
                </div>
                <div className="col px-1 m-1 d-flex align-items-center">
                   <p>
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
                            <i className="fa fa-info-circle my-2 px-2 text-black-50 btn"
                               data-toggle="tooltip" data-placement="bottom" title=""
                               data-original-title="Created date"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
        ;
};

export default TodoListItem;