import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="box-navbar">
          <div className="logo">
            <img src="/Logo3.png" alt="" width={50}/>
            <h1>D-LIBRARY</h1>
          </div>
          <ul className="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#buku">Buku</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li className="active">
              <a href="#daftar">Daftar</a>
            </li>
          </ul>
          <i className="fa-solid fa-bars menu-bar"></i>
        </div>
      </div>
    </div>
  );
}
