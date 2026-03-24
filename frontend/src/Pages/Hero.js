import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <>
            <div className='hero-section'>
                <div className='hero-text'>
                    <h1 className='hero-name'>Hi, I'm GAGAN</h1>
                    <p className='hero-title'>AI/ML Engineer & Data Scientist</p>
                    <p className='hero-description'>Building intelligent, data-driven solutions that transform ideas into impact.</p>
                </div>
                <div className='hero-image'>
                    {/* <img src="/portfolio_image.PNG" alt="Gagan" /> */}
                </div>
            </div>
        </>
    );
}

export default Hero;
