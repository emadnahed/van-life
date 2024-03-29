import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import "./server";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "/components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostLayout from "/components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import Login from "./pages/Login";
import AuthRequired from "./components/AuthRequired";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/login" element={<Login />}
          />

          {/* Nested without UI sharing
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route> */}

          {/* Nested routes with the shared UI being contained in the Layout component of the Host known as HostLayout, in this way we're able to prevent the repetition of the UI efforts in the remaining pages of the host*/}

          {/* indexing of a child route with no path  ensures that the route lands on it when the parent is accessed */}
            <Route element={<AuthRequired/>}>
                <Route path="host" element={<HostLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="income" element={<Income />} />
                  <Route path="reviews" element={<Reviews />} />
                  <Route path="vans" element={<HostVans />} />            
                
                  <Route path="vans/:id" element={<HostVanDetail />} >
                    <Route index element={<HostVanInfo />} />
                    <Route path="pricing" element={<HostVanPricing />} />
                    <Route path="photos" element={<HostVanPhotos />} />
                  </Route>
                </Route>          
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
