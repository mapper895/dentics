import axios from "axios"; // Importamos axios

export const getToken = async (correo) => {
  try {
    // Usamos axios para realizar la solicitud POST
    const response = await axios.post(
      "https://repoapi.ordenaris.com/api/candidato",
      {
        correo: correo,
      },
      {
        headers: {
          ordProyecto: "a6093c23ae10457c8t0b8b298fc8b500",
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Respuesta de la API:", response.data);

    if (response.data.success && response.data.uuid) {
      return response.data.uuid;
    } else {
      throw new Error("Token no encontrado en la respuesta");
    }
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
};
