/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Image from './../../../asset/About-us-img.jpg';
import './about.css'
import Slider from '../../common/Slider';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

function About() {

    return (
        <div id="about">
            <Slider title="About Us"/>
            <div className="container" >
                <div className="about" data-aos="fade-up">
                    <h1>About Us</h1>
                </div>

                <div className="about_banner">
                    <div className="about_banner_text">
                        <div>
                            <h2 data-aos="fade-up">
                                INTRODUCING THE HOUSE SPECIALTY, ALL YOU NEED IN ONE DISH
                            </h2>
                            <p data-aos="fade-up">
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo nullam.
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo nullam.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <img src={Image} alt=""></img>
                    </div>
                </div>


            </div>
            <div className="container">
                <div className="about" data-aos="fade-up">
                    <h1>Leader</h1>
                </div>
                <div className="row" style={{justifyContent: 'center'}}>
                    <div className="about_card" data-aos="fade-up">
                    <div className="about_leader">
                        <img src="https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg" alt="" />
                        <h5>Harry Pottter</h5>
                        <h6>CO-Founder & CEO</h6>

                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        </p>
                        <button>Contact Now</button>
                    </div>
                    </div>

                    <div className="about_card" data-aos="fade-up">
                    <div className="about_leader">
                        <img src="https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg" alt="" />
                        <h5>Harry Pottter</h5>
                        <h6>CO-Founder & CEO</h6>
                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        </p>
                        <button>Contact Now</button>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
