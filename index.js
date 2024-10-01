import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./Pages/Auth/Protecting/Auth.css";
import "./Css/components/buttoun.css";
import "./Css/components/alerts.css";
import "./Css/components/loading.css";
import "./Css/components/google.css";
import "./Pages/Error/403.css";
import "../src/Pages/Website/Home.css";
import "../src/Pages/Website/NavBar.css";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './Pages/Website/About.css';
import './Pages/Website/Profile/Profile.css'
import MenuContext from "./Context/MenuContext";
import WindowContext from "./Context/WindowContext";
import CartChangerContext from "./Context/CartChangerContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WindowContext>
      <MenuContext>
        <CartChangerContext>
          <Router>
            <App />
          </Router>
        </CartChangerContext>
      </MenuContext>
    </WindowContext>
  </React.StrictMode>
);
