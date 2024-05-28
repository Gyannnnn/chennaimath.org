import "./App.css";
import Header from "./Components/Navbar";
import Slider from "./Components/Slider";
import Welcome from "./Components/Welcome";
import CurrentEvents from "./Components/CurrentEvents";
import Announcements from "./Components/Announcements";
import Inspiration from "./Components/Inspiration";
import RecentUpdates from "./Components/RecentUpdates";
import Footer from "./Components/Footer";
import Quote from "./Components/Quote";
import Arti from "./Components/Arti";
import { useState } from "react";

function App() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <Slider />
      <Welcome />
      <CurrentEvents />
      <Announcements />
      <Inspiration />
      <RecentUpdates />
      <Arti />
      <Quote />
      <Footer />
    </>
  );
}

export default App;
