module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Asegúrate de que este bloque esté configurado correctamente
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Agrega 'Inter' como fuente predeterminada para fuentes sans
      },
      colors: {
        primary: "#516EFF",
        secondary: "#FFD700",
      },
    },
  },
  plugins: [],
};
