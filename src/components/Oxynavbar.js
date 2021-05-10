import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "./navbar.css";
import { Carousel } from "bootstrap";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PaymentIntegration from "./PaymentIntegration";

function Oxynavbar() {
  return (
    <section>
      <Navbar />
      <Crousal />
      <Text />
      <br></br>
      <PaymentIntegration />
      <br></br>
      <h2 id="t2">Sun Will shine on us again <br></br>Stay Safe Stay Healthy </h2>
      <br />
      <Footer />
    </section>
  );
}
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" id="sp" href="#">
          The Spark Foundation Mission Oxygen{" "}
        </a>
        <div class="homeclass" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"></a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="https://abhijitnawale.github.io/myportfolio.github.io/">
                Abhijit Nawale
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Crousal = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://www.deccanherald.com/sites/dh/files/gallery_images/2021/04/24/2021-04-23T164632Z_174044514_RC2S1N9NKLQJ_RTRMADP_3_HEALTH-CORONAVIRUS-INDIA-HOSPITAL%281%29.JPG.jpg"
            alt="First slide"
          ></img>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://cdn.cfr.org/sites/default/files/styles/immersive_image_3_2_large_desktop_1x/public/2021-04/oxygentanks.jpg"
            alt="Second slide"
          ></img>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://cdn.pixabay.com/photo/2021/04/30/22/44/india-6219981_1280.png"
            alt="Third slide"
          ></img>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

const Text = () => {
  return (
    <div class="text">
      <br />
      <h1 id="t1">India Needs your Help</h1>
      <br></br>
      <h3 id="t3">
        Make India Breath Again , Donate in spark foundation <br></br>
        MissionOxygen
      </h3>
    </div>
  );
};

const Footer = () => {
  return (
    <footer class="bg-white">
      <div class="container py-5">
        <div class="row py-4">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img src="img/logo.png" alt="" width="180" class="mb-3" />
            <p class="font-italic text-muted">
              Every small contribition makes a difference
            </p>
            <ul class="list-inline mt-4">
              <li class="list-inline-item">
                <a href="#" target="_blank" title="twitter">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="facebook">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="instagram">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="pinterest">
                  <i class="fa fa-pinterest"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="vimeo">
                  <i class="fa fa-vimeo"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">
              The Spark Foundation
            </h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Login
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Register
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Wishlist
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Our Products
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">About</h6>
            <p class="text-muted mb-4"> created by Abhijit Nawale .</p>
            <div class="p-1 rounded border">
              <div class="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon1"
                  class="form-control border-0 shadow-0"
                />
                <div class="input-group-append">
                  <button id="button-addon1" type="submit" class="btn btn-link">
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-light">
        <div class="container text-center">
          <p class="text-muted mb-0 py-2">
            © 2021 Copyrights All rights reserved to Abhijit Nawale.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Oxynavbar;
