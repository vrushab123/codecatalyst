import React from 'react';
import './WhyUs.css';
import { FaPaintBrush, FaRocket, FaWallet, FaUserCheck } from 'react-icons/fa';

const WhyUs = () => {
    const reasons = [
        {
            icon: <FaPaintBrush />,
            title: "Modern Custom Design",
        },
        {
            icon: <FaRocket />,
            title: "Fast and Reliable Services",
        },
        {
            icon: <FaWallet />,
            title: "Affordable Rates",
        },
        {
            icon: <FaUserCheck />,
            title: "Personalized Solutions",
        },
    ];

    return (
        <section className="why-us">
            <h2 className="why-us-header">
                <span>Why Us?</span>
            </h2>
            <p className="why-us-intro">
                We believe in providing top-notch services tailored to meet your unique requirements.
                Here’s why you should hire us:
            </p>
            <div className="why-us-container">
                <div className="why-us-grid">
                    {reasons.map((reason, index) => (
                        <div className="why-us-card" key={index}>
                            <div className="why-us-card-icon">{reason.icon}</div>
                            <div className="why-us-card-title">{reason.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
