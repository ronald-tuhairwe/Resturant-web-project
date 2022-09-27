import React, { useState } from "react";
import axios from "axios";

export default function NewEmployee() {
  const [data, setdata] = useState({
    firstname: "",

    lastname: "",

    gender: "",

    email: "",

    dob: "",

    phone: "",

    education: "",

    hobbies: [],
  });
  console.log(data);

  function handleChange(e) {
    const { name, type, checked, value } = e.target;

    setdata({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  }



  
  function post(e){
    e.preventDefault()
    axios.post("http://localhost:3000/employees", data);
    window.history.back()

  }

  return (
    <div class="container m-2 p-3  ">
      <form >
        <h2 class="text-white">Add new user</h2>
        <section>
          <div class=" m-2 p-2 border  bg-light">
            <div class="form-row ms-5">
              <div class="form-group col-md-4">
                <label htmlFor="inputEmail4">Name</label>
                <input
                  type="text"
                  required
                  name="firstname"
                  className="form-control"
                  placeholder="First Name"
                  value={data.firstname}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-4">
                <label htmlFor="inputEmail4">Lastname</label>
                <input
                  type="text"
                  required
                  name="lastname"
                  className="form-control"
                  placeholder="Last Name"
                  value={data.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-row ms-5">
              <div class="form-group col-md-4">
                <label htmlFor="inputEmail4">Education</label>
                <select
                  id="inputState"
                  class="form-control"
                  name="education"
                  value={data.education}
                  form="education"
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    ...Choose Here...
                  </option>
                  <option value="High School">High school</option>
                  <option value="Collage">Collage</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>

              <div class="form-group col-md-4">
                <label htmlFor="inputEmail4">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  max="2008-12-31"
                  min="1980-12-31"
                  className="form-control"
                  placeholder="Date of Birth"
                  value={data.dob}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div class="form-row ms-5">
              <div className="form-row" class="form-group col-md-4">
                <label htmlFor="inputEmail4">Phone</label>
                <input
                  type="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                  className="form-control"
                  placeholder="123-456-7890"
                  value={data.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row" class="form-group col-md-4">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={data.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div class="form-row ms-5">
              <div className="form-row" class="form-group col-md-4 ">
                <label htmlFor="inputEmail4">Gender</label>
                <div class="col-sm-10">
                  <div class="form-check ms-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value={data.gender === "Male"}
                      //checked={data.gender === "Male"}
                      onChange={handleChange}
                    />
                    Male
                  </div>
                  <div class="form-check ms-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      value={data.gender === "Female"}
                      // checked={data.gender === "Female"}
                      onChange={handleChange}
                    />
                    Female
                  </div>
                  <div class="form-check ms-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      value={data.gender === "others"}
                      // checked={data.gender === "others"}
                      onChange={handleChange}
                    />
                    Others
                  </div>
                </div>
              </div>

              <div className="form-row" class="form-group col-md-4">
                <div class="container mt-3">
                  <label className="th">Hobbies</label>

                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="check1"
                      name="Football"
                      value={data.hobbies === "Football"}
                      //checked={data.hobbies === "Football"}
                      onChange={handleChange}
                    />
                    <label class="form-check-label" for="check2">
                      Football
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="check1"
                      name="Movies"
                      value={data.hobbies === "Movies"}
                      //checked={data.hobbies === "Movies"}
                      onChange={handleChange}
                    />
                    <label class="form-check-label" for="check2">
                      Movies
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="check1"
                      name="Soccer"
                      value={data.hobbies === "Soccer"}
                      // checked={data.hobbies === "Soccer"}
                      onChange={handleChange}
                    />
                    <label class="form-check-label" for="check2">
                      Soccer
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="row ms-5">
              <div class=" col-md-6">
                <button
                  type="submit"
                  class="btn btn-primary col-md-6"
                  onClick={post}
                >
                  Add New Employee
                </button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
