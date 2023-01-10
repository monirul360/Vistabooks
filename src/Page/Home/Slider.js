import React from "react";
import img from "./../../Image/images/Slider/Image.png";
import img2 from "./../../Image/images/Slider/Image-2.png";
import img3 from "./../../Image/images/Slider/Image-1.png";
import img4 from "./../../Image/images/Slider/Image-3.png";
import { Link } from "react-router-dom";
const slider = () => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-4 py-5">
      <div>
        <button
          class="sliderprev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
      </div>
      <div
        id="carouselExampleControlsNoTouching"
        style={{ width: "100%" }}
        class="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="row">
              <div className="col-3">
                <Link to="/">
                  <img className="img-fluid" src={img} alt="" />
                </Link>
              </div>
              <div className="col-3">
                <Link to="two">
                  <img className="img-fluid" src={img2} alt="" />
                </Link>
              </div>
              <div className="col-3">
                <Link to="three">
                  <img className="img-fluid" src={img3} alt="" />
                </Link>
              </div>
              <div className="col-3">
                <Link to="fore">
                  <img className="img-fluid" src={img4} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          class="slidernext"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default slider;
