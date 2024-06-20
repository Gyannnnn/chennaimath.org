import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";

function AboutUs() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default AboutUs;
