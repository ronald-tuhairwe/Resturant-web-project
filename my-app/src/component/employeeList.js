import React, { useState } from "react";
import axios from "axios";

function EmployeeList({ employees, deleteFunc }) {
  const [empl, setempl] = useState([]);

  axios
    .get("http://localhost:3000/employees")
    .then((resp) => setempl(resp.data));

  return (
    <div>
      <div class="row">
        <ul class="list-group list-group-light">
          {empl.map((e, index) => (
            <li
              key={index}
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div class=" mb-2 w-100">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="d-flex align-items-center">
                        <img
                          src={`https://mdbootstrap.com/img/new/avatars/${
                            index + 1
                          }.jpg`}
                          alt=""
                          style={{ width: "45px", height: "45px" }}
                          class="rounded-circle"
                        />
                        <div class="ms-3">
                          <p class="fw-bold mb-1">{e.firstname}</p>
                          <p class="text-muted mb-0">{e.email}</p>
                        </div>
                      </div>
                      <span class="badge rounded-pill badge-success">
                        Active
                      </span>
                    </div>
                  </div>
                  <div class="card-footer border-0 bg-light p-1 d-flex justify-content-around ">
                    <span class="badge rounded-pill badge-danger">Delete</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="primary"
                      class="bi bi-telephone-fill "
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
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

export default EmployeeList;
