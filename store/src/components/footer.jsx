import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-white text-muted">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Shop Ease
              </h6>
              <p>
                Discover fashion for all at Shop Ease - the ultimate online store for men, women, and kids. Shop with ease, with quick delivery, secure payments, and excellent customer service!
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Website
              </h6>
              <p>
                <Link to="/" className="text-reset text-decoration-none">Home</Link>
              </p>
              <p>
                <Link to="/products" className="text-reset text-decoration-none">Products</Link>
              </p>
              <p>
                <Link to="/about" className="text-reset text-decoration-none">About</Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Help</h6>
              <p>
                <Link to="/contact" className="text-reset text-decoration-none">Contact</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-3 bg-secondary text-white">
        © 2023 Copyright: 
        <Link className="text-reset fw-bold p-2 text-decoration-none" to="/">SHOP-EASE</Link>
      </div>
    </footer>
  );
}
  
export default Footer;