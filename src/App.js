import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/nav/Navbar";
import Marquee from "./components/home/Marquee.js";
// import Card from "./components/ticket/Card";
import Body from "./components/ticket/Body";
import Footer from "./components/footer/Footer";
// card 

// React Functional Component (Arrow Function)
const App = () => {
  return (
    <div className="container-fluid">
      <Marquee />
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);