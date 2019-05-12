import React from 'react';

const NavBar = (props) => (
    <nav>
        <h2 className="logo"><a class="logo-link" href="#">{props.title}</a></h2>
        <ul class="nav-menu">
            <li><a class="nav-menu__link" href="#">Home</a></li>
            <li><a class="nav-menu__link" href="#">Best Actor</a></li>
            <li><a class="nav-menu__link" href="#">Best Actress</a></li>
            <li><a class="nav-menu__link" href="#">Best Films</a></li>
        </ul>
    </nav>
);

export default Navbar;