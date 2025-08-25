/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Loader from "@/common/loader";
import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  useLazyGetUserProfileQuery,
  useUserLoginMutation,
} from "@/lib/services/auth-api";
import { useDispatch } from "react-redux";
import { authuser, isLogin, usertoken } from "@/lib/features/authSlice";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const [login, { isLoading }] = useUserLoginMutation();
  const [GetUserProfile] = useLazyGetUserProfileQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      email: formData.email,
      password: formData.password,
    })
      .unwrap()
      .then(async (res) => {
        if (res) {
          localStorage.setItem("token", res?.data?.accessToken);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          dispatch(authuser(res.data.user));
          dispatch(usertoken(res.data.accessToken));
          dispatch(isLogin(true));
          toast.success("Login successful");
          navigate("/dashboard");

        }
      })
      .catch((err) => {
        toast.error(err?.details);
      })
      .finally(() => {
        setFormData({
          email: "",
          password: "",
        });
      });
  };
  return (
    <>
      <div className="flex flex-col gap-8  px-14  justify-center h-screen relative">
        <img src="/assets/png/logo.png" className="w-[300px]  mr-auto" alt="" />
        <div>
          <p className="text-3xl text-white font-bold tracking-widest ">
            Welcome back!
          </p>
          <p className="leading-7  text-white">
            Enter your Credentials to access your account
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <p className="text-base leading-7  text-white ">Email address</p>

              <Input
                type="email"
                onChange={handleChange}
                name="email"
                placeholder="Enter your email"
                className="bg-transparent text-[#D9D9D9] border-[#D9D9D9] placeholder:text-[#D9D9D9]"
              />
            </div>

            <div className="mt-5">
              <div className=" w-full flex justify-between">
                <p className="text-base leading-7  text-white ">Password</p>{" "}
                {/* <Link to={"/auth/forgot-password"}> */}
                <span className="text-[#B08747] text-sm cursor-pointer">
                  Forgot Password?
                </span>
                {/* </Link> */}
              </div>
              <Input
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Enter your email"
                className="bg-transparent text-[#D9D9D9] border-[#D9D9D9] placeholder:text-[#D9D9D9]"
              />
            </div>
            <div className="mt-5 flex  gap-2">
              <div className="flex items-center gap-3">
                <Checkbox id="remember_me" className="border border-white" />
                <Label htmlFor="remember_me" className="text-white">
                  Remember for 30 days
                </Label>
              </div>{" "}
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!formData.email || !formData.password}
              className="w-full  bg-primary text-white font-semibold hover:bg-primary-foreground mt-8 cursor-pointer text-sm md:text-base disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? <Loader  /> : "Login"}
            </Button>
          </form>
          {/* <Link to={"/auth/sign-up"}>
          <p className="text-base font-semibold text-[#696F79] text-center pt-7">
            Don’t you have an account?{" "}
            <span className="text-black font-bold cursor-pointer">Signup</span>
          </p>
        </Link> */}
        </div>
        <div className=" absolute left-0 bottom-0">
          <div className="flex items-center gap-0">
            <img src="/assets/svg/heart-svg.svg" className="w-10" alt="" />
            <p className="text-sm bg-gradient-to-r from-[#B08747] to-[#61656B] bg-clip-text text-transparent font-medium ">
              Made with passion and Smatik Group
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
