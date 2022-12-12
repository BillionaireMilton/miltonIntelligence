import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkdin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import { FloatingDiv } from '../FloatingDiv/FloatingDiv'


function Intro() {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hey! I Am </span>
                    <span>Milton Jesumbo Arogbofa</span>
                    <span>Tech Expert with high level of experience in both the nocode tech and the software engineering community</span>
                </div>
                <button className="button i-button">Engage</button>
                <div className="i-icons">
                    <a href="">
                        <img src={Github} alt="github_icon" />
                    </a>
                    <a href="">
                        <img src={Linkdin} alt="linkdin_icon" />
                    </a>
                    <a href="">
                        <img src={Instagram} alt="instagram_icon" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="vector_blue" />
                <img src={Vector2} alt="vector_yellow" />
                <img src={boy} alt="Image" />
                <img src={glassesemoji} alt="emoji" />
                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Dev' />
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1='Excellent' txt2='Designs' />
                </div>
                {/* blur divs here*/}
                <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
                <div className="blur" style={{
                    background: '#c1f5ff',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
            </div>
        </div>
    )
}

export default Intro