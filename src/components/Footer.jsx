import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="box-footer">
          <div className="box">
            <h2>Buku.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam eius rerum quisquam perspiciatis obcaecati, quasi temporibus
              aperiam iusto aliquam doloremque.
            </p>
          </div>
          <div className="box">
            <h3>Menu</h3>
            <a href="#home">Home</a>
            <a href="#buku">Buku</a>
            <a href="#services">Services</a>
            <a href="#daftar">Daftar</a>
          </div>
          <div className="box">
            <p>
              &copy; Copyright by <span>Aditya rizky</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
