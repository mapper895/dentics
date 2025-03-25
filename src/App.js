import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Features from "./components/Features";
import WhoWeAre from "./components/WhoWeAre";
import Team from "./components/Team";
import ClientReview from "./components/ClientReview";
import Appointment from "./components/Appointment";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Services />
      <Features />
      <WhoWeAre />
      <Team />
      <ClientReview />
      <Appointment />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
