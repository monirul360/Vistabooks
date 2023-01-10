import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import hero from "./../../Image/images/hero.png";
import heroicon from "./../../Image/icons/3.png";
import crm from "./../../Image/icons/CRM icon.svg";
import platform from "./../../Image/images/Features.png";
import checkbox from "./../../Image/icons/checkbox-1.svg";
import bluecheckbox from "./../../Image/icons/bluecheckbox.svg";
import whtecheckbox from "./../../Image/icons/checkbox-2.svg";
import Head from "../Head/Head";
import group from "./../../Image/icons/home/Group1000002501.svg";
import ERP from "./../../Image/icons/home/ERP.svg";
import HRM from "./../../Image/icons/CRM icon.svg";
import Improved from "./../../Image/icons/home/Improved.svg";
import setup from "./../../Image/icons/home/setup.svg";
import Increased from "./../../Image/icons/home/Increased.svg";
import Solutions from "./../../Image/icons/home/Solutions.svg";
// import Advanced_HRMS from "./../../Image/icons/home/HRM.svg";
import Payroll from "./../../Image/icons/home/Money.svg";
import userimg from "./../../Image/images/user.jpg";
import Slider from "./Slider";
const Home = () => {
  const [homeclick1, sethomeclick1] = useState(false);
  const [homeclick2, sethomeclick2] = useState(false);
  const [homeclick3, sethomeclick3] = useState(false);
  const [homeclick4, sethomeclick4] = useState(false);
  const [homeclick5, sethomeclick5] = useState(false);
  const [homeclick6, sethomeclick6] = useState(false);
  const [homeclick7, sethomeclick7] = useState(false);
  const [homeclick8, sethomeclick8] = useState(false);
  return (
    <div className="home-body">
      <div className="head-section">
        <Head></Head>
      </div>
      <section className="hero-section my-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7">
              <div className="hero-text">
                <p className="tittle">Best CRM, ERP & HRM</p>
                <h1>
                  Automate your Complete Enterprise Systems with Vistabooks
                </h1>
                <p>
                  Vistabooks has highly automated CRM, ERP & HRM Software’s
                  which can completely automate your process by reducing the
                  manual efforts and improved reminders facility.{" "}
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <Link id="know-more" to="/">
                      Know More
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      {" "}
                      <img className="me-2" src={heroicon} alt="" /> How It Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <img className="img-fluid" src={hero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-section py-5">
        <div className="feature-content">
          {/* items -1 start*/}
          <div className="items">
            <div>
              <p className="lead">Best CRM Tool</p>
              <img src={group} alt="" />
              <h3>CRM Software</h3>
              <p>
                Track and Manage your Customer’s data with our CRM Software.
                Manage your Customer Queries and Follow ups with CRM Software.{" "}
              </p>
            </div>
          </div>
          {/* items -1 end*/}
          {/* items -2 start*/}
          <div className="items">
            <div>
              <p className="lead text-end">ERP & Automations</p>
              <img src={ERP} alt="" />
              <h3>ERP Software</h3>
              <p>
                With our ERP Solutions, You can automate your daily business
                activities from accounting, invoicing the customers, project
                management and supply chain management.
              </p>
            </div>
          </div>
          {/* items -2 end*/}
          {/* items -3 start*/}
          <div className="items">
            <div>
              <p className="lead">HRM & Manage Functions</p>
              <img src={HRM} alt="" />
              <h3>HRM Software</h3>
              <p>
                Our HRM Software provides you with the tool to manage the
                payroll, recruitments, employee engagement program, staff
                attendance and more.
              </p>
            </div>
          </div>
          {/* items -3 end*/}
        </div>
      </section>
      <section className="automation-platform">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="text">
                <span>All in One Automation Platform</span>
                <p>
                  Vistabooks is your one stop solution for your complete CRM,
                  HRM & ERP Platform which can manage your Inventories of your
                  day-to-day operations to the Payroll management Software and
                  the Customer Relationship Management Software and more.{" "}
                </p>
                <div className="d-flex py-4">
                  <div className="me-5">
                    <p>
                      <img className="me-2" src={bluecheckbox} alt="" />
                      CRM Solutions
                    </p>
                  </div>
                  <div>
                    <p>
                      <img className="me-2" src={bluecheckbox} alt="" />
                      ERP Solutions{" "}
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="me-5">
                    <p>
                      <img className="me-2" src={bluecheckbox} alt="" />
                      HRM Solutions{" "}
                    </p>
                  </div>
                  <div>
                    <p>
                      <img className="me-2" src={bluecheckbox} alt="" />
                      School ERP Solutions{" "}
                    </p>
                  </div>
                </div>
                <Link className="Categories" to="/">
                  All Categories
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img className="img-fluid" src={platform} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="count py-5">
        <div className="container">
          <div className="row ms-auto">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="items">
                <h1>
                  96<span>%</span>
                </h1>
                <p>Customer satisfaction</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="items">
                <h1>
                  1200<span>+</span>
                </h1>
                <p>Active Customers</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="items">
                <h1>
                  50<span>+</span>
                </h1>
                <p>Team members</p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="items">
                <h1>
                  98<span>%</span>
                </h1>
                <p>Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="manage-your-customers">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4">
              <img className="img-fluid" src={hero} alt="" />
            </div>
            <div className="col-md-8">
              <div className="text">
                <span>Manage your Customers Follow ups</span>
                <h2>
                  Follow up with your customers with Vistabooks CRM Software.
                </h2>
                <p>
                  Vistabooks CRM Software help you to get connected with your
                  customers with automated communication processes such as Mail,
                  SMS and more. Improve your customer satisfaction with Powerful
                  Vistabooks CRM Software’s Analytics Data.
                </p>
                <div className="d-flex py-4">
                  <div className="pe-5">
                    <p>
                      <img className="pe-2" src={bluecheckbox} alt="" />
                      Customer Satisfaction
                    </p>
                  </div>
                  <div>
                    <p>
                      <img className="pe-2" src={bluecheckbox} alt="" />
                      Improved Communication
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="pe-5">
                    <p>
                      <img className="pe-2" src={bluecheckbox} alt="" />
                      Productivity Tools
                    </p>
                  </div>
                  <div style={{ marginLeft: "40px" }}>
                    <p>
                      <img className="pe-2" src={bluecheckbox} alt="" />
                      Analytical Data
                    </p>
                  </div>
                </div>
                <br />
                <br />
                <Link className="g-Started" to="/">
                  All Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-work py-5">
        <div className="container">
          <p className="text-center">Features</p>
          <h2 className="text-center">How It Work</h2>
          <div class="ratio ratio-16x9 my-5">
            <iframe
              src="https://www.youtube.com/embed/MTyL3ztESWY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="why-choose-us mt-3">
        <div className="text-center text mb-4">
          <span>Choose</span>
          <h4>Why Choose Us</h4>
        </div>
        <div className="choose-flex">
          {/* items -1 start*/}
          <div className="items">
            <div>
              <p className="lead">Productive Communication</p>
              <img src={Improved} alt="" />
              <h3>Improved Customer Service</h3>
              <p>
                We have developed the complete automation tools to Improve the
                communication with your customers along with feedback and
                ticketing facility.{" "}
              </p>
            </div>
          </div>
          {/* items -1 end*/}
          {/* items -2 start*/}
          <div className="items">
            <div>
              <p className="lead">Advanced Tools </p>
              <img src={setup} alt="" />
              <h3>Easy Setup Software </h3>
              <p>
                Our Vistabooks Software provides you with the easy setup CRM,
                ERP & HRM Software which is completely automated with end-to-end
                requirement for any enterprise organization.
              </p>
            </div>
          </div>
          {/* items -2 end*/}
          {/* items -3 start*/}
          <div className="items">
            <div>
              <p className="lead">Improved Workflow</p>
              <img src={Increased} alt="" />
              <h3>Increased Automation </h3>
              <p>
                Reduce your manual work with improved automation facilities
                available in the CRM, ERP, HRM of Vistabooks. Boost your
                Organization’s productivity with Vistabooks.
              </p>
            </div>
          </div>
          {/* items -3 end*/}
          {/* items -4 start*/}
          <div className="items">
            <div>
              <p className="lead">End to End Automation Software</p>
              <img src={Solutions} alt="" />
              <h3>Complete Enterprise Solution</h3>
              <p>
                Vistabooks ERP Solution is the complete Enterprise Software for
                managing your accounting, project management, inventories,
                procurement, risk management, supply chain operations and more.
              </p>
            </div>
          </div>
          {/* items -4 end*/}
          {/* items -5 start*/}
          <div className="items">
            <div>
              <p className="lead">Managed HR Operations</p>
              <img src={crm} alt="" />
              <h3>Advanced HRMS </h3>
              <p>
                Automate your complete Human Resource Operations and Employee
                Engagement with a one platform which is Employee Help Desk,
                Management, Leave Attendance System Etc.
              </p>
            </div>
          </div>
          {/* items -5 end*/}
          {/* items -6 start*/}
          <div className="items">
            <div>
              <p className="lead">Timesheet to Salaries</p>
              <img src={Payroll} alt="" />
              <h3>Payroll Management </h3>
              <p>
                Our HRMS of Vistabooks also provides you with the advanced
                payroll management software with the facility to disburse
                salariesand to file the tax compliance.
              </p>
            </div>
          </div>
          {/* items -6 end*/}
        </div>
      </section>
      <section className="py-5 subscription-page">
        {/* Single-User start */}
        <div className="package">
          <div className="text-center py-4">
            <p style={{ color: "#3971FF", marginBottom: "16px" }}>Price</p>
            <h1>Pricing Plans</h1>
          </div>
        </div>
        <div className="single-user">
          <button>CRM</button>
          <h1>
            <sub>$</sub>Rs.499.00
          </h1>
          <ul>
            <li>
              <img src={checkbox} alt="" />
              Visual Data Showcase{" "}
            </li>
            <li>
              <img src={checkbox} alt="" />
              Emails & Newsletter{" "}
            </li>
            <li>
              <img src={checkbox} alt="" />
              Contact Management{" "}
            </li>
            <li>
              <img src={checkbox} alt="" />
              Lead Management
            </li>
            <li>
              <img src={checkbox} alt="" />
              Report & Dashboard{" "}
            </li>
            <li>
              <img src={checkbox} alt="" />
              Sales Analytics
            </li>
            <li>
              <img src={checkbox} alt="" />
              Mobile CRM
            </li>
            <li>
              <img src={checkbox} alt="" />
              Sales Force Automation
            </li>
            <li>
              <img src={checkbox} alt="" />
              Sales Forecasting
            </li>
          </ul>
          <Link id="subscribe" to="/">
            Order Now
          </Link>
        </div>
        {/* Single-User end */}
        <div className="team-pro">
          <div className="team-pro-info">
            <button>HRM</button>
            <h1>
              <sub></sub>Rs.499.00
            </h1>
            <ul>
              <li>
                <img src={whtecheckbox} alt="" />
                Recruitment & Hiring
              </li>
              <li>
                <img src={whtecheckbox} alt="" />
                Employee Portal
              </li>
              <li>
                <img src={whtecheckbox} alt="" />
                Workflows
              </li>
              <li>
                <img src={whtecheckbox} alt="" />
                Payroll
              </li>
              <li>
                <img src={whtecheckbox} alt="" />
                Time Tracking
              </li>
              <li>
                <img src={whtecheckbox} alt="" />
                Leave Entitlement
              </li>
              <li>
                <img src={whtecheckbox} alt="" />
                Employee Training
              </li>
              <li>
                <img src={whtecheckbox} alt="" />
                Employee Benefits
              </li>
              <li>
                <img src={whtecheckbox} alt="" />
                Talent Retention
              </li>
              <li>
                <img src={whtecheckbox} alt="" />
                Analytics & Data Management
              </li>
            </ul>
            <Link id="team-pro-Subscribe" to="/">
              Order Now
            </Link>
          </div>
        </div>
        <div className="enterprice">
          <button>School ERP </button>
          <h1>
            <sub></sub>Rs.625.00
          </h1>
          <ul>
            <li>
              <img src={checkbox} alt="" />
              Admission Process
            </li>
            <li>
              <img src={checkbox} alt="" />
              Student Information
            </li>
            <li>
              <img src={checkbox} alt="" />
              School/Event Calendar
            </li>
            <li>
              <img src={checkbox} alt="" />
              BiometricAttendance
            </li>
            <li>
              <img src={checkbox} alt="" />
              Report Centre
            </li>
            <li>
              <img src={checkbox} alt="" />
              Parents Communication
            </li>
            <li>
              <img src={checkbox} alt="" />
              Maintaining Examination
            </li>
            <li>
              <img src={checkbox} alt="" />
              Communication
            </li>
            <li>
              <img src={checkbox} alt="" />
              Staff Management
            </li>
            <li>
              <img src={checkbox} alt="" />
              Library Management
            </li>
          </ul>
          <Link id="subscribe" to="/">
            Order Now
          </Link>
        </div>
      </section>

      <section className="home-testimonials-section py-5">
        <div className="home-testimonials">
          <div className="text-center">
            <span>Review</span>
            <h1>Client Testimonials</h1>
            <Outlet></Outlet>
            <div>
              <Slider></Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="home-testimonials-two mb-5">
        <div className="items">
          <div className="text mb-5">
            <span>Review</span>
            <h2>Client Testimonials</h2>
          </div>
          <div className="d-flex gap-4">
            {/* start */}
            <div className="user">
              <img className="img-fluid" src={userimg} alt="" />
              <h2>Johan Smith</h2>
              <p>Founder</p>
            </div>
            {/* end */}
            {/* start */}
            <div className="user">
              <img className="img-fluid" src={userimg} alt="" />
              <h2>Johan Smith</h2>
              <p>Founder</p>
            </div>
            {/* end */}
            {/* start */}
            <div className="user">
              <img className="img-fluid" src={userimg} alt="" />
              <h2>Johan Smith</h2>
              <p>Founder</p>
            </div>
            {/* end */}
            {/* start */}
            <div className="user">
              <img className="img-fluid" src={userimg} alt="" />
              <h2>Johan Smith</h2>
              <p>Founder</p>
            </div>
            {/* end */}
          </div>
        </div>
        <div className="bg"></div>
        <div className="bg-two"></div>
      </section>

      <section className="asked-questions">
        <div className="container">
          <>
            <div className="tittle text-center">
              <p>FAQ</p>
              <h2>Frequently Asked Questions </h2>
            </div>

            <div className="row">
              {/* item1 */}
              <div className="col-md-6">
                <div className="item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h4>What is Vistabooks?</h4>
                    </div>
                    <div>
                      <button onClick={() => sethomeclick1(!homeclick1)}>
                        {homeclick1 ? <p>-</p> : <p>+</p>}
                      </button>
                    </div>
                  </div>
                  <div className={`content ${homeclick1 ? " " : "about-hide"}`}>
                    <p>
                      Vistabooks is a SAAS based Automation platform having
                      Enterprise Solutions such as ERP, CRP, HRM Etc.
                      Vistabook’s team has 24/7 customer support to provide the
                      complete assistance, guidance, and support to the
                      customers to setup the ERP, CRM & HRM Solutions.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*1 item end */}

              {/* item2 */}
              <div className="col-md-6">
                <div className="item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h4>How is Vistabooks CRM unique?</h4>
                    </div>
                    <div>
                      <button onClick={() => sethomeclick2(!homeclick2)}>
                        {homeclick2 ? <p>-</p> : <p>+</p>}
                      </button>
                    </div>
                  </div>
                  <div className={`content ${homeclick2 ? " " : "about-hide"}`}>
                    <p>
                      With Vistabooks CRM build a good relationship with your
                      customers. Follow your leads and provide the necessary
                      support needed to close the lead through our CRM having
                      calendar and follow up options.
                    </p>
                  </div>
                </div>
              </div>
              {/*2 item end */}

              {/* item3 */}
              <div className="col-md-6">
                <div className="item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h4>Are we providing you the Setup Assistance?</h4>
                    </div>
                    <div>
                      <button onClick={() => sethomeclick3(!homeclick3)}>
                        {homeclick1 ? <p>-</p> : <p>+</p>}
                      </button>
                    </div>
                  </div>
                  <div className={`content ${homeclick3 ? " " : "about-hide"}`}>
                    <p>
                      Vistabooks will be providing you the complete support to
                      set up the System along with the maintenance. Vistabook
                      has inhouse support team who can assist and solve your
                      issues 24/7.
                    </p>
                  </div>
                </div>
              </div>
              {/*3 item end */}

              {/* item4 */}
              <div className="col-md-6">
                <div className="item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h4>Why do you need a CRM for your company?</h4>
                    </div>
                    <div>
                      <button onClick={() => sethomeclick4(!homeclick4)}>
                        {homeclick4 ? <p>-</p> : <p>+</p>}
                      </button>
                    </div>
                  </div>
                  <div className={`content ${homeclick4 ? " " : "about-hide"}`}>
                    <p>
                      CRM gives you the right data for your team to provide the
                      necessary assistance to your client in the right time.
                      With the Best CRM like Vistabooks you can capture the
                      information of the customers along with their issues and
                      comments.
                    </p>
                  </div>
                </div>
              </div>
              {/*4 item end */}

              {/* item5 */}
              <div className="col-md-6">
                <div className="item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h4>Do you need an ERP for your Company?</h4>
                    </div>
                    <div>
                      <button onClick={() => sethomeclick5(!homeclick5)}>
                        {homeclick5 ? <p>-</p> : <p>+</p>}
                      </button>
                    </div>
                  </div>
                  <div className={`content ${homeclick5 ? " " : "about-hide"}`}>
                    <p>
                      Manage the complete functions of your organization from
                      the accounting, finances, Inventories, purchases and more
                      through the best ERP SAAS based model from Vistabooks.
                    </p>
                  </div>
                </div>
              </div>
              {/*5 item end */}

              {/* item6 */}
              <div className="col-md-6">
                <div className="item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h4>Maintain your Stocks with Vistabooks ERP</h4>
                    </div>
                    <div>
                      <button onClick={() => sethomeclick6(!homeclick6)}>
                        {homeclick6 ? <p>-</p> : <p>+</p>}
                      </button>
                    </div>
                  </div>
                  <div className={`content ${homeclick6 ? " " : "about-hide"}`}>
                    <p>
                      Manage your Stocks, Inventories, Shipments Etc with
                      Vistabooks ERP Solutions. Also maintain your purchases and
                      sales through our ERP Solutions. Our Team works to support
                      and configure the required systems in the ERP solutions.
                    </p>
                  </div>
                </div>
              </div>
              {/*6 item end */}

              {/* item7 */}
              <div className="col-md-6">
                <div className="item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h4>Why do you need to choose Vistabooks HRM?</h4>
                    </div>
                    <div>
                      <button onClick={() => sethomeclick7(!homeclick7)}>
                        {homeclick7 ? <p>-</p> : <p>+</p>}
                      </button>
                    </div>
                  </div>
                  <div className={`content ${homeclick7 ? " " : "about-hide"}`}>
                    <p>
                      Streamline your complete HR process such as payroll
                      globally, managing the teams, onboarding, employee
                      retention and more with the Vistabooks HRM. Reduce the
                      Manual Works with improved efficiency through Vistabooks
                      HRM.
                    </p>
                  </div>
                </div>
              </div>
              {/*7 item end */}

              {/* item8 */}
              <div className="col-md-6">
                <div className="item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h4>Know more about the SAAS based Vistabooks Model</h4>
                    </div>
                    <div>
                      <button onClick={() => sethomeclick8(!homeclick8)}>
                        {homeclick8 ? <p>-</p> : <p>+</p>}
                      </button>
                    </div>
                  </div>
                  <div className={`content ${homeclick8 ? " " : "about-hide"}`}>
                    <p>
                      Vistabooks will be providing you the SAAS based CRM, HRM,
                      ERP Software’s at the monthly and annual subscription fee
                      with several features. Our Customer Support team is
                      available 24/7 to assist you.
                    </p>
                  </div>
                </div>
              </div>
              {/*8 item end */}
            </div>
          </>
        </div>
      </section>
      <section>
        <div className="home-contact py-5">
          <div className="text-center">
            <span>Features</span>
            <h2>Contact Us</h2>
          </div>
          <section className="section-from">
            <div className="form">
              <div className="from-content">
                <form style={{ width: "100%" }} action="">
                  <input type="text" name="" placeholder="Name" id="" />
                  <input type="email" name="" placeholder="E-mail" id="" />
                  <input type="text" name="" placeholder="Subject" id="" />
                  <textarea
                    name=""
                    placeholder="Product Discription"
                  ></textarea>
                  <input type="submit" value="Send Message" />
                </form>
              </div>
            </div>
            <div className="from-bg">
              <div></div>
            </div>
          </section>
        </div>
      </section>
      <div className="top-canva-fast"></div>
      <div className="top-canva-two"></div>
    </div>
  );
};

export default Home;
