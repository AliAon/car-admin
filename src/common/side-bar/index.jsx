import React, { useState } from "react";
import { PiQuestionBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "@/components/logo";
import { FaCar, FaHome } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FileChartColumnIncreasing } from "lucide-react";
import Needhelp from "@/components/need-help";

const menuItems = [
  {
    title: "Dashboard",
    icon: "/assets/svg/home.svg",
    link: "/dashboard",
  },
  {
    title: "Vehicle Stock",
    icon: "/assets/svg/car.svg",
    link: "/dashboard/vehicle-stock",
  },
  {
    title: "Videos Showcase",
    icon: "/assets/svg/video-doc.svg",
    link: "/dashboard/video-showcase",
  },
  {
    title: "Galery Showcase",
    icon: "/assets/svg/showcase-doc.svg",
    link: "/dashboard/galery-showcase",
  },
  {
    title: "Services",
    icon: "/assets/svg/showcase-doc.svg",
    link: "/dashboard/services",
  },
];

export default function SideBar({ open, setOpen }) {
  const router = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const active = useLocation().pathname;

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigate = (link) => {
    router(link);
    if (window.innerWidth < 450) {
      setOpen(false);
    }
  };

  return (
    <div
      className={`fixed xl:relative left-0 top-0 h-screen flex flex-col justify-between lg:shadow-[0.5px_0_15px_#00000026] transition-all bg-[#090A0C] duration-300 ease-in-out z-10 overflow-y-auto border-r border-[#DBE0E5] lg:border-r-0 ${
        open
          ? "w-[260px] p-5 xl:p-6 -translate-x-0 lg:translate-x-0"
          : "lg:w-[60px] px-2.5 py-7 -translate-x-full lg:translate-x-0"
      }`}
    >
      {/* <img
        src={"/assets/svg/left-arrow.svg"}
        alt=""
        width={30}
        height={30}
        onClick={handleDrawer}
        className={`absolute top-5 w-12 cursor-pointer lg:block hidden ${
          open ? "-right-0" : "left-1/2 -translate-x-1/2"
        }`}
      /> */}

      <div>
        <Link to={"/dashboard"} className="flex items-center justify-center">
          <div className={`justify-center ${open ? "lg:flex" : "lg:hidden"}`}>
            <Logo />
          </div>
        </Link>

        {/* <div className="relative block lg:hidden mt-5">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full h-12 border border-[#EEEEEE] rounded-full text-sm placeholder:text-[#A1A4A9] ps-12 pr-5"
          />
          <img
            src={"/assets/svg/search-icon.svg"}
            alt=""
            width={22}
            height={22}
            className="absolute top-3 left-4"
          />
        </div> */}

        <div className="mt-5 lg:mt-8">
          <ul>
            {menuItems?.map((item, index) => (
              <div
                onClick={() => handleNavigate(item.link)}
                key={index}
                className={`flex items-center text-[#636B73] group hover:text-white   hover:bg-primary gap-3 rounded cursor-pointer mt-2 ${
                  active === item.link
                    ? "bg-primary text-white "
                    : "bg-transparent text-[#636B73] "
                } ${
                  open
                    ? "px-5 py-3 lg:justify-baseline"
                    : "p-2 lg:justify-center"
                }`}
              >
                <img
                  src={item.icon}
                  alt=""
                  className={`w-4 group-hover:invert group-hover:brightness-0 ${`${
                    active === item.link ? "invert brightness-0" : ""
                  }`}`}
                />

                <p className={`text-sm  ${open ? "lg:block" : "lg:hidden"}`}>
                  {item.title}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="relative w-full block md:hidden mt-0">
          <div className="h-12 flex items-center justify-between rounded-full border border-[#EEEEEE] pl-2 pr-3">
            <div className="flex gap-2">
              <img
                src={"/assets/png/avatar.png"}
                alt="User Avatar"
                width={200}
                height={200}
                className="w-[38px] h-[38px] rounded-full"
              />
              <div>
                <p className="text-sm text-white">Administrator</p>
                <p className="text-xs text-white">Carlusion Car AG</p>
              </div>
            </div>
            <IoIosArrowDown
              size={14}
              className="cursor-pointer"
              onClick={toggleDropdown}
            />
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-full bg-white border border-[#EEEEEE] rounded-lg shadow-lg z-10">
              <ul className="text-sm text-black">
                <li className="p-2 hover:bg-gray-100 cursor-pointer border-b border-[#EEEEEE]">
                  Profile
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer border-b border-[#EEEEEE]">
                  Settings
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {open && <Needhelp />}
      <div className=" lg:block hidden absolute left-0 bottom-0">
        <div className="flex items-center gap-0">
          <img src="/assets/svg/heart-svg.svg" className="w-10" alt="" />
          {open && (
            <p className="text-xs bg-gradient-to-r from-[#B08747] to-[#61656B] bg-clip-text text-transparent font-medium ">
              Made with passion and Smatik Group
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
