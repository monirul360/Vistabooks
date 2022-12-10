import React from 'react';
import paypal from './../../Image/icons/paypal-logo.png';
const PaymentPage2 = () => {
    return (
        <>
            <div className="container">
                <div className="payment-page-two">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="info">
                                <div>
                                    <h3>Sub Total - Rs.100000/-</h3>
                                    <h3>Tax Fee   -  Rs.     500/-</h3>
                                    <hr />
                                    <h3>Tax Fee   -  Rs. 100500/-</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form">
                                <h3>Select Payment Option</h3>
                                <div className="select-group py-4">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className='select-items'>
                                                <div>
                                                    <input className='me-2' type="checkbox" name="" id="" />
                                                </div>
                                                <div>
                                                    <img src={paypal} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className='select-items'>
                                                <div>
                                                    <input className='me-2' type="checkbox" name="" id="" />
                                                </div>
                                                <div>
                                                    <img src={paypal} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className='select-items'>
                                                <div>
                                                    <input className='me-2' type="checkbox" name="" id="" />
                                                </div>
                                                <div>
                                                    <img src={paypal} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form >
                                    <input
                                        type="text"
                                        placeholder='Name'
                                        id="" />
                                    <input
                                        type="email"
                                        placeholder='E-mail Address'
                                        id="" />
                                    <input
                                        type="email"
                                        name=""
                                        placeholder='Name'
                                        id="" />
                                    <input
                                        type="email"
                                        placeholder='E-mail Address'
                                        id="" />
                                    <input
                                        type="submit"
                                        value="Pay Now" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentPage2;