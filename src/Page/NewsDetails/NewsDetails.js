import React from 'react';
import User from './../Share/User/User';
import img from './../../Image/images/2.png';
import { Link } from 'react-router-dom';
import left from './../../Image/icons/left.png';
import right from './../../Image/icons/right.png';
const NewsDetails = () => {
    return (
        <>
            <div className="container py-5">
                <div className="news-details">
                    <img src={img} alt="" />
                    <button className='new-d-button'>ERP</button>
                    <User></User>
                    <h3>Benefits of ERP Solutions for the Small & Medium Enterprises</h3>
                    <p>There are a Several benefits of ERP for the Small & Medium Businesses. This Covid has brought several
                        changes in. Consistent changes to the data of the Enterprise to be managed and shared across the different teams of the organization. The Vistabooks ERP will be very much helpful in storing and sharing the data to work in a collaborative environment.

                    </p>
                    <p>Sending the Invoices, Accounting the data, Managing the Finance Module, Managing the Inventories, Purchases, Staff Management and more can be executed with Vistabooks ERP Solutions. The SAAS based Subscription model of the ERP will be providing the accurate information based on the input provided. The Vistabooks ERP will reduce the manual operational risks and improve the automation of the tasks where the accounting and finance-based automations happens in minutes of times.
                    </p>
                    <p>This will make the efforts to lessen and improve the productivity of the organization. The ERP System will help you to optimize the complete manual process and makes the data to be available across different teams of the organizations. This ensures the transparency of the data, and the required reports can be downloaded based on the requirements ay time to improve the business decisions.
                        A Good ERP will improve the productivity of the organization. Vistabooks ERP will help to optimize the data to be downloaded as reports for Business Insights.
                    </p>
                    <p>Small & Medium Enterprises which will implement the ERP in their Organization can reduce the operational cost by 20% annually. Cloud ERP like Vistabooks will help you to lower the on-premises setup costing and improve the efficiency of your team. The Subscription cost will be as less as low to $5 per month per user. ERP Solutions are very much vital for any Organizations. ERP Solutions will make sure you have the right supply, or the inventories required for the Manufacturing purposes.

                    </p>
                    <p>Never worry about the Sales team need to send out the number of quotes manually. The ERP comes up with the Quotation and Invoice Module where the automated invoices can be sent to the customers by your sales team. Better chat systems where you can communicate within your organization and with the clients. Communications are very easy with better ERP Systems like Vistabooks.
                    </p>
                    <p>Improved Business Reporting Tools with real time information, Access to the customer information, Improved Cash Flow, Business Process Improvements, Supply chain management and more are the benefits of using ERP in your Organization.</p>
                </div>
                <div className='d-flex justify-content-between px-3'>
                    <div>
                        <Link id='prev' to='/'> <img className='me-2' src={right} alt="" /> Prev Post</Link>
                    </div>
                    <div>
                        <Link id='prev' to='/'>Next Post <img className='ms-2' src={left} alt="" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsDetails;