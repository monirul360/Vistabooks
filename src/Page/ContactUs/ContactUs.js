import React from 'react';
import call from './../../Image/icons/call.png';
import location from './../../Image/icons/location.png';
import email from './../../Image/icons/email.png';
const ContactUs = () => {
    return (
        <>
            <section className='ContactUs py-5'>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="contactus-form mb-5">
                                <h2>Contact Us</h2>
                                <p>Use your Mobile Number to Login in Mobile
                                    Mandi. Happy Selling!
                                </p>
                                <form action="">
                                    <input type="text" name="" placeholder='Name' id="" />
                                    <input type="email" name="" placeholder='E-mail Address' id="" />
                                    <input type="text" name="" placeholder='Select Subject' id="" />
                                    <textarea placeholder='Message'></textarea>
                                    <input type="submit" value="Send Message" />
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contactus-info ms-4 ">
                                {/* call  start*/}
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <span>
                                            <img src={call} alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <h4>Call Now</h4>
                                        <h5>+91 5896 323 2542</h5>
                                    </div>
                                </div>
                                {/* call end */}
                                {/* E-mail  start*/}
                                <div className='d-flex align-items-center my-5'>
                                    <div>
                                        <span>
                                            <img src={email} alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <h4>E-mail</h4>
                                        <h5>vistabook@gmail.com</h5>
                                    </div>
                                </div>
                                {/* E-mail  end */}
                                {/* Location  start*/}
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <span>
                                            <img src={location} alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <h4>Location</h4>
                                        <h5>2/A Street, TY, USA 250012</h5>
                                    </div>
                                </div>
                                {/* Location end */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;