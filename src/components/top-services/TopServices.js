import React, { useEffect } from 'react'
import './topservices.css'
import './top-services-media.css'
import topservices1 from '../../New folder/topservices-logo-1.gif'
import topservices2 from '../../New folder/topservices-logo-2.gif'
import topservices3 from '../../New folder/topservices-seo-3.gif'
import topservices4 from '../../New folder/topservices-promotion-4.gif'
import topservices_bottom_right from '../../New folder/topservices-bottom-right.svg'
import topservices_bottom_left from '../../New folder/topservices-bottom-left.svg'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

function TopServices() {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <>
            <section className='topservices-section'>
                <div className='container'>
                    <div className='heading'>
                        <span>SERVICES WE’RE PROVIDED</span>
                        <h2>Our Top Services</h2>
                    </div>
                    <div className='services-content-row'>
                        <div className='same-col col-1' data-aos="fade-up" data-aos-duration="1000">
                            <div className='img'>
                                <img src={topservices1} alt='service-1' />

                            </div> 
                            <h2>Logo & Branding Service</h2>
                            <p>We craft memorable brand identities that connect with your target audience, laying the groundwork for a robust visual presence that defines your business.</p>
                            <Link className='button' to=''>Learn More..</Link>
                        </div>
                        <div className='same-col col-2' data-aos="fade-up" data-aos-duration="1250">
                            <div className='img'>
                                <img src={topservices2} alt='service-2' />

                            </div>
                            <h2>Website Design & Development</h2>
                            <p>We design websites with top-notch performance, combining visual excellence, user-friendly interfaces, and optimization for effective conversions.</p>
                            <Link to='' className='button'>Learn More..</Link>
                            <img src='' />
                        </div>
                        <div className='same-col col-3'  data-aos="fade-up" data-aos-duration="1500">
                            <div className='img'>
                                <img src={topservices3} alt='service-3' />

                            </div>
                            <h2>Search Engine Optimization</h2>
                            <p>We utilize a strategic SEO methodology to elevate your position to the top of search engine results pages, driving organic traffic to your website.</p>
                            <Link to='' className='button'>Learn More..</Link>
                        </div>
                        <div className='same-col col-4' data-aos="fade-up" data-aos-duration="1750">
                            <div className='img'>
                                <img src={topservices4} alt='service-4' />

                            </div>
                            <h2>Social Media Promotion</h2>
                            <p>We produce compelling content, oversee your online presence, and execute focused campaigns that yield concrete results.</p>
                            <Link className='button' to=''>Learn More..</Link>
                        </div>
                    </div>
                    <div className='svg-image'>
                        <img className='left' src={topservices_bottom_left} alt=''/>
                        <img className='right' src={topservices_bottom_right} alt=''/>
                    </div>
                    <div className='hiring-box' data-aos="zoom-in" >
                        <h2>Hire a <span>Dedicated Developer</span></h2>
                        <Link className='button' to=''>Hire Now</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopServices
