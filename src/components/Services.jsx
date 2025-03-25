import React from "react";
import { BsTelephone, BsCalendarCheck, BsPlusSquare } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import doctor_image from "../assets/Image.png";

const Services = () => {
  return (
    <section className="w-full">
      {/* Holder */}
      <div className="bg-primary px-4">
        <div className="max-w-7xl px-4 mx-auto py-4 md:py-10">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-centermd:items-start">
            {/* Content */}
            <div className="flex flex-col gap-2 text-white flex-1 md:text-left text-center md:w-1/2">
              <h2 className="text-3xl">How to get our service?</h2>
              <p className="text-base">Just follow these simple steps</p>
            </div>

            {/* Steps */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 md:flex-nowrap w-full md:w-1/2">
              {/* Step 1 */}
              <div className="bg-white rounded-xl flex items-center gap-2 flex-col p-4 text-center w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
                <BsTelephone size={24} />
                <p className="text-sm">Call for appointment</p>
              </div>
              {/* Step 2 */}
              <div className="bg-white rounded-xl flex items-center gap-2 flex-col p-4 text-center w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
                <BsCalendarCheck size={24} />
                <p className="text-sm">Get a Date & Serial</p>
              </div>
              {/* Step 3 */}
              <div className="bg-white rounded-xl flex items-center gap-2 flex-col p-4 text-center w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
                <BsPlusSquare size={24} />
                <p className="text-sm">Consult Your dentist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Services */}
      <div className="md:h-[600px] flex flex-col md:flex-row">
        <div className="md:w-2/5 bg-[#F8FAFC] pt-6 md:pt-0 h-full rounded-br-[100px] flex flex-col justify-center items-end">
          <div className="max-w-[512px] px-8">
            <h3 className="text-[40px] font-semibold h-[200px]">
              Always <span className="text-secondary">Lough</span> Whenever Its
              Possible
            </h3>
            <img
              src={doctor_image}
              alt="Doctor"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
        <div className="md:w-3/5 md:h-full flex items-center justify-center">
          <div className="md:max-w-[768px] flex items-center justify-center flex-col">
            <p className="text-base text-gray-500 m-8 md:m-0 md:h-[200px] md:w-[500px] w-[300px]">
              We also offer treatments that improve the appearance of your smile
              giving you the confidence boost you deserve. The process or our
              treatment below.
            </p>
            <div className="flex flex-col gap-3 md:w-[500px] w-[300px]">
              <h2 className="text-xl">WHAT WE PROVIDE</h2>
              <div className="flex flex-col md:flex-row gap-2 md:gap-0 ">
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <IoShieldCheckmarkOutline />
                    <p className="text-base">Check ups</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoShieldCheckmarkOutline />
                    <p className="text-base">Cosmetic dentistry</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoShieldCheckmarkOutline />
                    <p className="text-base">Orthodontics</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoShieldCheckmarkOutline />
                    <p className="text-base">Preventative checks</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <IoShieldCheckmarkOutline />
                    <p className="text-base">Emergencies</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoShieldCheckmarkOutline />
                    <p className="text-base">Dental implants</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoShieldCheckmarkOutline />
                    <p className="text-base">Children´s dentistry</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoShieldCheckmarkOutline />
                    <p className="text-base">Telephone consultations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
