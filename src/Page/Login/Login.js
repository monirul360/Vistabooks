import React from 'react';
import { Link } from 'react-router-dom';
import login from './../../Image/login.png';
const Login = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="login-section">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-12 col-lg-6">
                            <div className='content'>
                                <h2>Login Account</h2>
                                <p>
                                    Use your Mobile Number to Login in Mobile
                                    Mandi. Happy Selling!
                                </p>
                                <div className="form">
                                    <form>
                                        <input type="text" name="" id="" placeholder='User name' />
                                        <input type="password" name="" id="" placeholder='Password' />
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <input type="checkbox" name="" id="Remember" />
                                                <label htmlFor="Remember"> <span >Remember Me</span></label>
                                            </div>
                                            <div>
                                                <Link id='login-forgot' to='/'>Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <input type="submit" value="Login Now" />
                                    </form>
                                    <p>
                                        New in Mobile Mandi?
                                        <Link id='login-create' to='/'>Create Account</Link>
                                    </p>
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
    );
};

export default Login;