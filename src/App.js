import "./App.css";
import Header from "./Components/Navbar";
import Slider from "./Components/Slider";
import Welcome from "./Components/Welcome";
import CurrentEvents from "./Components/CurrentEvents";
import Announcements from "./Components/Announcements";
import Inspiration from "./Components/Inspiration";
import RecentUpdates from "./Components/RecentUpdates";
import Footer from "./Components/Footer";
import Credit from "./Components/Credit";
import Quote from "./Components/Quote";
import Arti from "./Components/Arti";
function App() {
  return (
    <>
      <Header />
      <Slider />
      <Welcome />
      <CurrentEvents />
      <Announcements />
      <Inspiration />
      <RecentUpdates />
      <Arti />
      <Quote />
      <Footer />
      <Credit />
    </>
  );
}

export default App;
