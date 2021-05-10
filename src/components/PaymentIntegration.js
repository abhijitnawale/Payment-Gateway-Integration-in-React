import React from "react";

import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom";

import "./navbar.css";

function PaymentIntegration() {
  return (
    <div>
      <Pay />
    </div>
  );
}

const Pay = () => {
  return (
    <div>
      <script src="https://js.instamojo.com/v1/button.js"></script>
      <button class="donatebtn">
        <a href="https://www.instamojo.com/@deppjonny288/le60c473a244d490e9ef2209b6da86ff7/">
         <h5 id="dnte">Donate</h5> 
        </a>
      </button>
    </div>
  );
};

export default PaymentIntegration;
