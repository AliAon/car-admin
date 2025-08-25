import React from "react";
import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  console.log("AuthLayout");
  return (
    <div className="flex h-screen bg-[url('/assets/jpg/bg-car.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="sm:w-[500px] w-full   bg-[#0000008A]">
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}
