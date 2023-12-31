import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <p className="text-center fixed bottom-2 w-full font-semibold">
        Copyright {currentYear}
      </p>
    </div>
  );
};

export default Footer;
