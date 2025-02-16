import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Parallax.css';

gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
    useEffect(() => {
        gsap.to('.element', {
            scrollTrigger: {
                trigger: '.element',
                start: 'top center',
                end: 'bottom top',
                scrub: true,
            },
            x: 500,
            rotation: 360,
            duration: 3
        });
    }, []);

    return (
        <div className="parallax-container">
            <div className="parallax">
                <img src="mountain1.png" alt="Mountain 1" className="mountain-1" />
                <img src="mountain2.png" alt="Mountain 2" className="mountain-2" />
                <img src="mountain3.png" alt="Mountain 3" className="mountain-3" />
                <img src="sun.png" alt="Sun" className="sun" />
                <img src="clouds-left.png" alt="Clouds Left" className="clouds-left" />
                <img src="clouds-right.png" alt="Clouds Right" className="clouds-right" />
                <img src="clouds-bottom.png" alt="Clouds Bottom" className="clouds-bottom" />
                <img src="stars.png" alt="Stars" className="stars" />
                <div className="copy">
                    <h1>Nature</h1>
                    <span>Explore the beauty</span>
                </div>
            </div>
        </div>
    );
}

export default Parallax;
