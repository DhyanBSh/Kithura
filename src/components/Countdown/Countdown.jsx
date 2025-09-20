import React, { useEffect, useState } from 'react'
import "./Countdown.css";

// Set your target sale start date here (ISO string). Update as needed.
// Example: next sale opens 2025-09-01T00:00:00Z
const SALE_START = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString()

function getRemaining(target) {
    const now = new Date()
    const t = new Date(target) - now
    if (t <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    const days = Math.floor(t / (1000 * 60 * 60 * 24))
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((t / (1000 * 60)) % 60)
    const seconds = Math.floor((t / 1000) % 60)
    return { days, hours, minutes, seconds }
}


export default function Countdown({ target = SALE_START }) {
    const [time, setTime] = useState(() => getRemaining(target))

    useEffect(() => {
        const id = setInterval(() => setTime(getRemaining(target)), 1000)
        return () => clearInterval(id)
    }, 
    [target])

    return (
        <div className="countdown">
            <div className="count-label">Open Day Countdown :</div>
            <div className="count-values">
                <span className="count-item"><b>{time.days}</b>D</span>
                <span className="count-item"><b>{time.hours}</b>H</span>
                <span className="count-item"><b>{time.minutes}</b>M</span>
            </div>
        </div>
    )
}