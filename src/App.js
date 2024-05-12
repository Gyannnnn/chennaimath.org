import './App.css';
import Header from './Components/Navbar';
import Slider from './Components/Slider';
import Welcome from './Components/Welcome';
import Currentevents from './Components/Currentevents';

function App() {
  return (
    <>
    <Header />
    <Slider/>
    <Welcome/>
    <Currentevents/>
    </>
  );
}

export default App;
