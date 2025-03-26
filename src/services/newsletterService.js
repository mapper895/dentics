import axios from "axios";

export const subscribeToNewsletter = async (nombre, correo, token) => {
  try {
    const response = await axios.post(
      "https://repoapi.ordenaris.com/api/registrarNewsletter",
      {
        nombre: nombre,
        correo: correo,
      },
      {
        headers: {
          ordProyecto: process.env.REACT_APP_ORD_PROYECTO,
          ordCandidato: token,
        },
      }
    );

    console.log("Suscripción exitosa:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al suscribirse al newsletter:", error);
    throw error;
  }
};
