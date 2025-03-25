import React, { useState } from "react";
import newsletter_left from "../assets/newsletter_left.png";
import newsletter_right from "../assets/newsletter_right.png";

const Newsletter = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      email,
    };

    console.log("Form data: ", formData);
  };

  return (
    <div className="bg-[#F8FAFC] py-20">
      <div className="flex justify-between max-w-7xl md:mx-auto bg-[#216583] md:rounded-3xl rounded-xl mx-4">
        <img
          src={newsletter_left}
          alt="illustration-left"
          className="hidden md:block"
        />
        <div className="h-full md:my-auto mx-4 my-10 flex flex-col gap-8">
          <h3 className="text-4xl font-semibold text-center mb-6 text-white">
            Subscribe to our newsletter
          </h3>
          <form
            onSubmit={handleSubmit}
            className="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 "
          >
            {/* Nombre */}
            <div>
              <input
                type="text"
                id="first-name"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-30 text-white placeholder-white placeholder-opacity-80"
              />
            </div>

            {/* Correo electrónico */}
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-md bg-white bg-opacity-30 text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Botón de suscripción */}
            <div className="flex justify-center sm:justify-start">
              <button
                type="submit"
                className="w-full sm:w-auto bg-white text-black py-3 px-10 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
        <img
          src={newsletter_right}
          alt="illustration-right"
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Newsletter;
