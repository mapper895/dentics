import axios from "axios";

// Función para crear una cita
export const createAppointment = async (
  nombre,
  telefono,
  fecha,
  doctor,
  mensaje,
  token
) => {
  try {
    const response = await axios.post(
      "https://repoapi.ordenaris.com/api/mensaje",
      {
        nombre: nombre,
        telefono: telefono,
        fecha: fecha,
        doctor: doctor,
        mensaje: mensaje,
      },
      {
        headers: {
          ordProyecto: process.env.REACT_APP_ORD_PROYECTO,
          ordCandidato: token,
        },
      }
    );

    console.log("Cita creada exitosamente:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al crear la cita:", error);
    throw error;
  }
};
