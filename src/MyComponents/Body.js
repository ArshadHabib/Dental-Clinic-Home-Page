import React from "react";
import "./Body.css";

const Body = ({ image }) => {
  return (
    <div className="container">
      <img src={image} className="card-img-top" alt="Image" />
      <div className="row justify-content-around">
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
    </div>
  );
};

export default Body;
