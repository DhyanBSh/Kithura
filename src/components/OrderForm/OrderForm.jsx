import React, { useState } from 'react'
import './OrderForm.css'

export default function OrderForm({ product, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [qty, setQty] = useState(1)
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()

    // ✅ Replace with your number in full international format
    const myNumber = "94727332649"  

    const message = `🛒 New Order
Product: ${product.title} (${product.size})
Quantity: ${qty}
Name: ${name}
Phone: ${phone}
Address: ${address}`

    // Detect if mobile or desktop
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    const url = isMobile
      ? `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${myNumber}&text=${encodeURIComponent(message)}`

    window.open(url, "_blank")

    setSent(true)
  }

  if (!product) return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>✕</button>
        {!sent ? (
          <form onSubmit={submit} className="order-form">
            <h2>Order — {product.title} ({product.size})</h2>
            <label>
              Name
              <input required value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
              Phone
              <input required value={phone} onChange={e => setPhone(e.target.value)} />
            </label>
            <label>
              Address
              <textarea required value={address} onChange={e => setAddress(e.target.value)} />
            </label>
            <label>
              Quantity
              <input type="number" min="1" max={product.available} value={qty} onChange={e => setQty(+e.target.value)} />
            </label>
            <button className="btn btn-primary" type="submit">Place Order</button>
          </form>
        ) : (
          <div className="order-success">
            <h3>Thank you — your order has been received!</h3>
            <p>We will contact you shortly to confirm the details. Delivery within 7–10 days.</p>
            <button className="btn" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  )
}
