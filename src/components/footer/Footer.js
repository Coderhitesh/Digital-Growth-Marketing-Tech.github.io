import React from 'react'
import './footer.css'
import './footer-media.css'
import logo from '../../New folder/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-same col-1'>
                            {/* <h2>Digital Growth Marketing Technology</h2> */}
                            <div className='img'>
                                <img src={logo} alt='' />
                            </div>
                            <p>DGMT Solution is a prominent digital marketing company that specializes in providing a wide array of digital marketing services, catering to businesses of all sizes to help them attain their online marketing goals.</p>
                        </div>
                        <div className='col-same col-2'>
                            <h3>Navigation</h3>
                            <nav>
                                <ul>
                                    <li><Link to=''>Home</Link></li>
                                    <li><Link to=''>About Us</Link></li>
                                    <li><Link to=''>Our Inventures</Link></li>
                                    <li><Link to=''>Our Services</Link></li>
                                    <li><Link to=''>Certificates</Link></li>
                                    <li><Link to=''>Contact Us</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col-same col-3'>
                            <h3>Our Services</h3>
                            <ul>
                                <li><Link to=''>Graphics Designing</Link></li>
                                <li><Link to=''>Website Designing</Link></li>
                                <li><Link to=''>Website Development</Link></li>
                                <li><Link to=''>App Development</Link></li>
                                <li><Link to=''>Web-App Development</Link></li>
                                <li><Link to=''>Digital Marketing</Link></li>
                                <li><Link to=''>Search Engine Optimization</Link></li>
                            </ul>
                        </div>
                        <div className='col-same col-4'>
                            <h3>Contact Us</h3>
                            <div className='mail same'>
                                <i class="ri-mail-fill"></i>
                                <div className='mail-detail detail-same'>
                                    <p>Email</p>
                                    <a href='mailto:info@dgmt.in'>info@dgmt.in</a>
                                </div>
                            </div>
                            <div className='tel same'>
                                <i class="ri-phone-fill"></i>
                                <div className='tel-detail detail-same'>
                                    <p>Phone</p>
                                    <a href='tel:+91-9717505051'>+91-9717505051</a>
                                </div>
                            </div>
                            <div className='address'>
                                <i class="ri-map-pin-fill"></i>
                                <div className='address-detail'>
                                    <h4>Address</h4>
                                    <a href='https://www.google.com/maps/place/Sukhlal+Market/@28.6983519,77.09588,17z/data=!4m10!1m2!2m1!1sPlot+No.8,+1st+Floor,+Khasra+No:4%2F2+Sukhlal+Market,+Pitampura,+Delhi+-+34!3m6!1s0x390d040136bd20c7:0x6483667c08e544d3!8m2!3d28.6983472!4d77.0984549!15sCklQbG90IE5vLjgsIDFzdCBGbG9vciwgS2hhc3JhIE5vOjQvMiBTdWtobGFsIE1hcmtldCwgUGl0YW1wdXJhLCBEZWxoaSAtIDM0kgEQY29ycG9yYXRlX29mZmljZeABAA!16s%2Fg%2F11ggr0tbcx?entry=ttu'>Plot No.8, 1st Floor, Khasra No:4/2 Sukhlal Market, Pitampura, Delhi - 34</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
