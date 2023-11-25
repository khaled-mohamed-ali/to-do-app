'use client'
import React, {useState} from 'react';
import {Row, Col, Button} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import {useRouter} from "next/navigation";
import styles from '../style/loginForm.module.css'
import getAuth from "@/app/utils/getAuth";

const LoginForm = (props) => {
    const [userInfo, setUserInfo] = useState({username: '', password: ''})
    const [showError, setShowError] = useState(false)
    const [userProf, setUserProf] = useState()
    const router = useRouter()

    const login = () => {
        fetch("http://localhost:4000/todos", {
            headers: {'Authorization': 'Basic ' + btoa(`${userInfo.username}:${userInfo.password}`)},
        }).then(response => {
            if (!response.ok) {
                setShowError(true);
                throw new Error('invalid')
            } else {
                setShowError(false);

            }
            return response.json();

        }).then(() => {
            const user = props.users.find((u) => u.username == userInfo.username);
            localStorage.setItem('user', JSON.stringify({...user, password: userInfo.password}));
            router.push('/todos')
        })
    }

    return (
        <div className='d-flex flex-column  gap-5 h-100'>
            <div className="text-danger mt-3">
                <h2 className="text-center text-secondary">
                    Task master
                </h2>
                {showError ? 'invalid password or user name' : ''}
            </div>
            <Dropdown className="dro fo form-control p-0">
                <Dropdown.Toggle id={`dropdown-basic`} className="text-dark text-sm-start w-100 "
                                 variant="outline-light"
                >
                    {userInfo.username || 'select user'}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                    {props.users.map((user, index) => {
                        return (
                            <Dropdown.Item key={' ' + index}
                                           onClick={(e) => {
                                               setUserInfo({...userInfo, username: user.username, avatar: user.avatar});
                                           }
                                           }>
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
                          onChange={(e) => {
                              setUserInfo({...userInfo, password: e.target.value})
                          }}/>
            <Button
                className="mb-3"
                disabled={userInfo.password?.length <= 0 ? true : false}
                onClick={() => login()}
                variant="dark"
            >
                login
            </Button>
        </div>

    );
};

export default LoginForm;