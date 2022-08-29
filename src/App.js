import './App.css'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navigationbar from './Components/Navbar/Navigationbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Intro />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
