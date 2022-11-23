import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Page/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
