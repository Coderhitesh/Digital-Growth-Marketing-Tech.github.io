import React from 'react'
import Slider from '../slider/Slider'
import TopServices from '../top-services/TopServices'
import Services from '../services/Services'
import Pricing from '../pricing/Pricing'
import SmallAnimation from '../smallAnimation/SmallAnimation'
import About from '../about/About'
import BigAnimation from '../bigAimation/BigAnimation'
import CircleAnimation from '../circleAnimation/CircleAnimation'
import Counter from '../counter/Counter'
import Contact from '../contact/Contact'

function Home() {
    return (
        <div>
            <Slider />
            <SmallAnimation />
            <About />
            <TopServices />
            <CircleAnimation />
            <Services />
            <Counter />
            <BigAnimation />
            <Pricing />
            <Contact />
        </div>
    )
}

export default Home
