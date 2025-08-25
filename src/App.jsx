import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/auth/log-in";
import "./assets/scss/style.scss";
import DashboardLayout from "./layouts/dashboard-layout";
import {
  ProtectedRouteMiddleware,
  PublicRouteMiddleware,
} from "./components/auth-gaurd";
import React from "react";

import Dashboad from "./pages/dashboard";
import VehicleStock from "./pages/dashboard/vehicle-stock";
import VideoShowcase from "./pages/dashboard/video-showcase";
import GalleryShowcase from "./pages/dashboard/gallery-showcase";
import AuthLayout from "./components/car-views/auth/auth-layout";
import Services from "./pages/dashboard/services";
export default function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flone-preloader-wrapper">
            <div className="flone-preloader">
              <span></span>
              <span></span>
            </div>
          </div>
        }
      >
        <Routes>
          <Route element={<PublicRouteMiddleware />}>
            <Route element={<AuthLayout />}>
              <Route path="/" element={<Login />} />
            </Route>
          </Route>
          {/* <Route element={<ProtectedRouteMiddleware />}> */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboad />} />
            <Route path="/dashboard/vehicle-stock" element={<VehicleStock />} />
            <Route
              path="/dashboard/video-showcase"
              element={<VideoShowcase />}
            />
            <Route
              path="/dashboard/galery-showcase"
              element={<GalleryShowcase />}
            />{" "}
            <Route path="/dashboard/services" element={<Services />} />
            <Route path="*" element={<h2>404</h2>} />
          </Route>
          {/* </Route> */}
        </Routes>
      </Suspense>
    </Router>
  );
}
