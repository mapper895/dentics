import axios from "axios";

// Función para obtener la lista de doctores
export const getDoctors = async (token) => {
  try {
    const response = await axios.get(
      "https://repoapi.ordenaris.com/api/listaDoctores",
      {
        headers: {
          ordProyecto: process.env.REACT_APP_ORD_PROYECTO,
          ordCandidato: token,
        },
      }
    );
    if (response.data.success && Array.isArray(response.data.list)) {
      return response.data.list;
    } else {
      throw new Error("La respuesta no contiene una lista de doctores válida");
    }
  } catch (error) {
    console.error("Error al obtener la lista de doctores:", error);
    throw error;
  }
};
