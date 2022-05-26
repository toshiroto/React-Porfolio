import React from "react";


const Footer = () => {
  const date = new Date();
  let year =  date.getFullYear()
  return (
    <footer>
      <ul>
        <li>
          <h2>
            Carlos Topete &middot; Front-end Developer
          </h2>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/topete/">
            <span
               className="fa-brands fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/toshiroto">
            <span
              className="fa-brands fa-github-square" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:chtopete@gmail.com">
            <span className="fa-solid fa-envelope" aria-hidden="true"></span>
            <span className="sr-only">Email</span>
          </a>
        </li>
        <p><small>&copy; {year} Carlos Topete. All rights reserved.</small></p>
      </ul>
    </footer>
  )
}

export default Footer;
