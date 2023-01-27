import ReactDOM from "react-dom";
import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interests";
import Footer from "./components/Footer";
import Icons from "./components/Icons";

function App() {
  return (
    <div className="card">
      <div className="card-content">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
