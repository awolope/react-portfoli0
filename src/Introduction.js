import React from "react";
import "./Introduction.css";
export default function Introduction() {
  return (
    <div className="introdiv">
      <div className="introdiv1">
        <h3 className="introh3">Hello I am</h3>
        <h1 className="introh1">Awolope Feranmi</h1>
        <h2 className="introh2">Frontend Web Developer, Based in Nigeria</h2>
        <p className="introp">
          Welcome to my corner of the web! I'm a frontend web developer with a
          passion for creating seamless, intuitive user interfaces. Whether it's
          crafting pixel-perfect designs or diving into the latest JavaScript
          frameworks, I thrive on turning ideas into interactive digital
          experiences. Take a look around and let's build something amazing
          together!
        </p>
        <a href="/" className="button1">
          My Work
        </a>
      </div>
      <div>
        <img src="/peculiar.png" className="introimg"></img>
      </div>
    </div>
  );
}
