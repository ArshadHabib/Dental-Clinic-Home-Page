import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Body.css";

const Body = ({ images }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 2000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="container">
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                className="card-img-top fixed-size-image"
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="row justify-content-around mt-5">
        <div className="col-3">
          <div className="row card1-color">
            <div className="col-md-4 pr-0">
              <div className="card m-5 card1-color border-0">
                <div className="icon m-3">
                  <i className="fa fa-map-marker fa-lg"></i>
                </div>
              </div>
            </div>
            <div className="col-8 p-0">
              <div className="card m-4 card1-color border-0">
                <div className="card-body">
                  <p className="card-text font-weight-bold text-white">
                    Whittier
                  </p>
                  <p className="card-text font-weight-bold text-white">
                    14412 Whittier Blvd Whittier, CA 90605
                  </p>
                  <p className="card-text font-weight-bold text-white">
                    (562) 501-4648
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row card1-color">
            <div className="col-md-4 pr-0">
              <div className="card m-5 card1-color border-0">
                <div className="icon m-3">
                  <i className="fa fa-map-marker fa-lg"></i>
                </div>
              </div>
            </div>
            <div className="col-8 p-0">
              <div className="card m-4 card1-color border-0">
                <div className="card-body">
                  <p className="card-text font-weight-bold text-white">
                    Whittier
                  </p>
                  <p className="card-text font-weight-bold text-white">
                    14412 Whittier Blvd Whittier, CA 90605
                  </p>
                  <p className="card-text font-weight-bold text-white">
                    (562) 501-4648
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row card1-color">
            <div className="col-md-4 pr-0">
              <div className="card m-5 card1-color border-0">
                <div className="icon m-3">
                  <i className="fa fa-map-marker fa-lg"></i>
                </div>
              </div>
            </div>
            <div className="col-8 p-0">
              <div className="card m-4 card1-color border-0">
                <div className="card-body">
                  <p className="card-text font-weight-bold text-white">
                    Whittier
                  </p>
                  <p className="card-text font-weight-bold text-white">
                    14412 Whittier Blvd Whittier, CA 90605
                  </p>
                  <p className="card-text font-weight-bold text-white">
                    (562) 501-4648
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-5 mb-5 custom-border">
        <div className="card-body bg-grey">
          <h5 className="card-title">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
          </h5>
          <p className="card-text">
            Fusce vel tortor mi. Curabitur et maximus orci, id efficitur nunc.
            Proin ornare porta felis quis porta. Ut quis volutpat est. Aliquam
            tristique fringilla tempor. Duis luctus diam et facilisis tempor:
          </p>
          <ol className="card-text">
            <li>
              Nunc ut dictum nisl. Etiam feugiat felis sed libero porttitor, id
              lacinia purus sollicitudin. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
            </li>
            <li>
              Donec commodo urna sit amet elit convallis, in laoreet arcu
              tempor. Praesent eleifend velit eros, at luctus massa aliquet vel.
            </li>
            <li>
              Etiam sed porta ante. Donec luctus libero vel ultrices posuere.
              Duis vel metus eget lectus consequat tincidunt. Ut a est ut felis
              cursus varius. Proin ac nibh a sem vehicula aliquet quis vel
              tellus. Mauris scelerisque eget metus dictum aliquam.
            </li>
            <li>
              Proin pellentesque tincidunt lectus ut tempus. Nullam lobortis
              vehicula lectus, nec sagittis lorem volutpat eget. Donec in velit
              massa. Maecenas eu fermentum augue. Fusce tempor turpis felis, sit
              amet congue est rutrum at. Nam lobortis dui eget accumsan
              vehicula. Suspendisse et ex eros.
            </li>
            <li>
              Ut egestas viverra eros, sit amet congue justo. Suspendisse
              accumsan purus pulvinar gravida mattis.
            </li>
            <li>
              Proin venenatis egestas viverra. Nunc purus mauris, convallis
              dignissim sapien non, dignissim laoreet elit. Duis consequat
              congue diam, eget feugiat nulla dignissim sit amet.
            </li>
            <li>
              estibulum ut arcu tempor, imperdiet libero eu, pulvinar velit.
            </li>
            <li>
              Suspendisse venenatis mauris vel iaculis hendrerit. Curabitur
              mauris erat, auctor at magna sed, aliquet vulputate arcu.
            </li>
          </ol>
          <p className="card-text">
            Vestibulum tincidunt vulputate odio, eget luctus elit. Aliquam vel
            mauris ligula. Quisque massa lectus, efficitur finibus nunc sit
            amet, congue elementum lorem. Sed vel libero a nulla elementum
            pellentesque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
