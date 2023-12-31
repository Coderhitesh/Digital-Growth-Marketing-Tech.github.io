import React from 'react'
import './pricing.css'
import './pricing-media.css'
import { Link } from 'react-router-dom'

function Pricing() {
    return (
        <>
            <section className='pricing-section'>
                <div className='container'>
                    <div className='heading'>
                        <span>Our Pricing</span>
                        <h2>Packages that align with your budgetary limits.</h2>
                    </div>
                    <div className='prices-container'>
                        <div className='col-same col-1'>
                            <div className='package-name'>
                                <h3>Digital Gold Package</h3>
                                <span>DGMT Website Packages</span>
                            </div>
                            <div className='package-price'>
                                <h2><sup>₹</sup>6,999</h2>
                                <span>+ 18% GST</span>
                            </div>
                            <div className='package-services'>
                                <ul>
                                    <li><i class="ri-check-line"></i> Responsive Website</li>
                                    <li><i class="ri-check-line"></i> Own Domain</li>
                                    <li><i class="ri-check-line"></i> Mobile compatible website</li>
                                    <li><i class="ri-check-line"></i> Hosting Space + Server</li>
                                    <li><i class="ri-check-line"></i> 10 Pages website</li>
                                    <li><i class="ri-check-line"></i> Google local listing</li>
                                    <li><i class="ri-check-line"></i> SSL</li>
                                </ul>
                            </div>
                            <div className='package-order'>
                                <Link className='btn-grad-1' to=''>Order Now</Link>
                            </div>
                            <div className='contact-for-package'>
                            <a href="tel:+91-9717505052">Call us: +91-9717505052</a>
                            </div>
                        </div>
                        <div className='col-same col-2'>
                            <div className='package-name'>
                                <h3>Digital Platinum Package</h3>
                                <span>DGMT Website Packages</span>
                            </div>
                            <div className='package-price'>
                                <h2><sup>₹</sup>9,999</h2>
                                <span>+ 18% GST</span>
                            </div>
                            <div className='package-services'>
                                <ul>
                                    <li><i class="ri-check-line"></i> Responsive Website</li>
                                    <li><i class="ri-check-line"></i> Own Domain</li>
                                    <li><i class="ri-check-line"></i> Language converter</li>
                                    <li><i class="ri-check-line"></i> Mobile compatible website</li>
                                    <li><i class="ri-check-line"></i> Logo customisation</li>
                                    <li><i class="ri-check-line"></i> Digital visiting card</li>
                                    <li><i class="ri-check-line"></i> Video creation</li>
                                    <li><i class="ri-check-line"></i> Hosting Space + Server</li>
                                    <li><i class="ri-check-line"></i>  Brand Promotion on Confirmbuyers</li>
                                    <li><i class="ri-check-line"></i> 15 Pages website</li>
                                    <li><i class="ri-check-line"></i> Google local listing</li>
                                    <li><i class="ri-check-line"></i> SSL</li>
                                </ul>
                            </div>
                            <div className='package-order'>
                                <Link className='btn-grad-2' to=''>Order Now</Link>
                            </div>
                            <div className='contact-for-package'>
                            <a href="tel:+91-9717505052">Call us: +91-9717505052</a>
                            </div>
                        </div>
                        <div className='col-same col-3'>
                            <div className='package-name'>
                                <h3>Website With SMM Package</h3>
                                <span>DGMT Website Packages</span>
                            </div>
                            <div className='package-price'>
                                <h2><sup>₹</sup>15,000</h2>
                                <span>+ 18% GST</span>
                            </div>
                            <div className='package-services'>
                                <ul>
                                    <li><i class="ri-check-line"></i> Responsive Website</li>
                                    <li><i class="ri-check-line"></i> Lite Speed Fast Hosting</li>
                                    <li><i class="ri-check-line"></i> Logo customisation</li>
                                    <li><i class="ri-check-line"></i> Google Analytics Setup</li>
                                    <li><i class="ri-check-line"></i> Submit Website around 20+ Search Engines</li>
                                    <li><i class="ri-check-line"></i>  Daily Backup</li>
                                    <li><i class="ri-check-line"></i> Mobile Friendly</li>
                                    <li><i class="ri-check-line"></i> Static, Dynamic & E-commerce (All kind of websites)</li>
                                    <li><i class="ri-check-line"></i> Google Search Console Setup</li>
                                    <li><i class="ri-check-line"></i> Get your own domain i.e www.yourcompany.com/in</li>
                                    <li><i class="ri-check-line"></i> Social Media Management</li>
                                    <li><i class="ri-check-line"></i> Weekly 3 Posts (Any type)</li>
                                </ul>
                            </div>
                            <div className='package-order'>
                                <Link className='btn-grad-3' to=''>Order Now</Link>
                            </div>
                            <div className='contact-for-package'>
                            <a href="tel:+91-9717505052">Call us: +91-9717505052</a>
                            </div>
                        </div>
                        <div className='col-same col-4'>
                            <div className='package-name'>
                                <h3>Website With SEO Package</h3>
                                <span>DGMT Website Packages</span>
                            </div>
                            <div className='package-price'>
                                <h2><sup>₹</sup>85,000</h2>
                                <span>+ 18% GST</span>
                            </div>
                            <div className='package-services'>
                                <ul>
                                    <li><i class="ri-check-line"></i> Responsive Website</li>
                                    <li><i class="ri-check-line"></i> Free Domain name i.e www.yourcompany.com/in</li>
                                    <li><i class="ri-check-line"></i> 15+ Keywords research</li>
                                    <li><i class="ri-check-line"></i> Logo Customisation</li>
                                    <li><i class="ri-check-line"></i> Google Analytics Setup</li>
                                    <li><i class="ri-check-line"></i> Submit Website around 20+ Search Engine</li>
                                    <li><i class="ri-check-line"></i> Daily Backup</li>
                                    <li><i class="ri-check-line"></i> Mobile Friendly</li>
                                    <li><i class="ri-check-line"></i> Static, Dynamic & E-commerce (All kind of websites)</li>
                                    <li><i class="ri-check-line"></i> Google Search Setup</li>
                                    <li><i class="ri-check-line"></i> Local Seo i.e Google Business</li>
                                    <li><i class="ri-check-line"></i> Fully Page Optimzation</li>
                                    <li><i class="ri-check-line"></i> Page Speed (Lite Speed Technology)</li>
                                    <li><i class="ri-check-line"></i> Backlinks i.e Link Building</li>
                                    <li><i class="ri-check-line"></i> Optimized Content</li>
                                    <li><i class="ri-check-line"></i> 24*7 Days Support</li>
                                </ul>
                            </div>
                            <div className='package-order'>
                                <Link className='btn-grad-4' to=''>Order Now</Link>
                            </div>
                            <div className='contact-for-package'>
                            <a href="tel:+91-9717505052">Call us: +91-9717505052</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
