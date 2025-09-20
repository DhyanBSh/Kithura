import React from 'react'
import "./ProductCard.css"

export default function ProductCard({ product, onBuy }) {
    const { id, title, size, desc, price, available, img } = product
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={img} alt={title} />
            </div>
            <div className="product-body">
                <h3 className="product-title">{title}</h3>
                <div className="product-size">{size}</div>
                <p className="product-desc">{desc}</p>
                <div className="product-price">{price} LKR</div>
                <button className="p-btn-buy" onClick={() => onBuy(product)}>Buy</button>
                <div className="product-available">Available : {available} Only</div>
            </div>
        </div>
    )
}