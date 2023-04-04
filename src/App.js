import "./Components/UtilityDocs/utility.css"
import Navigation from "./Components/HeaderComponents/Navigation";
import Home from "./Components/HeaderComponents/Home";
import About from "./Components/BodyComponents/About";
import Skills from "./Components/BodyComponents/Skills";
import Projects from "./Components/BodyComponents/Projects";


function App() {
  return (
<>
  <Navigation/>
  <Home></Home>
  <About></About>
  <Skills></Skills>
  <Projects></Projects>
  
</>
  );
}

export default App;
