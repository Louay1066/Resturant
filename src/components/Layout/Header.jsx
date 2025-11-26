import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import '../../styles/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    <UtensilsCrossed className="logo-icon" />
                    <span>Gourmet</span>
                </Link>

                <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link>
                    <Link to="/servers" className={location.pathname === '/servers' ? 'active' : ''}>Team</Link>
                </nav>

                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
        </header>
    );
};

export default Header;
