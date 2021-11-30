/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { useStyles } from './about.style.page';
import Image from '../../../asset/About-us-img.jpg';
import { Button, Grid } from '@material-ui/core';

function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.about}>
                    <h1>About Us</h1>
                </div>

                <div className={classes.banner}>
                    <div className={classes.text}>
                        <div>
                            <h2>
                                INTRODUCING THE HOUSE SPECIALTY, ALL YOU NEED IN ONE DISH
                            </h2>
                            <p>
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo nullam.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={Image} alt=""></img>
                    </div>
                </div>
                <h3>Location</h3>
                <div className={classes.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3818.190383402895!2d107.18647711525917!3d16.86647413839276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d16.8660815!2d107.18856679999999!4m5!1s0x3140e6ce30d89a11%3A0xb3119b8dc9019907!2zVHJp4buHdSBBbiwgVHJp4buHdSBQaG9uZywgUXXhuqNuZyBUcuG7iywgVmnhu4d0IE5hbQ!3m2!1d16.8668668!2d107.18851869999999!5e0!3m2!1svi!2s!4v1638205968840!5m2!1svi!2s" width={1200} height={500} style={{ border: 0 }} allowFullScreen loading="lazy" />
                </div>

                <div className={classes.contact}>
                    <h1>Contact</h1>
                </div>

                <div className={classes.box}>
                    <div className={classes.form}>
                        <div className={classes.boxform}>
                            <form action="" autoComplete="off">
                                <input style={{ marginRight: '5%' }} type="email" placeholder="Email"></input>
                                <input type="text" placeholder="Name"></input>
                                <textarea placeholder="Message"></textarea>
                                <Button>
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className={classes.address}>
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
        </div>
    )
}

export default About
