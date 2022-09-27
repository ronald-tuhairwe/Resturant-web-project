
import React, { useState, useEffect} from "react";
import axios from "axios";



export default function ServedOrders() {

  const [products, setproducts] = useState([]);
useEffect(()=>{
  axios
  .get("http://localhost:3000/products")
  .then((resp) => setproducts(resp.data));
},[])
let orders=products.slice(1,5);


console.log(orders)
  // function fresh(id){
  //   // e.preventDefault()

    
  //   orders=[...orders.splice(0,1)]
  // }

  

  return (
    <div>
      <h2 class="text-white m-4 p-3">**** Order Status As Of Now ****</h2>

      <div className="tr" class="row m-2">
        <ul className="tr" class="list-group list-group-light">
          {orders.map((e) => (
            <li
            key={e._id}
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="tr" class=" mb-2 w-100">
                <div className="tr" class="card">
                  <div className="tr" class="card-body">
                    <div
                      className="tr"
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div className="tr" class="d-flex align-items-center">
                        <img
                          style={{ width: "50px", height: "50px" }}
                          class="image-thumbnail"
                          src={`/images/${e.name}.jpg`}
                          alt="..."
                        />

                        <div className="tr" class="ms-3">
                          <h2 className="tr" class="fw-bold mb-1">
                            {" "}
                            OrderNum: {e.name}
                          </h2>
                          <h3 className="tr" class=" mb-1">
                            {" "}
                            Size: {e.size}
                          </h3>
                        </div>
                      </div>
                      <span
                        className="tr"
                        class="badge rounded-pill badge-warning"
                    
                      >
                        pending....
                      </span>
                      <br />
                      <span
                        className="tr"
                        class="badge rounded-pill badge-success"
                        //  onClick={() => fresh(e._id)}
                      >
                        Serve-Order
                      </span>
                    </div>
                  </div>
                  <div
                    className="tr"
                    class="card-footer border-0 bg-light p-1 d-flex justify-content-around "
                  >
                    <div
                      className="tr"
                      class="spinner-grow text-danger"
                      role="status"
                    >
                      <span className="tr" class="sr-only">
                        Loading...
                      </span>
                    </div>
                    {/* 
when you work on it it should turn to green  and pending---> served */}
                    <div
                      className="tr"
                      class="spinner-grow text-success"
                      role="status"
                    >
                      <span className="tr" class="sr-only">
                        Loading...
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
