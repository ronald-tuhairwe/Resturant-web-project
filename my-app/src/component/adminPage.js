import React, { useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import Sy from "./admd";
import NewEmployee from "./newEmployee";
import NewProd from "./newProd";
import ServedOrders from "./servedOrders";
import EmployeeList from "./employeeList";

export default function Adminpage() {

  return (
    <div
      class="bg-light"
      style={{ "margin-top": "-7px", "margin-bottom": "-7px" }}
    >
      <div class="row wrapper m-2">
        <div class="col-sm-3 border">
          <img class="img-fluid" src={`/images/admin1.jpg`} alt="..." />
          <img class="img-fluid" src={`/images/admin2.jpg`} alt="..." />
          <img class="img-fluid" src={`/images/admin3.jpg`} alt="..." />
         <p>this is from S3</p>
          <img class="img-fluid" src={`https://ronaldrest.s3.amazonaws.com/images/jav3.jpg`} alt="..." />
        </div>

        <div
          class="col-sm-9"
          style={{
            background: "transparent url('/images/admin10.jpg') ",
          }}
        >
          <nav class="p-3">
            <button type="button" class="btn btn-primary ms-2 ">
              {" "}
              <Link class="text-white" to="/newprod">
                NewProd
              </Link>
            </button>
            <button type="button" class="btn btn-primary ms-2">
              <Link class="text-white" to="/newEmployee">
                newEmployee
              </Link>
            </button>
            <button type="button" class="btn btn-primary ms-2">
              {" "}
              <Link class="text-white" to="/employeeList">
                EmployeeList
              </Link>
            </button>
            <button type="button" class="btn btn-primary ms-2">
              <Link class="text-white" to="/serveOrders">
                serveOrders
              </Link>
            </button>
            <button type="button" class="btn btn-primary ms-2">
              <Link class="text-white" to="/system">
                Mgt System
              </Link>
            </button>
          </nav>

          <Routes>
            <Route path="/system" element={<Sy />} />
            <Route path="/newprod" element={<NewProd />} />
            <Route path="/newEmployee" element={<NewEmployee />} />
            <Route path="/employeeList" element={<EmployeeList />} />
            <Route path="/serveOrders" element={<ServedOrders />} />
            <Route path="/*" element={"NotFound.....Try again"} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
