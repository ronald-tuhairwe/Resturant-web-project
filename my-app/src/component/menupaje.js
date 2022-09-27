import React, { useState, useEffect} from "react";
import axios from "axios";



export let item=[];

export default function Menu() {
  const [products, setproducts] = useState([]);
useEffect(()=>{
  axios
  .get("http://localhost:3000/products")
  .then((resp) => setproducts(resp.data));
},[])

  const [search, setsearch] = useState("");

  let prd = [...products];
  let src = prd.filter((it) => it.name.toLowerCase().includes(search));

 
  function Orders(id){
    item.push(prd.find((it) => it._id === id))
   // console.log(item);
  }

  return (
    <div
      style={{
        background: "transparent url('/images/rest.jpg')",
      }}
    >
      <div class="row wrapper m-2">
        <input
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search food..."
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>

        <div class="row">
          {src.map((it) => (
            <div key={it._id} class="card m-2 p-1 col-3">
              <img
                class="card-img-top"
                src={`/images/${it.name}.jpg`}
                alt="..."
              />
              <div class="card-body ">
                <h5 class="card-title">{it.name}</h5>
                <p class="card-text">{it.desp}</p>
                <p class="card-text">Price: ${it.price}</p>
              </div>

              <div class="card-footer">
                <small class="text-muted">
                  <button
                    class="btn btn-primary"
                    onClick={() => Orders(it._id)}
                  >
                    Buy me
                  </button>
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


