import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container page">
      <div>
        &copy; {currentYear} |{" "}
        <a href="www.joinimagine.com"> Imagine foundations</a>
      </div>
    </footer>
  );
}

export default Footer;
