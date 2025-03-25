import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Team = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Generate 4 random profile images based on random text
    const generateImages = () => {
      const randomImages = [];
      for (let i = 1; i <= 4; i++) {
        const randomText = `user${Math.floor(Math.random() * 1000)}`;
        randomImages.push(`https://robohash.org/${randomText}`);
      }
      setImageUrls(randomImages);
    };

    generateImages();
  }, []);

  return (
    <div className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:gap-20 gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row text-center md:text-left md:gap-0 gap-6 justify-between items-center">
          <h3 className="text-3xl">
            Meet Some of Our <br />
            <span className="text-4xl font-bold">Brains</span>
          </h3>
          <p className="text-4xl font-bold">
            MEET OUR <span className="text-secondary">DOCTORS</span>
          </p>
        </div>
        {/* Team */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <IoIosArrowBack
            size={30}
            className="cursor-pointer hidden md:block"
          />
          <div className="flex flex-col md:flex-row gap-8  md:gap-20">
            {/* Doctor 1 */}
            <div className="max-w-[300px] flex flex-col gap-10">
              <img
                className="rounded-full object-contain"
                src={imageUrls[0]}
                alt="user_1"
              />
              <div className="flex flex-col gap-6 items-center text-center">
                <div className="flex flex-col gap-1">
                  <h4 className="text-2xl font-bold">Dr. Jeanette Hoff</h4>
                  <p className="text-base">Orthodontic Treatment </p>
                  <p className="text-base text-gray-500">Yale Medical School</p>
                </div>
                <div className="border border-primary text-primary w-full rounded-xl py-4 text-center hover:bg-blue-100">
                  Appointment
                </div>
              </div>
            </div>
            {/* Doctor 2 */}
            <div className="max-w-[300px] flex flex-col gap-10">
              <img
                className="rounded-full object-contain"
                src={imageUrls[1]}
                alt="user_1"
              />
              <div className="flex flex-col gap-6 items-center text-center">
                <div className="flex flex-col gap-1">
                  <h4 className="text-2xl font-bold">Dr. Jeanette Hoff</h4>
                  <p className="text-base">Orthodontic Treatment </p>
                  <p className="text-base text-gray-500">Yale Medical School</p>
                </div>
                <div className="border border-primary text-primary w-full rounded-xl py-4 text-center hover:bg-blue-100">
                  Appointment
                </div>
              </div>
            </div>
            {/* Doctor 3 */}
            <div className="max-w-[300px] flex flex-col gap-10">
              <img
                className="rounded-full object-contain"
                src={imageUrls[2]}
                alt="user_1"
              />
              <div className="flex flex-col gap-6 items-center text-center">
                <div className="flex flex-col gap-1">
                  <h4 className="text-2xl font-bold">Dr. Jeanette Hoff</h4>
                  <p className="text-base">Orthodontic Treatment </p>
                  <p className="text-base text-gray-500">Yale Medical School</p>
                </div>
                <div className="border border-primary text-primary w-full rounded-xl py-4 text-center hover:bg-blue-100">
                  Appointment
                </div>
              </div>
            </div>
            {/* Doctor 4 */}
            <div className="max-w-[300px] flex flex-col gap-10">
              <img
                className="rounded-full object-contain"
                src={imageUrls[3]}
                alt="user_1"
              />
              <div className="flex flex-col gap-6 items-center text-center">
                <div className="flex flex-col gap-1">
                  <h4 className="text-2xl font-bold">Dr. Jeanette Hoff</h4>
                  <p className="text-base">Orthodontic Treatment </p>
                  <p className="text-base text-gray-500">Yale Medical School</p>
                </div>
                <div className="border border-primary text-primary w-full rounded-xl py-4 text-center hover:bg-blue-100">
                  Appointment
                </div>
              </div>
            </div>
          </div>
          <IoIosArrowForward
            size={30}
            className="cursor-pointer hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
