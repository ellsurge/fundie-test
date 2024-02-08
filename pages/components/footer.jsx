import { useEffect } from 'react';

export default function Footer() {
    useEffect(() => {
        // Any JavaScript initialization code can go here
    }, []);

    const footerContent = `
        <footer class="bg-dark">
            <div class="container">
                <div class="footer-content default-padding">
                    <div class="row">
                        <div class="equal-height col-md-4 col-sm-6 item">
                            <div class="f-item about">
                                <h4 class="widget-title">Who We Are</h4>
                                <p>
                                    With Financial Planners and Corporate Consultants spanning across the United States, we give our clients the power to take control of their financial future by delivering Professional advice on a local level, with the reassurance and support of a global operation
                                </p>
                                <ul>
                                    <li>
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-dribbble"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="equal-height col-md-2 col-sm-6 item">
                            <div class="f-item link">
                                <h4 class="widget-title">Useful Links</h4>
                                <ul>
                                    <li>
                                        <a href="privacy.html">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="solution-overview.html">Solution Overview</a>
                                    </li>
                                    <li>
                                        <a href="investors.html">Investors</a>
                                    </li>
                                    <li>
                                        <a href="trading-solution.html">Trading Solution</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="equal-height col-md-2 col-sm-6 item">
                            <div class="f-item link">
                                <h4 class="widget-title">Sitemap</h4>
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="about-us.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="investment-solution.html">What We Do</a>
                                    </li>
                                    <li>
                                        <a href="perspective.html">Perspective</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="equal-height col-md-4 col-sm-6 item">
                            <div class="f-item contact address">
                                <h4 class="widget-title">Contact Us</h4>
                                <ul>
                                    <li>
                                        <div class="icon"><i class="flaticon-location"></i></div>
                                        <span>55 Laguna St, San Francisco, CA 94102 <br> United States</span>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-call-center"></i>
                                        </div>
                                        <span>+1(415) 915-0005  </span>
                                    </li>
                                    <li>
                                        <div class="icon"><i class="flaticon-email"></i> </div>
                                        <span>support@kopherr.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom text-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <p>Copyright &copy; 2015 Kopher Investment Groups. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;

    return (
        <div dangerouslySetInnerHTML={{ __html: footerContent }} />
    );
}
