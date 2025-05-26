import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import SignUp from './pages/auth/signup.jsx'
import Login from './pages/auth/login.jsx'
import About from './pages/about.jsx'
import Dispatch from './pages/dispatch.jsx'
import Track from './pages/track.jsx'
import Services from './pages/services.jsx'
import Dashboard from './pages/dashboard/index.jsx'
import ShipmentHistory from './pages/shipment-history.jsx'
import { ToastContainer } from 'react-toastify';
import  Profile from './pages/profile.jsx'


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dispatch" element={<Dispatch />} />
        <Route path="/Track" element={<Track />} />
        <Route path="/Services" element={<Services />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/shipment-history' element={<ShipmentHistory />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
