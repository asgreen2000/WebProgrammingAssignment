import './index.css'
import Slider from '../../common/Slider'
import { Button, Grid } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import {createContact} from "../../../api/services";

AOS.init()

function Contact() {

    const [data, setData] = useState({

        email: "",
        cName: "",
        phoneNumber: ""
    });

    const [statusText, setStatusText] = useState("");

    const handleOnClick = () => {

        createContact(data).then(result => {
            console.log(result.message);
            setStatusText(result.message);
        }).then(err => {});
    }

    const handleOnChange = (event) => {

       
        data[event.target.name] = event.target.value;
        setData({...data});
        
    }

    return (
        <div id="contact">
            <Slider title="Contact Now" />
            <div className="container">
                <div className="contact">
                    <h1 data-aos="fade-up">Contact <i class="far fa-envelope"></i></h1>
                    
                </div>

                <div className="contact_box">
                    <div className="contact_form">
                        <div className="contact_boxform">
                            <form action="" autoComplete="off" data-aos="fade-up">
                                <input style={{ marginRight: '5%' }} type="email" placeholder="Email" name='email'
                                    onChange={handleOnChange}
                                />
                                <input type="text" placeholder="Name" name='cName'
                                    onChange={handleOnChange}
                                />

                                <input type='text' placeholder="Phone number" name='phoneNumber'
                                    onChange={handleOnChange}
                                />
                                <br />
                                <Button onClick={handleOnClick}>
                                    SUBCRIPTION
                                </Button>
                                <p>{statusText}</p>
                            </form>
                        </div>
                    </div>
                    <div className="contact_address px-3" data-aos="fade-up">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <h4>Quang Tri</h4>
                                <p>Trieu An, Trieu Phong</p>
                                <p>nguyenthanhluan@gmail.com</p>
                                <p>0123456789</p>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>Sai Gon</h4>
                                <p>Linh Trung, Thu Duc</p>
                                <p>buihuutiendat@gmail.com</p>
                                <p>0123456789</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                


            </div>
            <div className="container">
            <h1 style={{color:' #3f63ae',marginBottom:'32px',marginTop:'32px'}} data-aos="fade-up">Location</h1>
                <div className="contact_map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3818.190383402895!2d107.18647711525917!3d16.86647413839276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d16.8660815!2d107.18856679999999!4m5!1s0x3140e6ce30d89a11%3A0xb3119b8dc9019907!2zVHJp4buHdSBBbiwgVHJp4buHdSBQaG9uZywgUXXhuqNuZyBUcuG7iywgVmnhu4d0IE5hbQ!3m2!1d16.8668668!2d107.18851869999999!5e0!3m2!1svi!2s!4v1638205968840!5m2!1svi!2s" width={'100%'} height={500} style={{ border: 0 }} allowFullScreen loading="lazy" title="Map" />
                </div>
            </div>
        </div>
    )
}

export default Contact;