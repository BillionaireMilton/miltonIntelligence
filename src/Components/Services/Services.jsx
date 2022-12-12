import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';

const Services = () => {
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quo fugit est aperiam nulla magni accusamus
                    <br />
                    sapiente repudiandae ex laborum amet, voluptatem voluptas dolorem atque aspernatur commodi totam eius maxime?</span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur" style={{ background: '#abf1ff94' }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                {/* first card */}
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Photoshop"}
                    />
                </div>
                {/* second card */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"HTML, CSS, Javascript, React Redux, Flutter Web, PHP, CodeIgniter, Python, Django"}
                    />
                </div>
                {/* third card */}
                <div style={{ top: '12rem', left: '34rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'Mobile'}
                        detail={"Flutter"}
                    />
                </div>
                {/* fourth card */}
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'Mobile'}
                        detail={"Flutter"}
                    />
                </div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>

            </div>
        </div>
    )
}

export default Services