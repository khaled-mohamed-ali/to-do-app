import React from 'react';
import Form from 'react-bootstrap/Form';
import {Col, Container, Row} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import dynamic from "next/dynamic";


const LoginForm = dynamic(() => import('./loginForm'), {ssr: false})


const Login = async () => {

    const getUsers = async () => {
        const users = await fetch("http://localhost:4000/users");
        const res = await users.json();
        return res
    }

    const users = await getUsers();

    return (
        <Container className='h-100'>
            <Row className="justify-content-center ">
                <Col
                    className="z-1 bg-white col-sm-7 col-lg-6 col-xs-10  mb-5  rounded-4 shadow"
                    // style={{height: "400px", border: ".1px solid #D8DCDD"}}
                >
                    <LoginForm users={users || []}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;