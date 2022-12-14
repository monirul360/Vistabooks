import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../Image/Vista.png';
const Nav = () => {
    return (
        <div className='container'>
            <nav>
                <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="nav-items">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About Us</Link></li>
                        <li><Link to='/'>Our Products
                            <ul className='oru-products-menu'>
                                <li><Link to='/'>CRM</Link></li>
                                <li><Link to='/'>HRM</Link></li>
                                <li><Link to='/'>PAYROLL</Link></li>
                                <li><Link to='/'>ERP</Link></li>
                            </ul>
                        </Link>
                        </li>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/'>Contact Us</Link></li>
                        <li><Link className="g-Started" to='/'>Get Started</Link></li>
                    </ul>
                </div>
                <div className="small">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;