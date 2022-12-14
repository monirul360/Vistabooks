import React from 'react';
import { Link } from 'react-router-dom';
import hero from './../../Image/images/hero.png';
import heroicon from './../../Image/icons/3.png';
import crm from './../../Image/icons/CRM icon.svg';
import platform from './../../Image/images/Features.png';
import platform_checkbox from './../../Image/icons/checkbox-1.svg';
import checkbox from './../../Image/icons/checkbox-1.svg';
import whtecheckbox from './../../Image/icons/checkbox-2.svg';
const Home = () => {
    return (
        <>
            <section className='hero-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="hero-text">
                                <p className='tittle'>Best CRM, ERP & HRM</p>
                                <h1>Automate your Complete
                                    Enterprise Systems with
                                    Vistabooks</h1>
                                <p>Vistabooks has highly automated CRM, ERP & HRM Software’s which can completely automate your process by reducing the manual efforts and improved reminders facility. </p>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <Link id='know-more' to='/'>Know More</Link>
                                    </div>
                                    <div>
                                        <Link to='/'> <img className='me-2' src={heroicon} alt="" /> How It Work</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-5">
                            <div>
                                <img className='img-fluid' src={hero} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='feature-section py-5'>
                <div className="feature-content">
                    {/* items -1 start*/}
                    <div className="items">
                        <div>
                            <p className='lead'>Feature 01</p>
                            <img src={crm} alt="" />
                            <h3>CRM Software</h3>
                            <p>Track and Manage your Customer’s
                                data with our CRM Software. Manage
                                your Customer Queries and Follow
                                ups with CRM Software. </p>
                        </div>
                    </div>
                    {/* items -1 end*/}
                    {/* items -2 start*/}
                    <div className="items">
                        <div>
                            <p className='lead text-end'>Feature 01</p>
                            <img src={crm} alt="" />
                            <h3>CRM Software</h3>
                            <p>Track and Manage your Customer’s
                                data with our CRM Software. Manage
                                your Customer Queries and Follow
                                ups with CRM Software. </p>
                        </div>
                    </div>
                    {/* items -2 end*/}
                    {/* items -1 start*/}
                    <div className="items">
                        <div>
                            <p className='lead'>Feature 01</p>
                            <img src={crm} alt="" />
                            <h3>CRM Software</h3>
                            <p>Track and Manage your Customer’s
                                data with our CRM Software. Manage
                                your Customer Queries and Follow
                                ups with CRM Software. </p>
                        </div>
                    </div>
                    {/* items -1 end*/}
                </div>
            </section>
            <section className='automation-platform'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="text">
                                <span>All in One Automation Platform</span>
                                <p>Vistabooks is your one stop solution for your complete CRM, HRM & ERP Platform
                                    which can manage your Inventories of your day-to-day operations to the Payroll
                                    management Software and the Customer Relationship Management
                                    Software and more. </p>
                                <div className="d-flex py-4">
                                    <div className='me-5'>
                                        <p><img className='me-2' src={platform_checkbox} alt="" />CRM Solutions</p>
                                    </div>
                                    <div>
                                        <p><img className='me-2' src={platform_checkbox} alt="" />CRM Solutions</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className='me-5'>
                                        <p><img className='me-2' src={platform_checkbox} alt="" />HRM Solutions </p>
                                    </div>
                                    <div>
                                        <p><img className='me-2' src={platform_checkbox} alt="" />School ERP Solutions </p>
                                    </div>
                                </div>
                                <Link className='Categories' to='/'>All Categories</Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <img className='img-fluid' src={platform} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className='count py-5'>
                <div className="container">
                    <div className="row ms-auto">
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className='items'>
                                <h1>96<span>%</span></h1>
                                <p>Customer satisfaction</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className='items'>
                                <h1>2500<span>+</span></h1>
                                <p>Active Customers</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className='items'>
                                <h1>50<span>+</span></h1>
                                <p>Team members</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className='items'>
                                <h1>98<span>%</span></h1>
                                <p>Customer Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='manage-your-customers'>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-4">
                            <img className='img-fluid' src={hero} alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="text">
                                <span>Manage your Customers Follow ups</span>
                                <h2>Follow up with your customers
                                    with Vistabooks CRM Software.</h2>
                                <p>Vistabooks CRM Software help you to get connected with your customers with
                                    automated communication processes such as Mail, SMS and more. Improve
                                    your customer satisfaction with Powerful Vistabooks CRM Software’s
                                    Analytics Data.</p>
                                <div className="d-flex py-4">
                                    <div className='pe-5'>
                                        <p><img className='pe-2' src={platform_checkbox} alt="" />CRM Solutions</p>
                                    </div>
                                    <div>
                                        <p><img className='pe-2' src={platform_checkbox} alt="" />CRM Solutions</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className='pe-5'>
                                        <p><img className='pe-2' src={platform_checkbox} alt="" />CRM Solutions</p>
                                    </div>
                                    <div>
                                        <p><img className='pe-2' src={platform_checkbox} alt="" />CRM Solutions</p>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <Link className='g-Started' to='/'>All Categories</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='how-it-work py-5'>
                <div className="container">
                    <p className='text-center'>Features</p>
                    <h2 className='text-center'>How It Work</h2>
                    <div className="img">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </section>
            <section className='why-choose-us'>
                <div className='text-center text'>
                    <span>Choose</span>
                    <h4>Why Choose Us</h4>
                </div>
                <div className='choose-flex'>
                    {/* items -1 start*/}
                    <div className="items">
                        <div>
                            <p className='lead'>Feature 01</p>
                            <img src={crm} alt="" />
                            <h3>CRM Software</h3>
                            <p>Track and Manage your Customer’s
                                data with our CRM Software. Manage
                                your Customer Queries and Follow
                                ups with CRM Software. </p>
                        </div>
                    </div>
                    {/* items -1 end*/}
                    {/* items -2 start*/}
                    <div className="items">
                        <div>
                            <p className='lead'>Feature 01</p>
                            <img src={crm} alt="" />
                            <h3>CRM Software</h3>
                            <p>Track and Manage your Customer’s
                                data with our CRM Software. Manage
                                your Customer Queries and Follow
                                ups with CRM Software. </p>
                        </div>
                    </div>
                    {/* items -2 end*/}
                    {/* items -3 start*/}
                    <div className="items">
                        <div>
                            <p className='lead'>Feature 01</p>
                            <img src={crm} alt="" />
                            <h3>CRM Software</h3>
                            <p>Track and Manage your Customer’s
                                data with our CRM Software. Manage
                                your Customer Queries and Follow
                                ups with CRM Software. </p>
                        </div>
                    </div>
                    {/* items -3 end*/}
                    {/* items -4 start*/}
                    <div className="items">
                        <div>
                            <p className='lead'>Feature 01</p>
                            <img src={crm} alt="" />
                            <h3>CRM Software</h3>
                            <p>Track and Manage your Customer’s
                                data with our CRM Software. Manage
                                your Customer Queries and Follow
                                ups with CRM Software. </p>
                        </div>
                    </div>
                    {/* items -4 end*/}
                    {/* items -5 start*/}
                    <div className="items">
                        <div>
                            <p className='lead'>Feature 01</p>
                            <img src={crm} alt="" />
                            <h3>CRM Software</h3>
                            <p>Track and Manage your Customer’s
                                data with our CRM Software. Manage
                                your Customer Queries and Follow
                                ups with CRM Software. </p>
                        </div>
                    </div>
                    {/* items -5 end*/}
                    {/* items -6 start*/}
                    <div className="items">
                        <div>
                            <p className='lead'>Feature 01</p>
                            <img src={crm} alt="" />
                            <h3>CRM Software</h3>
                            <p>Track and Manage your Customer’s
                                data with our CRM Software. Manage
                                your Customer Queries and Follow
                                ups with CRM Software. </p>
                        </div>
                    </div>
                    {/* items -6 end*/}
                </div>
            </section>
            <section className='py-5 subscription-page'>
                {/* Single-User start */}
                <div className="package">
                    <div className='text-center py-4'>
                        <p>Price</p>
                        <h1>Pricing Plans</h1>
                    </div>
                </div>
                <div className="single-user">
                    <button>CRM</button>
                    <h1><sub>$</sub>Rs.499.00</h1>
                    <ul>
                        <li>
                            <img src={checkbox} alt="" />
                            Visual Data Showcase </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Emails & Newsletter </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Contact Management </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Lead Management</li>
                        <li>
                            <img src={checkbox} alt="" />
                            Report & Dashboard </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Sales Analytics
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Mobile CRM
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Sales Force Automation
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Sales Forecasting
                        </li>
                    </ul>
                    <Link id='subscribe' to='/'>Order Now</Link>
                </div>
                {/* Single-User end */}
                <div className='team-pro'>
                    <div className="team-pro-info">
                        <button>HRM</button>
                        <h1><sub>$</sub>Rs.499.00</h1>
                        <ul>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                Recruitment & Hiring
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                Employee Portal
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                Workflows
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                Payroll
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                Time Tracking
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                Leave Entitlement
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                Employee Training
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                Employee Benefits
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                Talent Retention
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                Analytics & Data Management
                            </li>
                        </ul>
                        <Link id='team-pro-Subscribe' to='/'>Order Now</Link>
                    </div>
                </div>
                <div className='enterprice'>
                    <button>School ERP </button>
                    <h1><sub>$</sub>Rs.625.00</h1>
                    <ul>
                        <li>
                            <img src={checkbox} alt="" />
                            Admission Process
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Student Information
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            School/Event Calendar
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            BiometricAttendance
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Report Centre
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Parents Communication
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Maintaining Examination
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Communication
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Staff Management
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            Library Management
                        </li>
                    </ul>
                    <Link id='subscribe' to='/'>Order Now</Link>
                </div>
            </section>
            <section className='asked-questions '>
                <div className="container">
                    <div className='text-center'>
                        <p>FAQ</p>
                        <h2>Frequently Asked Questions </h2>
                        <div className="row">
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;