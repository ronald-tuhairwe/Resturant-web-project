import React from "react";
import Menu from "./menupaje";
import Oders from "./oders";
import Fullmenu from "./fullmenu";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

export default function CustomerPage() {
let item=[];

  return (
    <div
      class="bg-light"
      style={{ "margin-top": "-7px", "margin-bottom": "-7px" }}
    >
      <div class="row wrapper m-2">
        <div class="col-sm-3 border">
          <img class="img-fluid" src={`/images/jav11.jpg`} alt="..." />
          <img class="img-fluid" src={`/images/jav1.jpg`} alt="..." />
          <img class="img-fluid" src={`/images/m2.jpg`} alt="..." />
          <img class="img-fluid" src={`/images/jav3.jpg`} alt="..." />
        </div>

        <div
          class="col-sm-9 p-3"
          style={{
            background: "transparent url('/images/admin10.jpg')",
          }}
        >
          <nav>
            <button type="button" class="btn btn-primary ms-2 ">
              {" "}
              <Link class="text-white" to="/menu">
                Menu
              </Link>
            </button>
            <button type="button" class="btn btn-primary ms-2">
              <Link class="text-white" to="/orders">
                Your Orders
              </Link>
            </button>
            <button type="button" class="btn btn-primary ms-2">
              <Link class="text-white" to="/allfoods">
                All Foods
              </Link>
            </button>
          </nav>

          <Routes>
            <Route path="/menu" element={<Menu item={item}/>} />
            <Route path="/orders" element={<Oders item={item} />} />
            <Route path="/allfoods" element={<Fullmenu />} />
            <Route path="/*" element={"NotFound.....Try again"} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
