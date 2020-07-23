import React, {Fragment} from "react";
import { BrowserRouter } from "react-router-dom";


import Layout from "./Layout/Layout";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import "../../node_modules/bootswatch/dist/lumen/bootstrap.min.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import "../../node_modules/cryptocurrency-icons-font/dist/webfont/cryptocurrency-icons.css";
import "./App.css"

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
