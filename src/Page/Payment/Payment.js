import React from 'react';
import img from './../../Image/images/2.png';
import addition from './../../Image/icons/addition.svg';
import subtraction from './../../Image/icons/subtraction.svg';
import checkbox from './../../Image/icons/checkbox-2.svg';
import { Link } from 'react-router-dom';
const Payment = () => {
    return (
        <>
            <div className="container">
                <div className="payment-link">
                    <Link to='/'><img src={checkbox} alt="" /> Cart</Link>
                    <Link to='/PaymentPage2'>Payment</Link>
                    <Link to='/'>Thank You</Link>
                </div>
                <div className="payment">
                    <table>
                        <thead>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </thead>
                        <tbody>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src={img} alt="" />
                                    </div>
                                    <div>
                                        <h5>CRM Service</h5>
                                        <p>1 User</p>
                                    </div>
                                </div>
                            </td>
                            <td>Rs. 4000</td>
                            <td>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center Quantity'>
                                        <div>
                                            <button>
                                                <img src={subtraction} alt="" />
                                            </button>
                                        </div>
                                        <div>
                                            <h4>1</h4>
                                        </div>
                                        <div>
                                            <button>
                                                <img src={addition} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='cancel'>
                                        <h3>X</h3>
                                    </div>
                                </div>
                            </td>
                        </tbody>
                        <tbody>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src={img} alt="" />
                                    </div>
                                    <div>
                                        <h5>CRM Service</h5>
                                        <p>1 User</p>
                                    </div>
                                </div>
                            </td>
                            <td>Rs. 4000</td>
                            <td>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center Quantity'>
                                        <div>
                                            <button>
                                                <img src={subtraction} alt="" />
                                            </button>
                                        </div>
                                        <div>
                                            <h4>1</h4>
                                        </div>
                                        <div>
                                            <button>
                                                <img src={addition} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='cancel'>
                                        <h3>X</h3>
                                    </div>
                                </div>
                            </td>
                        </tbody>
                        <tbody>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src={img} alt="" />
                                    </div>
                                    <div>
                                        <h5>CRM Service</h5>
                                        <p>1 User</p>
                                    </div>
                                </div>
                            </td>
                            <td>Rs. 4000</td>
                            <td>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center Quantity'>
                                        <div>
                                            <button>
                                                <img src={subtraction} alt="" />
                                            </button>
                                        </div>
                                        <div>
                                            <h4>1</h4>
                                        </div>
                                        <div>
                                            <button>
                                                <img src={addition} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='cancel'>
                                        <h3>X</h3>
                                    </div>
                                </div>
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Payment;