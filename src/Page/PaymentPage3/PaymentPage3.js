import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../Image/icons/Solutions.svg';
const PaymentPage3 = () => {
    return (
        <>
            <div className="container">
                <div className="payment-three py-5">
                    <div>
                        <img src={img} alt="" />
                        <br />
                        <h3>Thanks for Your Order</h3>
                        <p>Create an Account with ACOUNTIER so our Team can know
                        </p>
                        <p> about yourself before Connecting with you</p>
                        <Link to='/'>Back Home Page</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentPage3;