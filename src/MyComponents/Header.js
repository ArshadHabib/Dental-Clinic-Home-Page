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

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/" onClick={handleClick}>
                <img src={logo} alt="Logo" className="logo" />
              </a>

              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    {phoneNumbers.map((phoneNumber, index) => (
                      <div key={index} className="mr-3">
                        <div className="d-flex m-3">
                          <div className="icon m-3">
                            <div className="circle">
                              <i className="fa fa-map-marker custom-icon-color"></i>
                            </div>
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
                    <a className="nav-link" href="/" onClick={handleClick}>
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
                      href="/"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isAboutUsOpen ? "true" : "false"}
                      onClick={handleClick}
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
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        OUR TEAM
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
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
                      href="/"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isServicesOpen ? "true" : "false"}
                      onClick={handleClick}
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
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        GENERAL DENTISTRY
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        CLEANING AND PREVENTION
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        ORTHODONTICS
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        INVISALIGN® CLEAR TEETH STRAIGHTENING
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        IV CONSCIOUS SEDATION
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        COSMETIC DENTISTRY
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        COSMETIC DENTISTRY
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        PORCELAIN VENEERS
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        TEETH WHITENING
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        TEETH REPLACEMENT
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        IMPLANT DENTISTRY
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        NEW TEETH IN ONE DAY
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        FULL-MOUTH REHABILITATION
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        RESTORATIVE DENTISTRY
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        PORCELAIN CROWNS (CAPS)
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        PORCELAIN FIXED BRIDGES
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        DENTURES & PARTIAL DENTURES
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        WISDOM TEETH EXTRACTIONS
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        ROOT CANAL THERAPY
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/" onClick={handleClick}>
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
                      href="/"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isDentalOfficesOpen ? "true" : "false"}
                      onClick={handleClick}
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
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        WHITTIER
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        LAKE FOREST
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
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
                      href="/"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isSpecialOffersOpen ? "true" : "false"}
                      onClick={handleClick}
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
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        WHITTIER
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        LAKE FOREST
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        SAN CLEMENTE
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
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
                      href="/"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isPatientResourcesOpen ? "true" : "false"}
                      onClick={handleClick}
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
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        PATIENT FORMS
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        INSURANCE OPTIONS
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        PAYMENT OPTIONS
                      </a>
                      <a
                        className="nav-link dropdown-item bg-orange"
                        href="/"
                        onClick={handleClick}
                      >
                        REVIEW US
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link" onClick={handleClick}>
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
