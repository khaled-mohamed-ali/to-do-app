'use client'
import React, {useState} from 'react';
import {Row, Col, Button} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import {redirect} from "next/navigation";

const LoginInputs = (props) => {
    const [userInfo, setUserInfo] = useState({username:'',password:''})
    const [showError, setShowError] = useState(false)

    const login = () => {
        fetch("http://localhost:4000/todos", {
            headers: {'Authorization': 'Basic ' + btoa(`${userInfo.username}:${userInfo.password}`)},
        }).then(response => {
            if (!response.ok) {
                setShowError(true)
            } else {
                setShowError(false);

                //1-  save username and password in local storage {}
                //2- redirct to todo dashboard
                //3-
            }
            return response.json();

        })
        redirect('/todos')
    }


    return (
        <>
            <div className="text-danger">{showError?'invalid password':''}</div>
            <Dropdown>
                <Dropdown.Toggle className=" text-dark text-sm-start w-100 " variant="outline-light"
                                 id="dropdown-basic"
                >
                    {userInfo.username || 'select user'}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                    {props.users.map((user, index) => {
                        return (
                            <Dropdown.Item key={' ' + index}
                                           onClick={() => setUserInfo({...userInfo, username: user.username})}>
                                <Row className="justify-content-between">
                                    <Col className="col-9 ps-3">
                                        {user.name}
                                    </Col>
                                    <Col className="col-2">
                                        <img style={{width: '40px', height: '35px'}} src={user.avatar} alt=""/>
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control className="fo" type="password" placeholder="Password "
                          onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}/>
            <Button disabled={userInfo.password?.length  <= 0 ? true:false} onClick={() => login()} variant="dark">login</Button>
        </>

    );
};

export default LoginInputs;