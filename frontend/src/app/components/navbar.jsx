import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <div className="container p-0">
                    <a className="navbar-brand">user name</a>
                    <form className="form-inline">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">logout</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;