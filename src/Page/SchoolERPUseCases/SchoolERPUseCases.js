import React from 'react';
import icon from './../../Image/icons/Vector.png';

const SchoolERPUseCases = () => {
    return (
        <>
            <div className="container">
                <div className="common-page">
                    <h4 className='Title'>School ERP Use Cases</h4>
                    <p>Vistabooks School ERP makes the workflow of the School’s administration department and the management at an ease. Vistabooks School ERP also makes the eLearning process very easy and affordable. From Attendance Management, Staff Management, Exam Management, Library Management, Accounting Management, Finance Management and more. Vistabooks comes up with all handy features required for a School to operate at an ease.
                    </p>
                    <h4 className='Title'>Vistabooks School ERP makes the Communication Easy.</h4>
                    <div className='d-flex py-2'>
                        <div className='me-3'>
                            <img src={icon} alt="" />
                        </div>
                        <div>
                            <span>Parents are informed about the marks and the performance of the students on a regular basis.</span>
                        </div>
                    </div>
                    <div className='d-flex py-2'>
                        <div className='me-3'>
                            <img src={icon} alt="" />
                        </div>
                        <div>
                            <span>Automated Emails for the better communication.</span>
                        </div>
                    </div>
                    <div className='d-flex py-2'>
                        <div className='me-3'>
                            <img src={icon} alt="" />
                        </div>
                        <div>
                            <span>Automated SMS System.</span>
                        </div>
                    </div>
                    <div className='d-flex py-2'>
                        <div className='me-3'>
                            <img src={icon} alt="" />
                        </div>
                        <div>
                            <span>Daily HomeWorks can be updated and notified to the parents on the regular basis.</span>
                        </div>
                    </div>
                    <h4 className='Title'>Payroll Management</h4>
                    <p>Staff Attendance, Leave Management, Salaries of the Staffs, Increments, Deduction, Bonuses are completely updated in the School ERP Payroll
                        Management Software. School ERP from Vistabooks helps you to generate the Reports for any management purposes.</p>
                    <h4 className='Title'>Library Management</h4>
                    <p>Any Prestigious Schools or Organizations across the Globe will have an Internal Library. A Good Library Management Module will save the total
                        number of books in the database along with the records of the students who have borrowed the books and the students who have
                        returned the books.</p>
                    <h4 className='Title'>Document Management</h4>
                    <p>Vistabooks School ERP will be supporting the maintenance of the data in the downloadable reports such as Report Cards or Grade Cards of the
                        Students, Students Transfer details, Admission Form, Competition Certificates, Staff Experience Certificates Etc. Vistabooks School ERP comes handy
                        with several benefits for the School. Buy the School ERP Subscriptions now from Vistabooks.</p>
                </div>
            </div>
        </>
    );
};

export default SchoolERPUseCases;