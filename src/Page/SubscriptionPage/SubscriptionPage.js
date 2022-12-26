import React from 'react';
import { Link } from 'react-router-dom';
import Head2 from '../Head2/Head2';
import checkbox from './../../Image/icons/checkbox-1.svg';
import whtecheckbox from './../../Image/icons/checkbox-2.svg';
const SubscriptionPage = () => {
    return (
        <>
            <Head2 tittle="" heading=""></Head2>
            <section className='py-5 subscription-page'>
                {/* Single-User start */}
                <div className="package">
                    <div className='package-items'>
                        <div>
                            <Link id='monthly' to='/'>Monthly</Link>
                        </div>
                        <div>
                            <Link id='yearly' to='/'>yearly</Link>
                        </div>
                    </div>
                </div>
                <div className="single-user">
                    <button>Single User</button>
                    <h1><sub>$</sub>36.00</h1>
                    <ul>
                        <li>
                            <img src={checkbox} alt="" />
                            3 Custom Logo Design Concepts</li>
                        <li>
                            <img src={checkbox} alt="" />
                            1 Dedicated Designer</li>
                        <li>
                            <img src={checkbox} alt="" />
                            4 Revisions</li>
                        <li>
                            <img src={checkbox} alt="" />
                            48 to 72 hours TAT</li>
                        <li>
                            <img src={checkbox} alt="" />
                            100% Unique Design Guarantee</li>
                        <li>
                            <img src={checkbox} alt="" />
                            100% Satisfaction Guarantee
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            100% Money Back Guarantee *
                        </li>
                    </ul>
                    <Link id='subscribe' to='/'>Subscribe Now</Link>
                    <Link id='view' to='/'>View Details</Link>
                </div>
                {/* Single-User end */}
                <div className='team-pro'>
                    <div className="team-pro-info">
                        <button>Team Pro</button>
                        <h1><sub>$</sub>36.00</h1>
                        <ul>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                3 Custom Logo Design Concepts
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                1 Dedicated Designer
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                4 Revisions
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                48 to 72 hours TAT
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                100% Unique Design Guarantee
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                100% Satisfaction Guarantee
                            </li>
                            <li>
                                <img src={whtecheckbox} alt="" />
                                100% Money Back Guarantee *
                            </li>

                        </ul>
                        <Link id='team-pro-Subscribe' to='/'>Subscribe Now</Link>
                        <Link id='team-pro-view' to='/'>View Details</Link>
                    </div>
                </div>
                <div className='enterprice'>
                    <button>Enterprice</button>
                    <h1><sub>$</sub>36.00</h1>
                    <ul>
                        <li>
                            <img src={checkbox} alt="" />
                            3 Custom Logo Design Concepts
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            1 Dedicated Designer
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            4 Revisions
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            48 to 72 hours TAT
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            100% Unique Design Guarantee
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            100% Satisfaction Guarantee
                        </li>
                        <li>
                            <img src={checkbox} alt="" />
                            100% Money Back Guarantee *
                        </li>
                    </ul>
                    <Link id='subscribe' to='/'>Subscribe Now</Link>
                    <Link id='view' to='/'>View Details</Link>
                </div>
            </section>
        </>
    );
};

export default SubscriptionPage;