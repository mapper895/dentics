import React from "react";
import frame_01 from "../assets/01.png";
import frame_02 from "../assets/02.png";
import frame_03 from "../assets/03.png";
import frame_04 from "../assets/04.png";
import frame_05 from "../assets/05.png";
import frame_06 from "../assets/06.png";

const Features = () => {
  return (
    <div>
      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10 my-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row text-center md:text-left md:gap-0 gap-6 justify-between">
          <h3 className="text-3xl">
            What Makes Us More <br />
            <span className="text-4xl font-bold">Special</span>
          </h3>
          <p className="text-4xl font-bold">
            KEY <span className="text-secondary">FEATURE</span>
          </p>
        </div>
        {/* Feature */}
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="w-[300px] p-8 bg-[#F8FAFC] flex flex-col justify-center items-center text-center gap-3 border-xl rounded-3xl border-gray-300 border">
            <img src={frame_01} alt="ilustrativo" className="w-20 h-20" />
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-bold">Laser Technology</h4>
              <p className="text-gray-500">
                Worlds most advanced Diode Laser. Your treatment experience will
                be relaxing & smooth.
              </p>
            </div>
          </div>
          <div className="w-[300px] p-8 bg-[#F8FAFC] flex flex-col justify-center items-center text-center gap-3 border-xl rounded-3xl border-gray-300 border">
            <img src={frame_02} alt="ilustrativo" className="w-20 h-20" />
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-bold">Painless Injection</h4>
              <p className="text-gray-500">
                Only dental clinic in New York, USA utilising Painless Injection
                system. You will be amazed!
              </p>
            </div>
          </div>
          <div className="w-[300px] p-8 bg-[#F8FAFC] flex flex-col justify-center items-center text-center gap-3 border-xl rounded-3xl border-gray-300 border">
            <img src={frame_03} alt="ilustrativo" className="w-20 h-20" />
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-bold">Dental Implant</h4>
              <p className="text-gray-500">
                30+ years of experience in Dental Implant with specialist care.
                You will be able to chew properly again!
              </p>
            </div>
          </div>
          <div className="w-[300px] p-8 bg-[#F8FAFC] flex flex-col justify-center items-center text-center gap-3 border-xl rounded-3xl border-gray-300 border">
            <img src={frame_04} alt="ilustrativo" className="w-20 h-20" />
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-bold">3D Dental Scanner </h4>
              <p className="text-gray-500">
                One of the world’s most advanced 3D Dental Scanner with auto
                scanning only one in New York!
              </p>
            </div>
          </div>
          <div className="w-[300px] p-8 bg-[#F8FAFC] flex flex-col justify-center items-center text-center gap-3 border-xl rounded-3xl border-gray-300 border">
            <img src={frame_05} alt="ilustrativo" className="w-20 h-20" />
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-bold">Digital Smile Design</h4>
              <p className="text-gray-500">
                We help to re-design your smile and shape your teeth to create a
                customised smile for your face!
              </p>
            </div>
          </div>
          <div className="w-[300px] p-8 bg-[#F8FAFC] flex flex-col justify-center items-center text-center gap-3 border-xl rounded-3xl border-gray-300 border">
            <img src={frame_06} alt="ilustrativo" className="w-20 h-20" />
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-bold">Crown and Bridge</h4>
              <p className="text-gray-500">
                Transform you blackish gum to pinkish colour with painless,
                single appointment Laser Gum Treatment
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* C2A */}
      <div className="bg-primary flex items-center justify-center py-20">
        <div className="max-w-[700px] px-4 md:px-0 flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col gap-4 text-center text-white">
            <h2 className="text-2xl">
              Let Us Brighten{" "}
              <span className="text-4xl font-semibold">Your Smile!</span>
            </h2>
            <p className="text-base font-extralight">
              Helping patients achieve good dental health & beautiful smile is a
              privilege & responsibility. For over 30 years, we proudly provided
              the best dental experience in New York. Our comfort-first approach
              is designed to meet the needs of you & your entire family.
            </p>
          </div>
          <div className="w-[300px] py-5 border border-white rounded-3xl text-white text-center hover:bg-blue-500 cursor-pointer">
            Make an Appointment
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
