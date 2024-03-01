import React from "react";
import '../App.css'

export default function services() { 
    return(
<div id="services" className="leftside">
      <h1>Tanggapan</h1>
    <from id="contact-form" method="POST">
        <label htmlFor="nama">Full Name</label>
        <input name="name" placeholder="Enter full name..." type="text" />
        <label htmlFor="email">Email</label>
        <input email="email" placeholder="Enter email..." type="email" />
        <label htmlFor="message">Message</label>
        <textarea
            rows="6"
            placeholder="Enter message"
            name="message"
            required
        >
        </textarea>
        <a href="">
        <button type="reset"> Send message</button>
        </a>
    </from>
</div>
    )
}

