import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import style from "./FooterComponent.module.css";
const FooterComponent = () => {
  return (
    <footer className={style.footer}>
      <div>
        <h3 className={style.slogan}>Follow Us</h3>
        <div className={style.iconsContainer}>
          <div className={style.icons}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
          <div className={style.icons}>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          <div className={style.icons}>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className={style.rights}>
            &copy; {new Date().getFullYear()} Ecommerce Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
