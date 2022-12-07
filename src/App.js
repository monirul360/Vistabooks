import { Route, Routes } from 'react-router-dom';
import './App.css';
import BenefitsofVistabooksCRMSoftware from './Page/BenefitsofVistabooksCRMSoftware/BenefitsofVistabooksCRMSoftware';
import HRM from './Page/HRM/HRM';
import Login from './Page/Login/Login';
import OurNews from './Page/OurNews/OurNews';
import Registration from './Page/Registration/Registration';
import SchoolERPFunctionalities from './Page/SchoolERPFunctionalities/SchoolERPFunctionalities';
import SchoolERPUseCases from './Page/SchoolERPUseCases/SchoolERPUseCases';
import Footer from './Page/Share/Footer/Footer';
import SubscriptionPage from './Page/SubscriptionPage/SubscriptionPage';
import UseCasesofVistabooksCRMSoftware from './Page/UseCasesofVistabooksCRMSoftware/UseCasesofVistabooksCRMSoftware';
import VistabooksERPBenefits from './Page/VistabooksERPBenefits/VistabooksERPBenefits';
import VistabooksERPFunctionalities from './Page/VistabooksERPFunctionalities/VistabooksERPFunctionalities';
import VistabooksERPUseCases from './Page/VistabooksERPUseCases/VistabooksERPUseCases';
import VistabooksHRMSoftwareBenefits from './Page/VistabooksHRMSoftwareBenefits/VistabooksHRMSoftwareBenefits';
import VistabooksHRMUseCases from './Page/VistabooksHRMUseCases/VistabooksHRMUseCases';
import VistabooksSchoolERPBenefits from './Page/VistabooksSchoolERPBenefits/VistabooksSchoolERPBenefits';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/subscriptionpage'
          element={<SubscriptionPage></SubscriptionPage>}>
        </Route>
        <Route
          path='/BenefitsofVistabooksCRMSoftware'
          element={<BenefitsofVistabooksCRMSoftware></BenefitsofVistabooksCRMSoftware>}
        ></Route>
        <Route path='/UseCasesofVistabooksCRMSoftware'
          element={<UseCasesofVistabooksCRMSoftware></UseCasesofVistabooksCRMSoftware>}
        ></Route>
        <Route
          path='/HRM'
          element={<HRM></HRM>}
        ></Route>
        <Route
          path='/VistabooksHRMSoftwareBenefits'
          element={<VistabooksHRMSoftwareBenefits></VistabooksHRMSoftwareBenefits>}
        ></Route>
        <Route
          path='/VistabooksHRMUseCases'
          element={<VistabooksHRMUseCases></VistabooksHRMUseCases>}
        ></Route>
        <Route
          path='/VistabooksERPFunctionalities'
          element={<VistabooksERPFunctionalities></VistabooksERPFunctionalities>}
        ></Route>
        <Route
          path='/VistabooksERPBenefits'
          element={<VistabooksERPBenefits></VistabooksERPBenefits>}
        ></Route>
        <Route
          path='/VistabooksERPUseCases'
          element={<VistabooksERPUseCases></VistabooksERPUseCases>}
        ></Route>
        <Route
          path='/SchoolERPFunctionalities'
          element={<SchoolERPFunctionalities></SchoolERPFunctionalities>}
        ></Route>
        <Route
          path='/VistabooksSchoolERPBenefits'
          element={<VistabooksSchoolERPBenefits></VistabooksSchoolERPBenefits>}
        ></Route>
        <Route
          path='/SchoolERPUseCases'
          element={<SchoolERPUseCases></SchoolERPUseCases>}
        ></Route>
        <Route
          path='/OurNews'
          element={<OurNews></OurNews>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
