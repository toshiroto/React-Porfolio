import React from "react";



const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="index.html">
              <span className="fa-solid fa-code" aria-hidden="true"></span>
              <span>Carlos Topete</span>
            </a>
          </h1>
        </li>
        <li>
          <a href="projects">Projects</a></li>
        <li>
          <a href="about">About</a></li>
        <li>
          <a href="contact">Contact</a></li>
        <li>
          <a href="https://www.linkedin.com/in/topete/">
            <span
               class="fa-brands fa-linkedin" aria-hidden="true">
            </span>
            <span class="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/toshiroto">
            <span
              className="fa-brands fa-github-square" aria-hidden="true">
            </span>
            <span class="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.dropbox.com/s/ula83koppq1z6o0/_Carlos%20Topete%20Resume%20-%20Education%20First.pdf?dl=0" class="button">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
