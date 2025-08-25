import React from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Button } from "./ui/button";

export default function Needhelp() {
  return (
    <div className="max-w-60 lg:block hidden bg-[url('/assets/jpg/image.jpg')]  bg-no-repeat bg-cover bg-center p-4 rounded-2xl flex flex-col gap-4 mb-4">
      <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded">
        <BsFillQuestionCircleFill size={20} color="#998256" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-base text-white">Need help?</h2>
        <p className="text-xs text-white">Please check our docs</p>
        <Button className="text-white text-xs bg-[#998256] hover:bg-primary-foreground mt-4">DOCUMENTATION</Button>
      </div>
    </div>
  );
}
