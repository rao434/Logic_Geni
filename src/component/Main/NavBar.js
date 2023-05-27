import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const NavBar = () => {
  useEffect(() => {
    // Initialize Bootstrap dropdown
    const dropdownElements = document.querySelectorAll('.dropdown-toggle');
    dropdownElements.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = element.nextElementSibling;
        dropdownMenu.classList.toggle('show');
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target;
      const dropdownMenus = document.querySelectorAll('.dropdown-menu');
      dropdownMenus.forEach((menu) => {
        if (!menu.parentNode.contains(target)) {
          menu.classList.remove('show');
        }
      });
    });
  }, []);

  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="/" className="nav-item nav-link active">Home</a>
            <a href="about" className="nav-item nav-link">About</a>
            <a href="services" className="nav-item nav-link">Services</a>
            <a href="packageList" className="nav-item nav-link">Packages</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li><a className="dropdown-item" href="destination">Destination</a></li>
                <li><a className="dropdown-item" href="bookingForm">Booking</a></li>
                <li><a className="dropdown-item" href="team">Travel Guides</a></li>
                <li><a className="dropdown-item" href="testimonialSection">Testimonial</a></li>
                <li><a className="dropdown-item" href="notFoundPage">404 Page</a></li>
              </ul>
            </div>
            <a href="contactSection" className="nav-item nav-link">Contact</a>
          </div>
          <a href="/" className="btn btn-primary rounded-pill py-2 px-4">Register</a>
        </div>
      </nav>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
                <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{ marginTop: '7px' }}>Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;