import React from 'react'
import './about.css'
import aboutimg from './photo/about-company.jpg'
import aboutimg1 from './photo/about-company1.svg'

const About = () => {
  return (
   <section className='dgmt-about'>
          <h4 data-aos='zoom-up' data-aos-duration='900'>About Us</h4>
    <div className='dgmt-container-about'>
      <div className='dgmt-about-left dgmt-about-same'>
            <div className='about-hading' >
                <h2 data-aos='fade-up' data-aos-duration='900'> Digital Growth Marketing Technology, securing its <span> position as a top player </span>among leading web and app development companies.</h2>
              <p data-aos='fade-up' data-aos-duration='930'>Digi India Solutions stands out as a pioneering force in the dynamic landscape of web and app development, consistently maintaining a leading position through continuous innovation and unwavering dedication to client satisfaction. Our success is not a coincidence; it is the outcome of our steadfast commitment to excellence and a client-focused mindset.</p>
              <p data-aos='fade-up' data-aos-duration='960'>Explore the reasons behind why individuals choose us as their preferred option for unparalleled digital solutions.</p>
            </div>

            <div className='about-contant'>
              <div className='col-1'>
                 <div className='about-icons'></div>
                 <div className='about-text'>
                  <h3 data-aos='fade-right' data-aos-duration='900'>Efficient Project Coordination</h3>
                  <p data-aos='fade-up' data-aos-duration='1000'>Our achievements are rooted in meticulous project management. We adeptly navigate intricacies through streamlined processes, guaranteeing efficiency, transparency, and timely delivery.</p>
                 </div>
              </div>

              <div className='col-1'>
                 <div className='about-icons'></div>
                 <div className='about-text'>
                  <h3 data-aos='fade-right' data-aos-duration='930'>A Committed Team of Professionals</h3>
                  <p>At the heart of our excellence is a committed team of professionals. Driven and skilled, they contribute unparalleled expertise and innovation to each project, ensuring high-quality solutions. transparency, and timely delivery.</p>
                 </div>
              </div>

              <div className='col-1'>
                 <div className='about-icons'></div>
                 <div className='about-text'>
                  <h3 data-aos='fade-right' data-aos-duration='960'>Timely Project Completion</h3>
                  <p>Meeting deadlines is more than a commitment; it's our assurance. With an unwavering emphasis on timelines, we guarantee that projects are completed within the designated time, providing clients with reliability and peace of mind.</p>
                 </div>
              </div>
            </div>

      </div>

      <div className='dgmt-about-right dgmt-about-same'>
        <div className='about-img-box'>
          <div className='about-main-img'>
            <img src={aboutimg} alt='text' />
          </div>
          <div className='about-samebox abou-box-1'></div>
          <div className='about-samebox abou-box-2'></div>
        </div>

        <div className='about-hading'>
        <h2>Let's Start a <span>New Project</span> Together</h2>
        <p>Eager to collaborate with you, our team of experts is ready to craft digital solutions tailored to help you achieve your distinct goals.</p>

        <button class="cssbuttons-io-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#fff" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
  <span>Request A Quote</span>
</button>
      </div>

      <div className='about-img-box'>
      <div className='about-main-img'>
      <img src={aboutimg1} alt='text' />
      </div>
      
          <div className='about-samebox abou-box-1'></div>
          <div className='about-samebox abou-box-2'></div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About