import React, { createContext, useState, useEffect } from "react";
import { getToken } from "../services/authServices";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const tokenReceived = await getToken(
          "miguel.perez.perez.895@gmail.com"
        );
        setToken(tokenReceived);
      } catch (error) {
        console.error("Error al obtener el token:", error);
      }
    };

    fetchToken();
  }, []);

  return (
    <TokenContext.Provider value={{ token }}>{children}</TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
