import React, { useState } from "react";
import appointment from "../assets/appointment.png";

const Appointment = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("Dr. Pritis Barua");
  const [message, setMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (e) => {};

  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col gap-14 py-20">
      {/* Header */}
      <div className="flex justify-between items-center text-center flex-col md:flex-row gap-5 md:gap-0">
        <h2 className="text-4xl font-bold">
          MAKE AN <span className="text-secondary">APPOINTMENT</span>
        </h2>
        <h3 className="text-3xl text-center md:text-right">
          Counsult with our <br />
          <span className="text-4xl font-bold">Doctor</span>
        </h3>
      </div>
      {/* Content */}
      <div className="flex gap-14 flex-col md:flex-row items-center">
        <img
          className="w-2/5 object-contain hidden md:block"
          src={appointment}
          alt="appointment"
        />
        <form onSubmit={handleSubmit} className="md:w-3/5 space-y-6">
          {/* Fila 1: Nombre y Teléfono */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+01 (555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Fila 2: Fecha y Doctor */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="doctor"
                className="block text-sm font-medium text-gray-700"
              >
                Doctor
              </label>
              <select
                id="doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Dr. Pritis Barua</option>
                <option>Dr. John Doe</option>
                <option>Dr. Jane Smith</option>
              </select>
            </div>
          </div>

          {/* Fila 3: Mensaje */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Include a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          {/* Fila 4: Política de privacidad */}
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                checked={privacyAccepted}
                onChange={() => setPrivacyAccepted(!privacyAccepted)}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                You agree to our friendly privacy policy.
              </label>
            </div>
          </div>

          {/* Fila 5: Botón de confirmación */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-4 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
