import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header id="home">
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="box-hero">
            <div className="box">
              <h1>
                PERPUSTAKAAN DIGITAL<br/>
                TANGERANG SELATAN
              </h1>
              <p>#Perbanyak Literasi Cerdaskan Generasi</p>
            </div>
            <div className="box">
              <img src="/Logo3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
