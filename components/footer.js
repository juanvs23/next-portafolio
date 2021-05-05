import React from "react";

const Footer = (props) => {
  return (
    <footer className="p-2 bg-light ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center text-dark text-light">
              &copy; Copyright {new Date().getFullYear()}
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
