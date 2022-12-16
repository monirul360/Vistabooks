import React from 'react';
import { Link } from 'react-router-dom';
import vista from './../../../Image/Vista.png';
const Footer = () => {
    return (
        <>
            <footer>
                {/* <div className='fo-content'></div>
                <div className='footer-bg'>

                </div> */}
                <div className='footer-vista'>
                    <img className='img-fluid mb-4' src={vista} alt="" />
                    <p>Farmers and agents can list agricultural</p>
                    <p>items on the Mobile Mandi Technology</p>
                    <p>platform, along with prices and contact</p>
                    <p>information. This listing will make it</p>
                </div>
                <div>
                    <h4>Product</h4>
                    <ul>
                        <li><Link to='/'>Overview</Link></li>
                        <li><Link to='/'>Overview</Link></li>
                        <li><Link to='/'>Pricing</Link></li>
                        <li><Link to='/'>Pricing</Link></li>
                        <li><Link to='/'>Customer stories</Link></li>
                        <li><Link to='/'>Customer stories</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Resources</h4>
                    <ul>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/'>Guides & tutorials</Link></li>
                        <li><Link to='/'>Guides & tutorials</Link></li>
                        <li><Link to='/'>Help center</Link></li>
                        <li><Link to='/'>Help center</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li><Link to='/'>About us</Link></li>
                        <li><Link to='/'>About us</Link></li>
                        <li><Link to='/'>Careers</Link></li>
                        <li><Link to='/'>Careers</Link></li>
                        <li><Link to='/'>Media kit</Link></li>
                        <li><Link to='/'>Media kit</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;