import React, { useState } from "react";
import "./Header.css";

const Header = ({ logo, phoneNumbers }) => {
  const [isAboutUsOpen, setAboutUsOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isDentalOfficesOpen, setDentalOfficesOpen] = useState(false);
  const [isSpecialOffersOpen, setSpecialOffersOpen] = useState(false);
  const [isPatientResourcesOpen, setPatientResourcesOpen] = useState(false);

  const handleAboutUsOpen = () => {
    setAboutUsOpen(true);
    setServicesOpen(false);
    setDentalOfficesOpen(false);
    setSpecialOffersOpen(false);
    setPatientResourcesOpen(false);
  };

  const handleServicesOpen = () => {
    setServicesOpen(true);
    setAboutUsOpen(false);
    setDentalOfficesOpen(false);
    setSpecialOffersOpen(false);
    setPatientResourcesOpen(false);
  };

  const handleDentalOfficesOpen = () => {
    setServicesOpen(false);
    setAboutUsOpen(false);
    setDentalOfficesOpen(true);
    setSpecialOffersOpen(false);
    setPatientResourcesOpen(false);
  };

  const handlePatientResourcesOpen = () => {
    setServicesOpen(false);
    setAboutUsOpen(false);
    setDentalOfficesOpen(false);
    setSpecialOffersOpen(false);
    setPatientResourcesOpen(true);
  };

  const handleSpecialOffersOpen = () => {
    setServicesOpen(false);
    setAboutUsOpen(false);
    setDentalOfficesOpen(false);
    setSpecialOffersOpen(true);
    setPatientResourcesOpen(false);
  };

  const handleDropdownClose = () => {
    setAboutUsOpen(false);
    setServicesOpen(false);
    setDentalOfficesOpen(false);
    setSpecialOffersOpen(false);
    setPatientResourcesOpen(false);
  };
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" className="logo" />
              </a>

              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    {phoneNumbers.map((phoneNumber, index) => (
                      <div key={index} className="mr-3">
                        <div className="d-flex m-3">
                          <div className="icon m-3">
                            <i className="fa fa-map-marker"></i>
                          </div>
                          <div className="ml-2">
                            {phoneNumber.number}
                            <br />
                            {phoneNumber.city}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="navbar navbar-expand-lg navbar-light bg-orange">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      HOME
                    </a>
                  </li>
                  <li
                    className={`nav-item dropdown ${
                      isAboutUsOpen ? "show" : ""
                    }`}
                    onMouseEnter={handleAboutUsOpen}
                    onMouseLeave={handleDropdownClose}
                  >
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isAboutUsOpen ? "true" : "false"}
                    >
                      ABOUT US
                    </a>
                    <div
                      className={`dropdown-menu ${
                        isAboutUsOpen ? "show" : ""
                      } bg-orange`}
                      onMouseLeave={handleDropdownClose}
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        OUR TEAM
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        OUR DENTIST
                      </a>
                    </div>
                  </li>
                  <li
                    className={`nav-item dropdown ${
                      isServicesOpen ? "show" : ""
                    }`}
                    onMouseEnter={handleServicesOpen}
                    onMouseLeave={handleDropdownClose}
                  >
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isServicesOpen ? "true" : "false"}
                    >
                      SERVICES
                    </a>
                    <div
                      className={`dropdown-menu ${
                        isServicesOpen ? "show" : ""
                      } bg-orange`}
                      onMouseLeave={handleDropdownClose}
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        GENERAL DENTISTRY
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        CLEANING AND PREVENTION
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        ORTHODONTICS
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        INVISALIGN® CLEAR TEETH STRAIGHTENING
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        IV CONSCIOUS SEDATION
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        COSMETIC DENTISTRY
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        COSMETIC DENTISTRY
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        PORCELAIN VENEERS
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        TEETH WHITENING
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        TEETH REPLACEMENT
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        IMPLANT DENTISTRY
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        NEW TEETH IN ONE DAY
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        FULL-MOUTH REHABILITATION
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        RESTORATIVE DENTISTRY
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        PORCELAIN CROWNS (CAPS)
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        PORCELAIN FIXED BRIDGES
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        DENTURES & PARTIAL DENTURES
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        WISDOM TEETH EXTRACTIONS
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        ROOT CANAL THERAPY
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      TESTIMONIALS
                    </a>
                  </li>
                  <li
                    className={`nav-item dropdown ${
                      isDentalOfficesOpen ? "show" : ""
                    }`}
                    onMouseEnter={handleDentalOfficesOpen}
                    onMouseLeave={handleDropdownClose}
                  >
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isDentalOfficesOpen ? "true" : "false"}
                    >
                      DENTAL OFFICES
                    </a>
                    <div
                      className={`dropdown-menu ${
                        isDentalOfficesOpen ? "show" : ""
                      } bg-orange`}
                      onMouseLeave={handleDropdownClose}
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        WHITTIER
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        LAKE FOREST
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        SAN CLEMENTE
                      </a>
                    </div>
                  </li>
                  <li
                    className={`nav-item dropdown ${
                      isSpecialOffersOpen ? "show" : ""
                    }`}
                    onMouseEnter={handleSpecialOffersOpen}
                    onMouseLeave={handleDropdownClose}
                  >
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isSpecialOffersOpen ? "true" : "false"}
                    >
                      SPECIAL OFFERS
                    </a>
                    <div
                      className={`dropdown-menu ${
                        isSpecialOffersOpen ? "show" : ""
                      } bg-orange`}
                      onMouseLeave={handleDropdownClose}
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        WHITTIER
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        LAKE FOREST
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        SAN CLEMENTE
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        ALL OFFERS
                      </a>
                    </div>
                  </li>
                  <li
                    className={`nav-item dropdown ${
                      isPatientResourcesOpen ? "show" : ""
                    }`}
                    onMouseEnter={handlePatientResourcesOpen}
                    onMouseLeave={handleDropdownClose}
                  >
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isPatientResourcesOpen ? "true" : "false"}
                    >
                      PATIENT RESOURCES
                    </a>
                    <div
                      className={`dropdown-menu ${
                        isPatientResourcesOpen ? "show" : ""
                      } bg-orange`}
                      onMouseLeave={handleDropdownClose}
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        PATIENT FORMS
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        INSURANCE OPTIONS
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        PAYMENT OPTIONS
                      </a>
                      <a className="nav-link dropdown-item bg-orange" href="#">
                        REVIEW US
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CONTACT US
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
