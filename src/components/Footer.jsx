import React from "react";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright {currentYear} Chip's Chimney </p>
      </footer>
    </div>
  );
};

export default Footer;
