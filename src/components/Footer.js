import React from "react";
import '../css/styles.css';

function Footer() {
    return (
        <footer className="footer text-center bg-success" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Килбас Павел</h4>
                       <img src="https://image.freepik.com/free-photo/american-man-sexy-brutal-man-glasses-stylish-man-casual-clothing-eyeglasses-glasses-man-protect-eyeglasses_265223-1819.jpg"
                            className="rounded-circle z-depth-0" alt="avatar image" height="55" width="65" />
                        <a className="btn btn-outline-light btn-social mx-1" href="https://vk.com/id173450797"><i
                            className="fab fa-fw fa-vk"/></a>
                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Шадура Евгений</h4>
                        <img src="https://st2.depositphotos.com/6444412/12430/i/950/depositphotos_124306218-stock-photo-portrait-of-brutal-men.jpg"
                             className="rounded-circle z-depth-0" alt="avatar image" height="55" width="65"/>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://vk.com/evgeshashadura"><i
                            className="fab fa-fw fa-vk"/></a>
                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Щербунов Даниил</h4>
                        <img src="https://img3.looper.com/img/gallery/chris-evans-shares-brutal-behind-the-scenes-pictures-from-the-gray-man/l-intro-1622220510.jpg"
                             className="rounded-circle z-depth-0" alt="avatar image" height="55" width="65"/>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://vk.com/one.sapega.nine"><i
                            className="fab fa-fw fa-vk"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
