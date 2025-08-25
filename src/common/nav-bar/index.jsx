import { Button } from "@/components/ui/button";
import { logout } from "@/lib/features/authSlice";
import { ChevronRightIcon, Menu, MenuIcon } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
export default function Navbar({ handleDrawer, open, data }) {
  const [isOpen, setIsOpen] = useState(false);
     const user=useSelector((state)=>state.auth.user)
     const navigate=useNavigate()
     const dispatch=useDispatch()


  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handlelogout = async () => {
    localStorage.clear();
    setIsOpen(false);
    dispatch(logout());
    await navigate("/");
  };

  return (
    <div className="h-[70px] md:h-[82px] bg-[#090A0C] flex items-center justify-between shadow-lg pr-5 pl-5 py-5 lg:pr-8 lg:py-8 lg:pl-[100px] xl:pl-8">
      {/* <img
        src={"/assets/svg/left-arrow.svg"}
        alt=""
        width={30}
        height={30}
        onClick={handleDrawer}
        className={`fixed z-50 top-5 w-12 cursor-pointer lg:block hidden ${
          open ? "left-[235px]" : "left-2"
        }`}
      /> */}
      <Button
        onClick={handleDrawer}
        variant="secondary"
        size="icon"
        className={`size-8 fixed z-50 top-5 w-8  bg-primary text-white items-center justify-center h-8 hover:bg-primary-foreground cursor-pointer rounded-full lg:flex hidden transition-all duration-300 ease-in-out   ${
          open ? "left-[240px]" : "left-2"
        }`}
      >
        <ChevronRightIcon />
      </Button>
      <div className="flex flex-col">
        <p className="text-xl text-white ">Rush Cars AG</p>
        <p className="leading-7 text-white text-sm">
          Neuenkirchstrasse 10, 6020 Emmen
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-[223px] h-12 border border-[#EEEEEE] rounded-full text-sm placeholder:text-[#A1A4A9] ps-12 pr-5"
          />
          <img
            src={"/assets/svg/search-icon.svg"}
            alt=""
            width={22}
            height={22}
            className="absolute top-3 left-4"
          />
        </div> */}

        {/* <Popover>
          <PopoverTrigger asChild>
            <button variant="outline">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#EEEEEE]">
                <div className="relative">
                  <BiBell size={22} />
                  <div className="absolute -top-1 -right-1 w-[14px] h-[14px] flex items-center justify-center rounded-full bg-black text-white text-[10px]">
                    1
                  </div>
                </div>
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-96">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Notifications</h4>
              </div>
            </div>
          </PopoverContent>
        </Popover> */}
        <div
          className="relative hidden md:block cursor-pointer"
         
        >
          <div className="h-12 flex items-center justify-between rounded-full ">
            <div className="flex gap-2">
              <div>
                <p className="text-base text-white">{user?.role}</p>
                <p className="text-sm text-[#7A7E83]">{user?.name}</p>
              </div>
              <span  onClick={toggleDropdown} className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#292929] text-black text-sm shadow-lg hover:shadow-primary">
                <img
                  src="/assets/png/avatar.png"
                  className="rounded-full"
                  alt=""
                  width={40}
                  height={40}
                />
              </span>
            </div>
            {/* <IoIosArrowDown size={14} className="cursor-pointer" /> */}
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-full bg-[#242424] border border-white text-[#4F6374]   rounded-lg shadow-lg z-10">
              <ul className="text-sm ">
                <li
                  onClick={() => navigate("/dashboard/profile")}
                  className="p-2 cursor-pointer hover:bg-white rounded"
                >
                  Settings
                </li>
                <li
                  onClick={handlelogout}
                  className="p-2 cursor-pointer hover:bg-white rounded"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        <Button
          onClick={handleDrawer}
          variant="secondary"
          size="icon"
          className="cursor-pointer w-8 h-8 flex items-center justify-center rotate-180  lg:hidden"
        >
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
}
