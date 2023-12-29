import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import LandingPage from './Components/LandingPage';
import MerchantLogin from './Components/MerchantLogin';
import MerchantSignup from './Components/MerchantSignup';
import MerchantHomePage from './Components/MerchantHomePage';
import MerchantUpdate from './Components/MerchantUpdate';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/merchantlogin" element={<MerchantLogin/>}></Route>
      <Route path="/merchantsignup" element={<MerchantSignup/>}></Route>
      <Route path="/merchanthomepage" element={<MerchantHomePage/>}></Route>
      <Route path='/merchantupdate' element={<MerchantUpdate/>} ></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;
