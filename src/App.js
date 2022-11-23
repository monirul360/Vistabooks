import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Page/Login/Login';
import Registration from './Page/Registration/Registration';
import Footer from './Page/Share/Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
