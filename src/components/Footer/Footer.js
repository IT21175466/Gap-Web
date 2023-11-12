
import React from 'react'
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <><div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 footer-column">
                            <h3>Logo</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 footer-column">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 footer-column">
                            <h3>Contact</h3>

                        </div>
                        <div class="row">
                            <div class="col-md-8"></div>
                            <div class="col item social">
                                <a href="#"><i class="icon ion-social-facebook"></i></a>
                                <a href="#"><i class="icon ion-social-twitter"></i></a>
                                <a href="#"><i class="icon ion-social-snapchat"></i></a>
                                <a href="#"><i class="icon ion-social-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <hr class="mb-3"></hr>
                    <p className="text-center">
                        Your Gateway To Success!
                        <br />
                        2023 | Generation Alpha | All Rights Reserved
                    </p>
                </div>
            </footer>
        </div>
        </>
    )
}

export default Footer;