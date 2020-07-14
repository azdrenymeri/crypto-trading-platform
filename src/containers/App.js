import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Aux from "../hoc/Aux/Aux";
import "../../node_modules/uikit/dist/css/uikit.css";

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
