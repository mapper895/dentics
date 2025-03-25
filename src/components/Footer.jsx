import React from "react";
import logo from "../assets/logo_white.png";

const Footer = () => {
  return (
    <footer>
      {/* Footer top */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-20">
          <div className="flex flex-col gap-10 px-4 h-full md:border-r-2 border-b-2 md:border-b-0 pb-6 md:pb-0 border-white border-opacity-20">
            {/* {Logo} */}
            <div className="flex items-center">
              <img src={logo} alt="Dentics Logo" className="w-10 h-10 mr-6" />
              <span className="font-bold text-3xl text-white">Dentics</span>
            </div>
            <p className="leading-8 text-white">
              Dentics is a well-known name in dental and oral care in New York.
              The journey of this institution started in 1990
            </p>
          </div>
          <div className="flex flex-col gap-10 py-6 md:py-0 justify-center pl-4 md:border-r-2 border-b-2 md:border-b-0 border-white border-opacity-20">
            <p>We are welcoming you</p>
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-semibold">
                Want to visit our clinic?
              </h3>
              <div className="flex flex-col gap-2">
                <p>Saturday - Thursday</p>
                <p>10 am - 9pm</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pl-4 md:border-r-2 border-b-2 md:border-b-0 py-6 md:py-0 border-white border-opacity-20 gap-10">
            <h3>Important link</h3>
            <div className="grid grid-cols-2 text-sm">
              <div className="flex flex-col gap-4">
                <a href="/">Facebook</a>
                <a href="/">Twitter</a>
                <a href="/">Instagram</a>
              </div>
              <div className="flex flex-col gap-4">
                <a href="/">Career</a>
                <a href="/">Support</a>
                <a href="/">Privacy policy</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col pl-4 justify-between gap-8 pt-6 md:pt-0">
            <div className="flex flex-col gap-5">
              <p>Say hello to us</p>
              <p>hello@reallygreatsite.com</p>
            </div>
            <div className="flex flex-col gap-5">
              <p>Adress</p>
              <p>123 Anywhere St., Any City, NY 39200s</p>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-[#216583] py-6">
        <p className="text-white text-center">
          © 2001-2022, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
