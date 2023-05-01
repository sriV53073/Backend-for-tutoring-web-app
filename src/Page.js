import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact'
import Header from "./Header";
import { useAuth0, isAuthenticated} from "@auth0/auth0-react";

function Page()  {
  const { loginWithRedirect,loginWithPopup, isAuthenticated } = useAuth0();

  return ( 
  <div>
    <div><Navigation>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<AboutUs />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </Navigation>
    </div>
    <Header/>
    <Home/>
    <AboutUs/>
    <Contact/>
  </div>
  //return <button onClick={() => loginWithPopup()}>Log In With loginWithPopup</button>
  );
};

export default Page;