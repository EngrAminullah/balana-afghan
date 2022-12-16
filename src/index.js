import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import NavProvider from './contexts/NavContexts';

import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <NavProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </NavProvider>


  </React.StrictMode>,
  document.getElementById("root")
);
