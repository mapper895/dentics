import React from "react";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import client from "../assets/client.png";

const ClientReview = () => {
  return (
    <div className="bg-primary h-max">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row md:h-[700px]">
        <img className="md:w-2/5 object-contain" src={client} alt="client" />
        <div className="md:w-3/5 h-full flex justify-center flex-col gap-12">
          <h3 className="text-4xl text-white w-full md:border-t-2 p-4 pt-8 border-t-white border-opacity-20">
            What our clients says about us
          </h3>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex">
                <BiSolidQuoteSingleLeft
                  size={60}
                  className="text-white text-opacity-20"
                />
                <BiSolidQuoteSingleLeft
                  size={60}
                  className="text-white text-opacity-20 -ml-7"
                />
              </div>
              <p className="text-white text-opacity-80 leading-8 px-4">
                I’ve seen a lot of Dentists over my lifetime because I’ve had
                some serious dental issues. But my highest praise goes to Dr.
                Jonathon Doe and his staffs . I was always very anxious going to
                the dentist but this time at Digital Implant, my experience was
                so painless and relaxed their was no discomfort whatsoever.
              </p>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-4 h-4 bg-white bg-opacity-20 rounded-full"></div>

              <div className="w-4 h-4 bg-white bg-opacity-80 rounded-full"></div>

              <div className="w-4 h-4 bg-white bg-opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
