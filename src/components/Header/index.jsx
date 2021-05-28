import React from 'react';
import { Link } from 'react-router-dom';

Header.propTypes = {

};

function Header(props) {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">React-Web-Team</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/categories">Categories</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;