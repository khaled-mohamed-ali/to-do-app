'use client'
import React from 'react';
import {useRouter} from 'next/navigation'

const Navbar = () => {

    let router = useRouter()

    const logOut = () => {
        localStorage.setItem('user', '');
        router.push('/');
    }

    const userProfile = JSON.parse(localStorage.getItem('user'))

    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <div className="container p-0">
                    <div className="navbar-brand d-flex align-items-center ps-2">
                        <h3 className='d-inline-block pt-1 pe-2'>{userProfile.username}</h3>
                        <img className="" style={{width: '40px', height: '35px',borderRadius:'50%',border:'1px solid grey'}} src={userProfile.avatar} alt=""/>
                    </div>
                    <form className="form-inline">
                        <button
                            className="btn  my-2 my-sm-0" type="button"
                            onClick={() => logOut()}
                        >
                            <i className="fa-solid fa-right-from-bracket"></i>
                            &nbsp;
                            logout
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;