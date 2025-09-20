import React, { useState } from 'react'
import Countdown from '../../components/Countdown/Countdown'
import "./Home.css";

const heroImg = '/assets/hero-palm.png'

export default function Home() {
    const [selected, setSelected] = useState(null)

    return (
        <section className="home-page">
            <div className="hero">
                <div className="hero-left">
                    <h1 className="hurry">
                        <link href="https://fonts.googleapis.com/css2?family=Tac+One&display=swap" rel="stylesheet" />
                        Hurry Up !
                    </h1>
                    <p className="hero-text">Our premium Kithul treacle is crafted in <strong>small batches</strong> to maintain exceptional quality and authenticity. To ensure freshness, our online store is open for sales <strong>only 2 days each month.</strong> <br></br>We invite you to <strong>check product availability</strong> and place your order promptly, as quantities are strictly limited. All orders are carefully processed and delivered <strong>within 7-10 days.</strong></p>
                    <div className="social-icons">
                        
                    </div>
                </div>
                <div className="hero-center">
                    <div className="logo-container">
                        <div className="logo-rectangle"></div>
                        <div className="logo">
                            <img src="/assets/logo-placeholder.png" alt="logo" style={{ width: 150 }} />
                        </div>
                    </div>
                    <img className="hero-image" src="/assets/home-product.png" alt="product" />
                </div>
                <div className="hero-right">
                    <img src={heroImg} alt="palm" className="palm" />
                    <Countdown />
                </div>
            </div>
        </section>
    )
}