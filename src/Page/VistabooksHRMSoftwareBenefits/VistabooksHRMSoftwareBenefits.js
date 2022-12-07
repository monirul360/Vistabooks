import React from 'react';
import icon from './../../Image/icons/Vector.png';
import img from './../../Image/images/1.png'
const VistabooksHRMSoftwareBenefits = () => {
    return (
        <>
            <div className="container">
                <div className="common-page">
                    <p>Automate the complete lifecycle of any staff or employee from the employee onboarding to the exit using the Vistabooks HRMS Software. Vistabooks is a modern HR automation software having several benefits from workflow management, performance appraisal, leave management and more. Automate the Training requirements of the team using the HRMS Software of Vistabooks. Maintain the Database of the Trainees (Employees) along with the Trainers with the Employees on bench who requires the training before moving to the next team or project to be executed. Schedule the Training program along with the Training Calendar management which can automatically send or trigger mails or SMS to the employees in the right time using Vistabooks.

                    </p>
                    <p>Collect the Feedback once the training is completed and provide the recorded session of the training to the other Candidates. The Health and Safety Policy will be updated in the HRMS portal which will be triggered as an Email with pre-developed Email Template in Vistabooks. Share the contents in the HRMS using the Share Feature. Share the details to any employee or any managers.
                    </p>
                    <div className="row justify-content-center align-items-center py-5">
                        <div className="col-12 col-md-8">
                            <ul>
                                <li className='Title'>Vistabooks will be providing the below benefits for the users</li>
                                <li>
                                    <span><img src={icon} alt="" /></span>
                                    Attendance Management.
                                </li>
                                <li>
                                    <span><img src={icon} alt="" /></span>
                                    Payroll Management.                                </li>
                                <li>
                                    <span><img src={icon} alt="" /></span>
                                    Travel Management.
                                </li>
                                <li>
                                    <span><img src={icon} alt="" /></span>
                                    Collaborate with your team.
                                </li>
                                <li>
                                    <span><img src={icon} alt="" /></span>
                                    Expenses Reimbursement Etc
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4">
                            <img className='img-fluid mt-4' src={img} alt="" />
                        </div>
                    </div>
                    <p>From Employee Tracking, Employee Onboarding, Performance Management, Employee Training and Management, Timesheet and Payroll Management and More with Vistabooks.</p>
                </div>
            </div>
        </>
    );
};

export default VistabooksHRMSoftwareBenefits;