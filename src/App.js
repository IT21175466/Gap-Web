import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ProDetailsProfileOtherUses from "./components/Professionals/ProfessionalProfileOtherUses/ProDetailsProfileOtherUses";
import Prologin from "./components/Professionals/ProLogin/Prologin";
import ProDetailsProfile from "./components/Professionals/ProfessionalProfile/ProDetailsProfile";
import ProNoDetailsProfie from "./components/Professionals/ProfessionalProfileNoDetails/ProNoDetailsProfile";
import ProHomeNotMen from "./components/Professionals/professionalHomePageNotMen/ProHomeNotMen";
import ProHome from "./components/Professionals/professionalHomePage/ProHome";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/LoginPage/LoginPage";
import ResetPassword from "./components/FogotPassword/ResetPassword";
import EmailVerify from "./components/EmailVerify/EmailVerify";
import MobileAuthentication from "./components/MobileAuthentication/MobileAuthentication";
import FogotPassword from "./components/FogotPassword/FogotPassword";
import VerifyMN from "./components/FogotPassword/VerifyMN";
import VerifyE from "./components/FogotPassword/VerifyE";
import VerificationPage from "./components/Verification/VerificationPage";
import LoginPageS from "./components/Student/LoginPageS";
import HomePageS from "./components/Student/HomePageS";
import ProProfile from "./components/Professionals/ProfileCreation/ProProfile";
import ProBankDetails from "./components/Professionals/BankDetails/ProBankDetails";

const App = () => {
  return (
    <>
      {/*<Navbar />
        <HomePage />
        <Footer /> 
        <LoginPage/> 
        <ResetPassword/> 
        <EmailVerify/> 
        <FogotPassword/> 
        <VerifyMN/> 
        <VerifyE/> 
        <VerificationPage/> 
        <LoginPageS />
        <MobileAuthentication/> */}

      {/*------------Professional------------*/}

      {/*<Prologin />
         <ProProfile/>
         
         <HomePageS />
        
         <ProHomeNotMen />
         <ProNoDetailsProfie/>
          <ProDetailsProfile/>
                <ProBankDetails />
      <Prologin />
          <ProDetailsProfileOtherUses />*/}
      <ProHome />
    </>
  );
};

export default App;
