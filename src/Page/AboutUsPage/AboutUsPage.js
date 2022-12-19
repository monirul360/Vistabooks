import React from 'react';
import about1 from './../../Image/images/about1.png';
import about2 from './../../Image/images/about2.png';
import about3 from './../../Image/images/about3.png';
import about4 from './../../Image/images/about4.png';
import checkbox from './../../Image/icons/Vector.png';
import about_vistabooks from './../../Image/images/1.png';
import best_features from './../../Image/images/best-features.png';
import about_how from './../../Image/images/about_how.png';
import vistabooks_erp from './../../Image/images/vistabooks_erp.png';
import { useState } from 'react';
const AboutUsPage = () => {
    const [aboutclick1, setaboutclick1] = useState(false);
    const [aboutclick2, setaboutclick2] = useState(false);
    const [aboutclick3, setaboutclick3] = useState(false);
    const [aboutclick4, setaboutclick4] = useState(false);
    const [aboutclick5, setaboutclick5] = useState(false);
    const [aboutclick6, setaboutclick6] = useState(false);
    const [aboutclick7, setaboutclick7] = useState(false);
    const [aboutclick8, setaboutclick8] = useState(false);
    const [aboutclick9, setaboutclick9] = useState(false);
    return (
        <>
            <section className='about-us'>
                <div className="about-fast-content my-5">
                    <div className="container">
                        <p>VISTABOOKS is a renowned Technology Solutions provider having in-house products such as CRM (Customer Relationship Management Software), HRM(Human Resource Management Software), Payroll Management ERP(Enterprise Resource Planning Software), and Project Management Softwares. VISTABOOKS focuses on the SaaS based Technology productswith Implementation Services across different Industries. VISTABOOKS posses one of the largest talent pool of the resources in the CRM, HRM, ERP &Payroll and have delivered and implemented the software across several companies.
                            Stop Worrying about the technology Problems and Choose VISTABOOKS for a Productive Tech Platform! VISTABOOKS is a thorough cloud accounting system that manages your company's finances, handles everythingincluding basic accounting, stock monitoring, project management, workflow automationand maintaining your company's GST compliance. VISTABOOKS can help you keep the money pouring in. Send out estimates, convert them to Tax invoices, and promptly receive payments online.</p>
                        <div className="row py-5">
                            <div className="col-6 col-md-6 col-lg-3">
                                <div>
                                    <img className='img-fluid' src={about4} alt="" />
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div >
                                    <img className='img-fluid mb-5' src={about3} alt="" />
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div>
                                    <img className='img-fluid' src={about2} alt="" />
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div>
                                    <img className='img-fluid' src={about1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='py-4'>
                            <p>Quickly produce retail invoices, With payment reminders, you can effortlessly chase payments, Give your clients the opportunity to pay online to get payments more quickly and more with VISTABOOKS CRM. With VISTABOOKS CRM, your customer-facing personnel will perform at their peak because to effective automation, thorough analytics, individualised solutionsand other factors. In the enterprise CRM sector, registering and getting started straight away will result in the shortest deployment. </p>
                        </div>
                        <div className='checkbox'>
                            <div className='d-flex my-4'>
                                <div className='me-3'>
                                    <img src={checkbox} alt="" />
                                </div>
                                <div>
                                    <p>VISTABOOKS CRM has a number of benefits ranging from easy to use for a modern business CRM, Extensive developer platform
                                        for unique solutions and integrations. Devoted programmes for migration, deployment, and training, Flexible agreements without
                                        lock-in clauses Etc. </p>
                                </div>
                            </div>
                            <div className='d-flex my-4'>
                                <div className='me-3'>
                                    <img src={checkbox} alt="" />
                                </div>
                                <div>
                                    <p>With all the information in one place, VISTABOOKS CRM's technology enables us to be more pro-active and insight driven.
                                        When everything is under control, productivity can really increase. </p>
                                </div>
                            </div>
                            <div className='d-flex my-4'>
                                <div className='me-3'>
                                    <img src={checkbox} alt="" />
                                </div>
                                <div>
                                    <p>VISTABOOKS Payroll Management Software supports in Employee Onboarding, Payroll Management, Payroll Processing,
                                        Employee Self-service Portal, Statutory compliance and Reporting, Integrations. </p>
                                </div>
                            </div>
                            <div className='d-flex my-4'>
                                <div className='me-3'>
                                    <img src={checkbox} alt="" />
                                </div>
                                <div>
                                    <p>ASimple method for streamlining two intricate corporate procedures. Avoid the inconvenience of siloed operations. Integrate
                                        Vistabooks Payroll with Vistabooks People to simplify employee administration and payroll processing. </p>
                                </div>
                            </div>
                            <div className='d-flex my-4'>
                                <div className='me-3'>
                                    <img src={checkbox} alt="" />
                                </div>
                                <div>
                                    <p>With the help of the cloud-based payroll management tool Vistabooks Payroll, you can give employees a polished payroll
                                        experience while streamlining your own payroll processes. With the help of the cloud-based HR management tool Vistabooks
                                        People, you can keep track of your employees' onboarding, leave requests, and attendance records. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* about-count */}
                <div className="container py-5">
                    <div className="row about-count">
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className='py-4'>
                                <h1>99<span>%</span></h1>
                                <p>Customer satisfaction</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className='py-4'>
                                <h1>32<span>M</span></h1>
                                <p>Active users</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className='py-4'>
                                <h1>125<span>+</span></h1>
                                <p>Team members</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className='py-4'>
                                <h1>240<span>%</span></h1>
                                <p>Company growth</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-why-choose">
                    <div className="container py-5">
                        <div className="text py-5">
                            <span>Features</span>
                            <h3>Why Choose VISTABOOKS?</h3>
                            <p className='ms-3'>VISTABOOK possesses the know-how to easily combine apps on many platforms and technologies.</p>
                            <p>VISTABOOK uses its extensive experience managing big business implementation projects to carry out the
                                projects methodically and in an organised way, enabling high quality, timely, and effective ERP deployment.</p>
                            <p>VISTABOOK completes the implementation of ERP solutions for businesses providing professional services
                                and manufacturing. Additionally, we provide services in finance and controlling, production planning and
                                controlling, asset management, manufacturing supply chain, materials management, and supplier
                                management. We also provide services in trade and logistics, procurement workflow, vendor collaboration,
                                custom development, and human capital management.</p>
                        </div>
                    </div>
                </div>
                <div className="about-vistabooks mb-5">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-7">
                                <div>
                                    <h2>VISTABOOKS develops integrated human resources
                                        and payroll software which is,</h2>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Precise and transparent data transfer.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Effective and independent.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Contextual data collection that is automated.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>For a quicker payroll calculation, use bulk validation.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Cross-functional reports and analysis without effort.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div>
                                    <img className='img-fluid mt-2' src={about_vistabooks} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="best-features mb-5">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div>
                                    <img className='img-fluid mb-2' src={best_features} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <h2>Best Features of our VISTABOOKS HRMS,</h2>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Automatic employee profile synchronization.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Contextual employee directory updates.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Up-to-the-minute employee attendance.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Integrated Leave Management.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-How-does py-5">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-8">
                                <div className="text">
                                    <h2>How does VISTABOOKS make processing Payroll simple?</h2>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Calculating payroll automatically</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Online salary payments made using affiliated banks</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Automatic statutory calculations that adhere to Indian payroll regulations</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>diverse payment and benefit plans for various levels of employees</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Secured self-service portal to cut down on payroll staff's questions</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>All your payroll workers should have user roles and role-based access.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>All your payroll workers should have user roles and role-based access.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Detailed payroll reports are needed for tax preparation and to
                                                comprehend payroll costs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <img className='img-fluid' src={about_how} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="vistabooks-erp-software py-5">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-4">
                                <img className='img-fluid' src={vistabooks_erp} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="text">
                                    <h2>VISTABOOKS ERP software</h2>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Using important company data, comprehend your clients and customers.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Utilize a single system to manage sales orders, quotations, invoicing, and payments.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Make your reporting personalised for all business activities.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Easy to determine inventory quota and fulfilment</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Create an all-encompassing solution with integrations to boost the
                                                productivity of your company.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <img className='pe-2' src={checkbox} alt="" />
                                        </div>
                                        <div>
                                            <p>Boost teamwork across the board, from sales and revenue to operations and
                                                customer service.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="about-testimonials py-5">
                    <div className="container">
                        <div className="text-center tittle">
                            <p>FAQ</p>
                            <h3>Frequently Asked Questions </h3>
                        </div>
                        <div className="row">
                            {/* item1 */}
                            <div className="col-md-6">
                                <div className="item">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h4>What is Bikat</h4>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setaboutclick1(!aboutclick1)}
                                            >
                                                {
                                                    aboutclick1 ?
                                                        <p>-</p>
                                                        :
                                                        <p>+</p>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`content ${aboutclick1 ? ' ' : 'about-hide'}`}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus qui at optio deleniti.</p>
                                    </div>
                                </div>
                            </div>
                            {/*1 item end */}
                            {/* item2 */}
                            <div className="col-md-6">
                                <div className="item">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h4>What is Bikat</h4>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setaboutclick2(!aboutclick2)}
                                            >
                                                {
                                                    aboutclick2 ?
                                                        <p>-</p>
                                                        :
                                                        <p>+</p>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`content ${aboutclick2 ? ' ' : 'about-hide'}`}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus qui at optio deleniti.</p>
                                    </div>
                                </div>
                            </div>
                            {/*2 item end */}
                            {/* item3 */}
                            <div className="col-md-6">
                                <div className="item">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h4>What is Bikat</h4>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setaboutclick3(!aboutclick3)}
                                            >
                                                {
                                                    aboutclick3 ?
                                                        <p>-</p>
                                                        :
                                                        <p>+</p>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`content ${aboutclick3 ? ' ' : 'about-hide'}`}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus qui at optio deleniti.</p>
                                    </div>
                                </div>
                            </div>
                            {/*3 item end */}
                            {/* item4 */}
                            <div className="col-md-6">
                                <div className="item">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h4>What is Bikat</h4>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setaboutclick4(!aboutclick4)}
                                            >
                                                {
                                                    aboutclick4 ?
                                                        <p>-</p>
                                                        :
                                                        <p>+</p>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`content ${aboutclick4 ? ' ' : 'about-hide'}`}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus qui at optio deleniti.</p>
                                    </div>
                                </div>
                            </div>
                            {/*4 item end */}
                            {/* item5 */}
                            <div className="col-md-6">
                                <div className="item">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h4>What is Bikat</h4>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setaboutclick5(!aboutclick5)}
                                            >
                                                {
                                                    aboutclick5 ?
                                                        <p>-</p>
                                                        :
                                                        <p>+</p>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`content ${aboutclick5 ? ' ' : 'about-hide'}`}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus qui at optio deleniti.</p>
                                    </div>
                                </div>
                            </div>
                            {/*5 item end */}
                            {/* item 6*/}
                            <div className="col-md-6">
                                <div className="item">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h4>What is Bikat</h4>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setaboutclick6(!aboutclick6)}
                                            >
                                                {
                                                    aboutclick6 ?
                                                        <p>-</p>
                                                        :
                                                        <p>+</p>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`content ${aboutclick6 ? ' ' : 'about-hide'}`}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus qui at optio deleniti.</p>
                                    </div>
                                </div>
                            </div>
                            {/*6 item end */}
                            {/* item7 */}
                            <div className="col-md-6">
                                <div className="item">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h4>What is Bikat</h4>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setaboutclick7(!aboutclick7)}
                                            >
                                                {
                                                    aboutclick7 ?
                                                        <p>-</p>
                                                        :
                                                        <p>+</p>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`content ${aboutclick7 ? ' ' : 'about-hide'}`}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus qui at optio deleniti.</p>
                                    </div>
                                </div>
                            </div>
                            {/*7 item end */}
                            {/* item8 */}
                            <div className="col-md-6">
                                <div className="item">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h4>What is Bikat</h4>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setaboutclick8(!aboutclick8)}
                                            >
                                                {
                                                    aboutclick8 ?
                                                        <p>-</p>
                                                        :
                                                        <p>+</p>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`content ${aboutclick8 ? ' ' : 'about-hide'}`}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus qui at optio deleniti.</p>
                                    </div>
                                </div>
                            </div>
                            {/*8 item end */}
                            {/* item9 */}
                            <div className="col-md-6">
                                <div className="item">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h4>What is Bikat</h4>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setaboutclick9(!aboutclick9)}
                                            >
                                                {
                                                    aboutclick9 ?
                                                        <p>-</p>
                                                        :
                                                        <p>+</p>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`content ${aboutclick9 ? ' ' : 'about-hide'}`}>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus qui at optio deleniti.</p>
                                    </div>
                                </div>
                            </div>
                            {/*9 item end */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsPage;