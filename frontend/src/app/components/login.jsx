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
            <Row className="justify-content-center" >
                <Col className="col-sm-8 col-lg-6 col-xs-10 d-flex flex-column mb-5 justify-content-around rounded-4" style={{height:"300px",border:"1px solid #c5c2c2"}}>
                    <LoginForm users={users || []}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;