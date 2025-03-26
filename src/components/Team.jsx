import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TokenContext } from "../context/TokenContext";
import { getDoctors } from "../services/doctorService";

const Team = () => {
  const { token } = useContext(TokenContext);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsData = await getDoctors(token);
        setDoctors(doctorsData);
        setLoading(false);
      } catch (error) {
        console.log("Error al obtener los doctores:", error);
        setLoading(false);
      }
    };
    fetchDoctors();
  }, [token]);

  const doctorsToShow = doctors.slice(currentIndex, currentIndex + 4); // Mostramos solo 4 doctores

  // Funciones para mover a la derecha o izquierda
  const moveLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  const moveRight = () => {
    if (currentIndex + 4 < doctors.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Mientras se cargan los doctores
  }

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
        <div className="flex items-center justify-between">
          {/* Flecha izquierda */}
          <IoIosArrowBack
            size={30}
            className="cursor-pointer"
            onClick={moveLeft}
            disabled={currentIndex === 0} // Deshabilita si estamos en el primer grupo
          />

          {/* Doctores */}
          <div className="flex gap-4 overflow-hidden w-full">
            {doctorsToShow.map((doctor, index) => (
              <div
                key={index}
                className="flex-none max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[300px] flex flex-col gap-4"
              >
                <img
                  className="rounded-full object-contain p-10"
                  src={doctor.photo || "https://via.placeholder.com/150"} // Foto por defecto si no hay imagen
                  alt={doctor.name}
                />
                <div className="text-center">
                  <h4 className="text-2xl font-bold">{doctor.name}</h4>
                  <p>{doctor.specialty}</p>
                  <p className="text-gray-500">{doctor.university}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <IoIosArrowForward
            size={30}
            className="cursor-pointer"
            onClick={moveRight}
            disabled={currentIndex + 4 >= doctors.length} // Deshabilita si estamos en el último grupo
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
