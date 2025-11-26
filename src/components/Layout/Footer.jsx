import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import '../../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Gourmet</h3>
                    <p>Experience the finest dining with us.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>123 Culinary Ave, Food City</p>
                    <p>+1 (555) 123-4567</p>
                    <p>info@gourmet.com</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#"><Facebook /></a>
                        <a href="#"><Instagram /></a>
                        <a href="#"><Twitter /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Gourmet Restaurant. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
