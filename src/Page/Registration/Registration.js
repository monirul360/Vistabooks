import React from 'react';
import login from './../../Image/login.png';
const Registration = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="login-section">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-12 col-lg-6">
                                <div className='content'>
                                    <h2>Create Account</h2>
                                    <p className='mb-4'>
                                        Use your Mobile Number to Login in Mobile
                                        Mandi. Happy Selling!
                                    </p>
                                    <div className="form mt-4">
                                        <form>
                                            <input
                                                type="text"
                                                name="" id=""
                                                placeholder='User name'
                                            />
                                            <input
                                                type="email"
                                                name=""
                                                id=""
                                                placeholder='E-mail Address'
                                            />
                                            <input
                                                type="password"
                                                name=""
                                                id=""
                                                placeholder='Password'
                                            />
                                            <input
                                                type="password"
                                                name=""
                                                id=""
                                                placeholder='Confirm Password'
                                            />
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id="Remember" />
                                                <label
                                                    htmlFor="Remember">
                                                    <span >I agree With Terms & Condition</span>
                                                </label>
                                            </div>
                                            <input
                                                type="submit"
                                                value="Registration"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className='p-4 d-flex justify-content-center align-items-center'>
                                    <img className='img-fluid' src={login} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Registration;