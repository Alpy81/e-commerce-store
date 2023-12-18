import React from "react";
import "./Recommonded.css";

const Recommonded = () => {
  return (
    <>
      <h2 className="recommonded-title">Recommonded</h2>
      <div className="recommonded-flex">
        <button className="btns">All Products</button>
        <button className="btns">Nike</button>
        <button className="btns">Adidas</button>
        <button className="btns">Puma</button>
        <button className="btns">Vans</button>
      </div>
    </>
  );
};

export default Recommonded;
