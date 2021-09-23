import { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AboutUs from "./Components/AboutUs/AboutUs";
import Architecture from "./Components/Architecture/Architecture";
import Blog from "./Components/Blogs/Blog";
import ContactUs from "./Components/ContactUs/ContactUs";
import HomePage from './Components/HomePage/HomePage';
import Interior from "./Components/Interior/Interior";
import Navbar from "./Components/Navbar/Navbar";
import ReadMore from "./Components/ServicesPage/ReadMore/ReadMore";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import Sidebar from "./Components/Sidebar/Sidebar";
import Structural from "./Components/Structural/Structural";

export const ServiceContext = createContext();

function App() {
  const [serviceInfo, setServiceInfo] = useState({});
  return (
    <ServiceContext.Provider value={[serviceInfo, setServiceInfo]}>
      <div className="main-container">
        <Navbar />
        <div className="main-body">
          <Sidebar />
          <div className="router-container">
            <Router>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/about">
                  <AboutUs />
                </Route>
                <Route path="/architecture">
                  <Architecture />
                </Route>
                <Route path="/interior">
                  <Interior />
                </Route>
                <Route path="/structural">
                  <Structural />
                </Route>
                <Route path="/services">
                  <ServicesPage />
                </Route>
                <Route path="/readMore/:keyParam">
                  <ReadMore />
                </Route>
                <Router path="/contactUs">
                  <ContactUs/>
                </Router>
                <Router path="/blog">
                  <Blog/>
                </Router>
              </Switch>

            </Router>
          </div>
        </div>
      </div>
    </ServiceContext.Provider>
  );
}

export default App;
