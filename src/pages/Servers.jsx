import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Servers.css';

const servers = [
    {
        name: 'Chef Giovanni Russo',
        role: 'Executive Chef',
        bio: 'Born in Naples, Giovanni brings 20 years of authentic Italian culinary expertise, specializing in traditional Neapolitan cuisine.',
        image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Chef Marco Bianchi',
        role: 'Sous Chef',
        bio: 'Trained in Bologna, Marco is a master of fresh pasta and traditional sauces, ensuring every dish is perfection.',
        image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Isabella Romano',
        role: 'Pastry Chef',
        bio: 'From Sicily, Isabella creates exquisite dolci using family recipes passed down through generations.',
        image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Antonio Conti',
        role: 'Head Sommelier',
        bio: 'With expertise in Italian wines, Antonio curates the perfect pairing for every dish on our menu.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Sofia Marino',
        role: 'Restaurant Manager',
        bio: 'Sofia ensures every guest receives warm Italian hospitality and an unforgettable dining experience.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Luca Ferretti',
        role: 'Pizza Chef',
        bio: 'A true pizzaiolo from Rome, Luca crafts authentic wood-fired pizzas with the finest Italian ingredients.',
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];

const Servers = () => {
    return (
        <div className="servers-page section-padding">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>La Nostra Famiglia</h1>
                    <p>Meet the passionate team behind your Italian culinary journey.</p>
                </motion.div>

                <div className="servers-grid">
                    {servers.map((server, index) => (
                        <motion.div
                            key={index}
                            className="server-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="card-image">
                                <img src={server.image} alt={server.name} />
                                <div className="image-overlay"></div>
                            </div>
                            <div className="card-content">
                                <h3>{server.name}</h3>
                                <span className="role">{server.role}</span>
                                <p>{server.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Servers;
