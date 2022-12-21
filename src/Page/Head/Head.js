import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../Image/Vista.png';
const Head = () => {
    const [navMiniButton, setnavMiniButton] = useState(false);
    const [singleNavOne, setsingleNavOne] = useState(false);
    const [singleNavTwo, setsingleNavTwo] = useState(false);
    const [singleSubOne, setsingleSubOne] = useState(false);
    const [singleSubTwo, setsingleSubTwo] = useState(false);
    const [doubleNavOne, setdoubleNavOne] = useState(false);
    const [doubleNavTwo, setdoubleNavTwo] = useState(false);
    return (
        <>
            <div>
                {/* Header Section  */}
                <header class="header">
                    <div class="container">
                        <div class="header-logo">
                            <Link to="/">
                                <h1><img src={logo} alt="Accountier" /></h1>
                            </Link>
                        </div>
                        <div class="header-menu">
                            <div class="nav-mini-button"
                                onClick={() => setnavMiniButton(!navMiniButton)}
                            >
                                <i class="fa fa-bars"></i>
                            </div>
                            <nav class={`header-navbar ${navMiniButton ? 'header-navbar-show' : 'header-navbar-hide'}`}>
                                <ul class="main-menu">
                                    <li class="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/AboutUsPage">About Us</Link></li>
                                    <li class="sub-nav single-nav-one">
                                        <Link class="nav-js" to="#"
                                            onClick={() => setsingleNavOne(!singleNavOne)}

                                        >Our Products<i
                                            class="nav-sub-icon single-icon-one fa fa-caret-down d-lg-none"
                                        ></i
                                            ></Link>
                                        <ul class={`sub-menu single-sub-one sub-nav-hide ${singleNavOne ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                            <li class="sub-nav double-nav-one">
                                                <Link class="nav-js" to="#"
                                                    onClick={() => setsingleNavTwo(!singleNavTwo)}
                                                >CRM<i
                                                    class="nav-sub-icon double-icon-one fa fa-caret-down d-lg-none"
                                                ></i
                                                    ></Link>
                                                <ul class={`sub-sub-menu double-sub-one sub-nav-hide ${singleNavTwo ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                                    <li><Link to="/ProprietorshipFirm">Functionalities</Link></li>
                                                    <li><Link to="/BenefitsofVistabooksCRMSoftware">Benefits</Link></li>
                                                    <li><Link to="/UseCasesofVistabooksCRMSoftware">Use Cases</Link></li>
                                                </ul>
                                            </li>
                                            <li class="sub-nav double-nav-two">
                                                <Link class="nav-js" to="/HRM"
                                                    onClick={() => setsingleSubOne(!singleSubOne)}
                                                >HRM<i
                                                    class="nav-sub-icon double-icon-two fa fa-caret-down d-lg-none"
                                                ></i
                                                    ></Link>
                                                <ul class={`sub-sub-menu double-sub-two sub-nav-hide ${singleSubOne ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                                    <li><Link to="/HRM">Functionalities</Link></li>
                                                    <li><Link to="/VistabooksHRMSoftwareBenefits">Benefits</Link></li>
                                                    <li><Link to="/VistabooksHRMUseCases">Use Cases</Link></li>
                                                </ul>
                                            </li>
                                            <li class="sub-nav double-nav-three">
                                                <Link class="nav-js" to="#"
                                                    onClick={() => setsingleSubTwo(!singleSubTwo)}
                                                >PAYROLL<i
                                                    class="nav-sub-icon double-icon-three fa fa-caret-down d-lg-none"
                                                ></i
                                                    ></Link>
                                                <ul class={`sub-sub-menu double-sub-three sub-nav-hide ${singleSubTwo ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                                    <li><Link to="/copyrightregistration">Copyright Registration</Link></li>
                                                    <li><Link to="/PatentRegistration">Patent Registration</Link></li>
                                                    <li><Link to="/TrademarkRegistration">Trademark Registration</Link></li>
                                                </ul>
                                            </li>
                                            <li class="sub-nav double-nav-four">
                                                <Link class="nav-js" to="#"
                                                    onClick={() => setdoubleNavOne(!doubleNavOne)}
                                                >ERP<i
                                                    class="nav-sub-icon double-icon-four fa fa-caret-down d-lg-none"
                                                ></i
                                                    ></Link>
                                                <ul class={`sub-sub-menu double-sub-four sub-nav-hide ${doubleNavOne ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                                    <li><Link to="/VistabooksERPFunctionalities">Functionalities</Link></li>
                                                    <li><Link to="/VistabooksERPBenefits"> Benefits</Link></li>
                                                    <li><Link to="/VistabooksERPUseCases">Use Cases</Link></li>
                                                </ul>
                                            </li>
                                            <li class="sub-nav double-nav-five">
                                                <Link class="nav-js" to="#"
                                                    onClick={() => setdoubleNavTwo(!doubleNavTwo)}
                                                >School ERP<i
                                                    class="nav-sub-icon double-icon-five fa fa-caret-down d-lg-none"
                                                ></i
                                                    ></Link>
                                                <ul class={`sub-sub-menu double-sub-five sub-nav-hide ${doubleNavTwo ? 'sub-nav-show' : 'sub-nav-hide'}`}>
                                                    <li><Link to="/SchoolERPFunctionalities">Functionalities</Link></li>
                                                    <li><Link to="/VistabooksSchoolERPBenefits">Benefits</Link></li>
                                                    <li><Link to="/SchoolERPUseCases">Use Cases</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="/OurNews">Blog</Link></li>
                                    <li><Link to="/ContactUs">Contact Us</Link></li>
                                    <li><Link className='g-Started text-white' to="/login">Get Started</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

            </div>
        </>
    );
};

export default Head;