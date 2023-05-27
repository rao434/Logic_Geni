import React from 'react'
import "../../App.css"

const Services = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                    <h1 className="mb-5">Our Services</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                <h5>WorldWide Tours</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the same structure for other service items */}
                    {/* ... */}
                </div>
            </div>
        </div>
    )
}

export default Services
