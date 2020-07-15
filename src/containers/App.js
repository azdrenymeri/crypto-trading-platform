import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Aux from "../hoc/Aux/Aux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import "../../node_modules/bootswatch/dist/lumen/bootstrap.min.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import "./App.css"

function App() {
  return (
    <Aux>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Aux>
  );
}

export default App;
