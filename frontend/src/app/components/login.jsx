import React from 'react';
import Form from 'react-bootstrap/Form';
import {Col, Container, Row} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import {dividerClasses} from "@mui/material";
import dynamic from "next/dynamic";


const LoginForm = dynamic(() => import('./loginForm'), {ssr: false})


const Login = async () => {

    const getUsers = async () => {
        const users = await fetch("http://localhost:4000/users");
        const res = await users.json();
        return res
    }

    const users = await getUsers();
    console.log(users,'users')

    return (
        <Container>
            <Row className="justify-content-center" >
                <Col className="col-sm-4 d-flex flex-column justify-content-around rounded-4" style={{height:"300px",border:"1px solid gray"}}>
                    <LoginForm users={users || []}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;