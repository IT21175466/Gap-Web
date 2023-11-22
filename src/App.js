import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import LoginPage from './components/LoginPage/LoginPage';
import ResetPassword from './components/FogotPassword/ResetPassword';
import EmailVerify from './components/EmailVerify/EmailVerify';
import MobileAuthentication from './components/MobileAuthentication/MobileAuthentication';
import FogotPassword from './components/FogotPassword/FogotPassword';
import VerifyMN from './components/FogotPassword/VerifyMN';
import VerifyE from './components/FogotPassword/VerifyE';
import VerificationPage from './components/Verification/VerificationPage';
import LoginPageS from './components/Student/LoginPageS';
import HomePageS from './components/Student/HomePageS';


const App=()=> {
return (

<>
{/* <Navbar />
<HomePage />
<Footer /> */}
{/* <LoginPage/> */}
{/* <ResetPassword/> */}
{/* <EmailVerify/> */}

{/* <FogotPassword/> */}
{/* <VerifyMN/> */}
{/* <VerifyE/> */}
{/* <VerificationPage/> */}
{/* <LoginPageS/> */}
<HomePageS/>

{/* <MobileAuthentication/> */}
    </>
  );
}                 

export default App;
