import React from 'react'
import './VendorsList.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function VendorsList() {


    return (
        <>

            {/* sub navbar */}

            <div className="container mt-3">

                <nav class="navbar bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand">Wedding Photogtaphers</a>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>


                {/* vendor-cards */}
            <div className='vendors-list-18'>

                <div class="vendor-card">
                    <div className="vendor-card-image">
                        <img src="https://image.wedmegood.com/resized/1000X/uploads/member/432038/1672488153_KV_1276.jpg?crop=15,170,2033,1143" />
                    </div>

                    <div class="vendor-card-info">
                        <h3 class="vendor-card-name">Akshay Photography</h3>
                        <p class="vendor-card-description">Best photogtapher in Mumbai</p>
                        <div class="vendor-card-location">
                            <img src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg" alt="Location icon" />
                            <p class="vendor-card-location-text">Mumbai</p>
                        </div>
                        <div class="vendor-card-rating">
                            <i class="fa-solid fa-star"> </i>
                            <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
                        </div>
                        <div class="vendor-card-pricing">
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                            <p class="vendor-card-pricing-text">50,000</p>
                        </div>
                    </div>
                </div>

                <div class="vendor-card">
                    <div className="vendor-card-image">
                        <img src="https://image.wedmegood.com/resized/1000X/uploads/member/432038/1672488153_KV_1276.jpg?crop=15,170,2033,1143" />
                    </div>

                    <div class="vendor-card-info">
                        <h3 class="vendor-card-name">Akshay Photography</h3>
                        <p class="vendor-card-description">Best photogtapher in Mumbai</p>
                        <div class="vendor-card-location">
                            <img src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg" alt="Location icon" />
                            <p class="vendor-card-location-text">Mumbai</p>
                        </div>
                        <div class="vendor-card-rating">
                            <i class="fa-solid fa-star"> </i>
                            <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
                        </div>
                        <div class="vendor-card-pricing">
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                            <p class="vendor-card-pricing-text">50,000</p>
                        </div>
                    </div>
                </div>


                <div class="vendor-card">
                    <div className="vendor-card-image">
                        <img src="https://image.wedmegood.com/resized/1000X/uploads/member/432038/1672488153_KV_1276.jpg?crop=15,170,2033,1143" />
                    </div>

                    <div class="vendor-card-info">
                        <h3 class="vendor-card-name">Akshay Photography</h3>
                        <p class="vendor-card-description">Best photogtapher in Mumbai</p>
                        <div class="vendor-card-location">
                            <img src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg" alt="Location icon" />
                            <p class="vendor-card-location-text">Mumbai</p>
                        </div>
                        <div class="vendor-card-rating">
                            <i class="fa-solid fa-star"> </i>
                            <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
                        </div>
                        <div class="vendor-card-pricing">
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                            <p class="vendor-card-pricing-text">50,000</p>
                        </div>
                    </div>
                </div>


                <div class="vendor-card">
                    <div className="vendor-card-image">
                        <img src="https://image.wedmegood.com/resized/1000X/uploads/member/432038/1672488153_KV_1276.jpg?crop=15,170,2033,1143" />
                    </div>

                    <div class="vendor-card-info">
                        <h3 class="vendor-card-name">Akshay Photography</h3>
                        <p class="vendor-card-description">Best photogtapher in Mumbai</p>
                        <div class="vendor-card-location">
                            <img src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg" alt="Location icon" />
                            <p class="vendor-card-location-text">Mumbai</p>
                        </div>
                        <div class="vendor-card-rating">
                            <i class="fa-solid fa-star"> </i>
                            <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
                        </div>
                        <div class="vendor-card-pricing">
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                            <p class="vendor-card-pricing-text">50,000</p>
                        </div>
                    </div>
                </div>


                <div class="vendor-card">
                    <div className="vendor-card-image">
                        <img src="https://image.wedmegood.com/resized/1000X/uploads/member/432038/1672488153_KV_1276.jpg?crop=15,170,2033,1143" />
                    </div>

                    <div class="vendor-card-info">
                        <h3 class="vendor-card-name">Akshay Photography</h3>
                        <p class="vendor-card-description">Best photogtapher in Mumbai</p>
                        <div class="vendor-card-location">
                            <img src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg" alt="Location icon" />
                            <p class="vendor-card-location-text">Mumbai</p>
                        </div>
                        <div class="vendor-card-rating">
                            <i class="fa-solid fa-star"> </i>
                            <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
                        </div>
                        <div class="vendor-card-pricing">
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                            <p class="vendor-card-pricing-text">50,000</p>
                        </div>
                    </div>
                </div>


                <div class="vendor-card">
                    <div className="vendor-card-image">
                        <img src="https://image.wedmegood.com/resized/1000X/uploads/member/432038/1672488153_KV_1276.jpg?crop=15,170,2033,1143" />
                    </div>

                    <div class="vendor-card-info">
                        <h3 class="vendor-card-name">Akshay Photography</h3>
                        <p class="vendor-card-description">Best photogtapher in Mumbai</p>
                        <div class="vendor-card-location">
                            <img src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg" alt="Location icon" />
                            <p class="vendor-card-location-text">Mumbai</p>
                        </div>
                        <div class="vendor-card-rating">
                            <i class="fa-solid fa-star"> </i>
                            <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
                        </div>
                        <div class="vendor-card-pricing">
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                            <p class="vendor-card-pricing-text">50,000</p>
                        </div>
                    </div>
                </div>





            </div>

            </div>
        </>
    )
}

export default VendorsList