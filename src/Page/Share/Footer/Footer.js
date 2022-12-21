import React from 'react';
import { Link } from 'react-router-dom';
import vista from './../../../Image/Vista.png';
import facebook from './../../../Image/icons/Social/facebook.svg';
import instagram from './../../../Image/icons/Social/instagram.svg';
import linkedin from './../../../Image/icons/Social/linkedin.svg';
import twitter from './../../../Image/icons/Social/twitter.svg';
const Footer = () => {
    return (
        <>
            <footer>
                <div className='fo-content'></div>
                <div className='footer-bg'></div>

                <div className='footer-vista'>
                    <div className="d-flex">
                        <div>
                            <img className='img-fluid mb-4' src={vista} alt="" />
                            <p>Farmers and agents can list agricultural</p>
                            <p>items on the Mobile Mandi Technology</p>
                            <p>platform, along with prices and contact</p>
                            <p>information. This listing will make it</p>
                            <div className="link">
                                <ul>
                                    <li><a className='active' href="jfjjf"><img src={facebook} alt="" /></a></li>
                                    <li> <a href="jfjjf"><img src={instagram} alt="" /></a></li>
                                    <li>                                    <a href="jfjjf"><img src={linkedin} alt="" /></a>
                                    </li>
                                    <li>                                    <a href="jfjjf"><img src={twitter} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Our Products </h4>
                    <ul>
                        <li><Link to='/BenefitsofVistabooksCRMSoftware'>CRM Software</Link></li>
                        <li><Link to='/VistabooksHRMSoftwareBenefits'>HRM Software</Link></li>
                        <li><Link to='/SchoolERPFunctionalities'>ERM Software</Link></li>
                        <li><Link to='/SubscriptionPage'>Pricing</Link></li>
                        <li><Link to='/SchoolERPFunctionalities'>School ERP Software
                        </Link></li>
                        <li><Link to='/'>Customer stories
                        </Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Our Blogs</h4>
                    <ul>
                        <li className='py-3'>
                            <p>Benefits of ERP Solutions for</p>
                            <p>Small & Medium Enterprises.</p>
                        </li>
                        <li>
                            <p>Why should you use CRM in</p>
                            <p>your Service Company?</p>
                        </li>
                        <li className='py-3'>
                            <p>Importance of HRM Software</p>
                        </li>
                        <br /><br />
                    </ul>
                </div>
                <div>
                    <h4>Vistabooks </h4>
                    <ul>
                        <li><Link to='/AboutUsPage'>About us</Link></li>
                        <li><Link to='/ContactUs'>Contact Us</Link></li>
                        <br /><br /><br /><br /><br /><br />
                    </ul>
                </div>
            </footer>
            <div className="copy-right">
                <p className='text-center'><span>©Vistabook</span> 2022. All Rights Reserved</p>
            </div>
        </>
    );
};

export default Footer;