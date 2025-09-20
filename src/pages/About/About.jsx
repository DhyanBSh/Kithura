import React from 'react'
import "./About.css"

export default function About() {
    return (
        <section className="about-page">
            <div className="about-hero">
                <div className="about-left">
                    <div className="about-inner">
                        <h2>
                            <link href="https://fonts.googleapis.com/css2?family=Tac+One&display=swap" rel="stylesheet" />
                            About Us
                        </h2>
                        <p>We are dedicated to bringing you the finest, authentic Kithul Treacle – a treasured natural sweetener of Sri Lanka. Crafted in limited batches with care and tradition, our mission is to preserve the purity, heritage, and taste of this golden nectar while sharing its goodness with the world.</p>

                        <h3>
                            <link href="https://fonts.googleapis.com/css2?family=Tac+One&display=swap" rel="stylesheet" />
                            Products
                        </h3>
                        <p>Pure Kithul Treacle – a golden, all-natural sweetener tapped from the majestic Kithul palm. Rich, smooth, and authentically Sri Lankan, it’s the perfect blend of tradition and taste in every drop.</p>

                        <h3>Limited Release</h3>
                        <p>Our premium Kithul treacle is crafted in <strong>small batches</strong> to maintain exceptional quality and authenticity. To ensure freshness, our online store is open for sales <strong>only 2 days</strong> each month. <strong>Check product availability</strong> and place your order promptly, as quantities are strictly limited. All orders are carefully processed and delivered <strong>within 7–10 days</strong>.</p>
                    </div>
                </div>
                <div className="about-right">
                    <img src="/assets/hero-palm.png" alt="About Us" className="about-image" />
                </div>
            </div>
        </section>
    )
}