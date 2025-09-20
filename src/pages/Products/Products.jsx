import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import OrderForm from '../../components/OrderForm/OrderForm'
import Countdown from '../../components/Countdown/Countdown'
import "./Products.css"

const PRODUCTS = [
{
    id: 'p750',
    title: 'Kithul Treacle',
    size: '750 ml',
    desc: 'A golden, all-natural sweetener tapped from the majestic Kithul palm. Rich, smooth and authentically Sri Lankan.',
    price: 2000,
    available: 10,
    img: '/assets/product.png'
},
{
    id: 'p500',
    title: 'Kithul Treacle',
    size: '500 ml',
    desc: 'A golden, all-natural sweetener tapped from the majestic Kithul palm. Rich, smooth and authentically Sri Lankan.',
    price: 1700,
    available: 20,
    img: '/assets/product.png'
},
{
    id: 'p250',
    title: 'Kithul Treacle',
    size: '250 ml',
    desc: 'A golden, all-natural sweetener tapped from the majestic Kithul palm. Rich, smooth and authentically Sri Lankan.',
    price: 1200,
    available: 15,
    img: '/assets/product.png'
}
]


export default function Products() {
    const [selected, setSelected] = useState(null)

    return (
        <section className="products-page">
            <div className="product-hero">
                <div className="p-hero-left">    
                    <div className="p-logo-container">
                            <div className="p-logo-rectangle"></div>
                            <div className="p-logo">
                                <img src="/assets/logo-placeholder.png" alt="logo" style={{ width: 150 }} />
                            </div>
                    </div>
                    <img className="products-left-image" src="/assets/product-product.png" alt="product" />
                    <div className="p-countdown">
                        <Countdown />
                    </div>
                </div>
                <div className="p-hero-right">
                    <div className="p-product-grid">
                        {PRODUCTS.map(p => (
                            <ProductCard key={p.id} product={p} onBuy={(prod) => setSelected(prod)} />
                        ))}
                    </div>
                    {selected && <OrderForm product={selected} onClose={() => setSelected(null)} />}
                </div>
            </div>
        </section>
    )
}