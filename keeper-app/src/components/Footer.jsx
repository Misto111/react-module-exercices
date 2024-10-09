import React from "react";

const date = new Date();
const currentDate = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright © {currentDate}</p>
    </footer>
  );
}

export default Footer;
