import "./App.css";
import "./App.css";

//import React,{useState,useEffect} from 'react'

import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./login";

function App() {
  return (
    <div
      className="App"
      class="wrapper w-75"
      style={{ margin: "150px", border: "2px solid blue" }}
    >
      <BrowserRouter>
        <Routes location="/mylog">
          <Route
            path="/mylog"
            element={
              <img
                class="img-fluid d-block"
                src={`/images/header3.png`}
                alt="..."
              />
            }
          />
        </Routes>

        <Login />

        <Routes location="/mylog">
          <Route
            path="/mylog"
            element={
              <img
                class="img-fluid d-block mt-0"
                src={`/images/footer.png`}
                alt="..."
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
