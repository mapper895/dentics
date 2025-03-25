import React from "react";
import who_we_are from "../assets/who_we_are.png";

const WhoWeAre = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 flex flex-col gap-10">
      {/* Header */}
      <div className="flex justify-between items-center flex-col md:flex-row gap-5 md:gap-0">
        <h2 className="text-4xl font-bold">
          WHO <span className="text-secondary">WE ARE</span>
        </h2>
        <h3 className="text-3xl text-right">
          Our Glorius <br />
          <span className="text-4xl font-bold">History</span>
        </h3>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:h-[350px] gap-14">
        <img
          className="md:w-2/5 w-full px-4 bg-white h-full object-contain"
          src={who_we_are}
          alt="history"
        />
        {/* Content */}
        <div className="bg-[#F8FAFC] md:w-3/5 w-full px-4 py-4 text-center md:text-left h-full flex justify-center flex-col gap-8 md:px-12 rounded-3xl border border-gray-200">
          <h2 className="text-2xl">Our history</h2>
          <p className="text-base text-gray-500">
            Dentics is a well-known name in dental and oral care in New York.
            The journey of this institution started in 1990 under the hands of
            Dr. Jonathon Doe, Gold Medalist of Harvard University. Dentics
            dental center has been leading the way in dental treatment in USA
            for more than 30 years in keeping with the evolution of time and the
            modernization of the era.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
