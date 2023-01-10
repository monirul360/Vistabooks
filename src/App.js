import { Route, Routes } from "react-router-dom";
import "./App.css";
import BenefitsofVistabooksCRMSoftware from "./Page/BenefitsofVistabooksCRMSoftware/BenefitsofVistabooksCRMSoftware";
import HRM from "./Page/HRM/HRM";
import Login from "./Page/Login/Login";
import NewsDetails from "./Page/NewsDetails/NewsDetails";
import OurNews from "./Page/OurNews/OurNews";
import Registration from "./Page/Registration/Registration";
import SchoolERPFunctionalities from "./Page/SchoolERPFunctionalities/SchoolERPFunctionalities";
import SchoolERPUseCases from "./Page/SchoolERPUseCases/SchoolERPUseCases";
import Footer from "./Page/Share/Footer/Footer";
import SubscriptionPage from "./Page/SubscriptionPage/SubscriptionPage";
import UseCasesofVistabooksCRMSoftware from "./Page/UseCasesofVistabooksCRMSoftware/UseCasesofVistabooksCRMSoftware";
import VistabooksERPBenefits from "./Page/VistabooksERPBenefits/VistabooksERPBenefits";
import VistabooksERPFunctionalities from "./Page/VistabooksERPFunctionalities/VistabooksERPFunctionalities";
import VistabooksERPUseCases from "./Page/VistabooksERPUseCases/VistabooksERPUseCases";
import VistabooksHRMSoftwareBenefits from "./Page/VistabooksHRMSoftwareBenefits/VistabooksHRMSoftwareBenefits";
import VistabooksHRMUseCases from "./Page/VistabooksHRMUseCases/VistabooksHRMUseCases";
import VistabooksSchoolERPBenefits from "./Page/VistabooksSchoolERPBenefits/VistabooksSchoolERPBenefits";
import ContactUs from "./Page/ContactUs/ContactUs";
import Payment from "./Page/Payment/Payment";
import PaymentPage2 from "./Page/PaymentPage2/PaymentPage2";
import PaymentPage3 from "./Page/PaymentPage3/PaymentPage3";
import Home from "./Page/Home/Home";
import AboutUsPage from "./Page/AboutUsPage/AboutUsPage";
import Head from "./Page/Head/Head";
import FunctionalitiesCRM from "./Page/FunctionalitiesCRM/FunctionalitiesCRM";
import Testimonialsone from "./Page/Testimonials-1/Testimonialsone";
import Testimonialstwo from "./Page/Testimonials-1/Testimonialstwo";
import Testimonialsthree from "./Page/Testimonials-1/Testimonialsthree";
import Testimonialsfore from "./Page/Testimonials-1/Testimonialsfore";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<Testimonialsone></Testimonialsone>}></Route>
          <Route
            path="two"
            element={<Testimonialstwo></Testimonialstwo>}
          ></Route>
          <Route
            path="three"
            element={<Testimonialsthree></Testimonialsthree>}
          ></Route>
          <Route
            path="fore"
            element={<Testimonialsfore></Testimonialsfore>}
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route
          path="/subscriptionpage"
          element={<SubscriptionPage></SubscriptionPage>}
        ></Route>
        <Route
          path="/BenefitsofVistabooksCRMSoftware"
          element={
            <BenefitsofVistabooksCRMSoftware></BenefitsofVistabooksCRMSoftware>
          }
        ></Route>
        <Route
          path="/UseCasesofVistabooksCRMSoftware"
          element={
            <UseCasesofVistabooksCRMSoftware></UseCasesofVistabooksCRMSoftware>
          }
        ></Route>
        <Route path="/HRM" element={<HRM></HRM>}></Route>
        <Route
          path="/VistabooksHRMSoftwareBenefits"
          element={
            <VistabooksHRMSoftwareBenefits></VistabooksHRMSoftwareBenefits>
          }
        ></Route>
        <Route
          path="/VistabooksHRMUseCases"
          element={<VistabooksHRMUseCases></VistabooksHRMUseCases>}
        ></Route>
        <Route
          path="/VistabooksERPFunctionalities"
          element={
            <VistabooksERPFunctionalities></VistabooksERPFunctionalities>
          }
        ></Route>
        <Route
          path="/VistabooksERPBenefits"
          element={<VistabooksERPBenefits></VistabooksERPBenefits>}
        ></Route>
        <Route
          path="/VistabooksERPUseCases"
          element={<VistabooksERPUseCases></VistabooksERPUseCases>}
        ></Route>
        <Route
          path="/SchoolERPFunctionalities"
          element={<SchoolERPFunctionalities></SchoolERPFunctionalities>}
        ></Route>
        <Route
          path="/VistabooksSchoolERPBenefits"
          element={<VistabooksSchoolERPBenefits></VistabooksSchoolERPBenefits>}
        ></Route>
        <Route
          path="/SchoolERPUseCases"
          element={<SchoolERPUseCases></SchoolERPUseCases>}
        ></Route>
        <Route path="/OurNews" element={<OurNews></OurNews>}></Route>
        <Route
          path="/NewsDetails"
          element={<NewsDetails></NewsDetails>}
        ></Route>
        <Route path="/ContactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="/Payment" element={<Payment></Payment>}></Route>
        <Route
          path="/PaymentPage2"
          element={<PaymentPage2></PaymentPage2>}
        ></Route>
        <Route
          path="/PaymentPage3"
          element={<PaymentPage3></PaymentPage3>}
        ></Route>
        <Route
          path="/AboutUsPage"
          element={<AboutUsPage></AboutUsPage>}
        ></Route>
        <Route path="/head" element={<Head></Head>}></Route>
        <Route
          path="/functionalitiesCRM"
          element={<FunctionalitiesCRM></FunctionalitiesCRM>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
