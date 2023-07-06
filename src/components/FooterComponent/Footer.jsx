import React from "react";
import "./footerStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedinIn,
//   faTwitter,
//   faGoogle,
//   faInstagram,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <header>
        <footer class="text-center text-white footer">
          <div class="container pt-4">
            <section class="mb-4">
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <FontAwesomeIcon icon="fa-brands fa-twitter" />

                <FontAwesomeIcon icon="faTwitter" />
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <FontAwesomeIcon icon="fa-brands fa-google" />
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </a>

              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
            </section>
          </div>

          <div class="text-center text-dark p-3 ">
            © 2020 Copyright:
            <a class="text-dark" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </header>
    </>
  );
}

export default Footer;
