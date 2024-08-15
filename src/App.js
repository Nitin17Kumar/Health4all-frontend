import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Consultant from './pages/Consultant/Consultant';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import LoginOption from './pages/Login/LoginOption';
import Yoga from './pages/Yoga/Yoga';
import DoctorDetails from './components/Doctor/DoctorDetails';
import MyAccount from './components/user-account/MyAccount';
// import MyBooking from './components/user-account/MyBooking';
import CreateRoom from './pages/Consultant/CreateRoom';

function App() {
  return (
    <>
   <Routes >
   <Route path='/' element= {<Home />} />
   <Route path='/consultants' element= {<Consultant />} />
   <Route path="/doctor/:id" element={<DoctorDetails/>} />
   <Route path='/services' element= {<Services />} />
   <Route path='/contact' element= {<Contact />} /> 
   <Route path='/login' element= {<LoginOption />} /> 
   <Route path='/yoga' element= {<Yoga />} /> 
   <Route path='/dashboard' element= {<MyAccount />} /> 
   {/* <Route path='/dashboard/booking' element= {<MyBooking />} />  */}
   <Route path='/room/:roomId' element= {<CreateRoom />} /> 
   </Routes>
    </>
  );
}

export default App;
