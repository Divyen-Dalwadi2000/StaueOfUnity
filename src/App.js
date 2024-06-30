import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import NavBar from "./components/nav/Navbar";
import Body from "./components/ticket/Body";
import Footer from "./components/footer/Footer";
import Home from './components/home/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contactus from './components/home/Contactus';
import Pagenotfound from './components/error/Pagenotfound';
import Login from './components/authentication/Login';
import Aboutsou from './components/nav/Aboutsou';
import Attractions from './components/nav/Attractions';

// React Functional Component (Arrow Function)
const App = () => {
  return (
    <div className="container-fluid p-0">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Pagenotfound />,
    children: [
      {
        path: "/lists",
        element: <Body />
      },
      {
        path: "/aboutstatue",
        element: <Aboutsou />
      },
      {
        path: "/attractions",
        element: <Attractions />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/contactus",
        element: <Contactus />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);