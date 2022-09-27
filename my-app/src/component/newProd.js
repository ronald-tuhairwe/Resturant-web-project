import React, { useState } from "react";
import axios from "axios";


export default function NewProd() {

  const [data, setdata] = useState({
    name: "",

    price: 0,

    size: "",

    supplier: "",

    desp: "",
  });
  

  function goBack() {
    window.history.back()
  }

  function handleChange(e) {
    const { name, type, checked, value } = e.target;

    setdata({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function post(e){
    e.preventDefault()
    axios.post("http://localhost:3000/products", data);
    goBack();

  }

  return (
    <div className="wrapper" style={{ padding: "20px", margin: "20px" }}>
      <form id="wizard">
        <h2 class="text-white">Add New Product</h2>
        <section>
          <div class=" m-2 p-2 border  bg-light ">
            <div class="form-row ms-5 ">
              <div class="form-group ">
                <label htmlFor="inputEmail4">ProductName</label>
                <input
                  type="text"
                  required
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div class="form-row ms-5">
              <div className="form-row" class="form-group ">
                <label htmlFor="inputEmail4">Price</label>
                <input
                  type="text"
                  required
                  name="price"
                  className="form-control"
                  placeholder="price"
                  value={data.price}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div class="form-row ms-5">
              <div className="form-row" class="form-group ">
                <label htmlFor="inputEmail4">Size</label>
                <select
                  name="size"
                  value={data.size}
                  form="size"
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    ...Choose Here...
                  </option>
                  <option value=" Large">Large</option>
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                </select>
              </div>
            </div>

            <div class="form-row ms-5">
              <div className="form-row" class="form-group ">
                <label htmlFor="inputEmail4">Supplier</label>
                <input
                  type="text"
                  required
                  name="supplier"
                  className="form-control"
                  placeholder="Supplier.."
                  value={data.supplier}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div class="form-row ms-5">
              <div className="form-row" class="form-group ">
                <label htmlFor="inputEmail4">Description</label>
                <textarea
                  name="desp"
                  id="msg"
                  className="form-control"
                  placeholder="Product Discription..."
                  cols="50"
                  rows="4"
                  value={data.desp}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <div class="row ms-5">
              <div class=" col-md-6">
                <button type="submit" class="btn btn-primary " onClick={(e)=>post(e)}>
                  Add New Product
                </button>
              </div>
            </div>
          </div>
        </section>
      </form>
      ;
    </div>
  );
}
