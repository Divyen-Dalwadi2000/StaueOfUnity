import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import NavBar from "./components/header/Navbar";
import Body from "./components/ticket/Body";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/header/Home';
import Contactus from './components/header/Contactus';
import List from "./components/ticket/List";
import Aboutsou from './components/header/Aboutsou';
import Attractions from "./components/header/Attractions"
import Login from './components/authentication/Login';
import Pagenotfound from './components/error/Pagenotfound';


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
      },
      {
        path: "/list/:id",
        element: <List />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
