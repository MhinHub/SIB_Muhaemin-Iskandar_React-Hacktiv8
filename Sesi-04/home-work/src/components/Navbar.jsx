// Membuat navbar JSX
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark sticky-top" style={{ height: 80 }}>
            <div className="container-fluid justify-content-start">
                <a className="navbar-brand mx-3" href="#">Qtemu</a>

                <ul className="nav ps-5">
                    <li className="nav-item d-flex justify-content">
                        <a className="nav-link" aria-current="page" href="#">Create Meetup</a>
                        <a className="nav-link" href="#">Explore</a>
                        <a className="nav-link" style={{ color: "white" }} href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;