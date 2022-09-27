import React from "react";

import * as db from "./menupaje";

export default function Oders() {

  
 

function inf(e){
  e.preventDefault()
  alert('Your order has been taken')
  window.history.back()
}


let itm=[...db.item]

console.log(itm)

  return (
    <div class="m-2 p-1">
      <h2 class="text-info">**. You ordered these stuff food .**</h2>
      
        <div class="row justify-content-center">
          {itm.map((it) => (
            <div key={it._id} class="card col-sm-4 m-3 p-1 col-2">
              <img
                class="card-img-top"
                src={`/images/${it.name}.jpg`}
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{it.name}</h5>
                <p class="card-text">{it.desp}</p>
                <p class="card-text">Price: ${it.price}</p>
              </div>

              <div class="card-footer">
                <small class="text-muted">
                  <a href="w" class="btn btn-primary">
                    Remove
                  </a>
                </small>
              </div>
            </div>
          ))}
        </div>
   

      <button type="button" class="btn btn-success justify-content-end" onClick={(e) => inf(e)}>
        submit your order
      </button>
    </div>
  );
}
