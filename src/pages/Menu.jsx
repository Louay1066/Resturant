import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Menu.css';

const menuData = {
    antipasti: [
        {
            name: 'Bruschetta al Pomodoro',
            price: '$12',
            desc: 'Toasted bread with fresh tomatoes, basil, garlic, and extra virgin olive oil.',
            image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Caprese Salad',
            price: '$14',
            desc: 'Fresh mozzarella, ripe tomatoes, basil, and balsamic reduction.',
            image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Arancini Siciliani',
            price: '$13',
            desc: 'Crispy risotto balls filled with ragù and mozzarella.',
            image: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Carpaccio di Manzo',
            price: '$16',
            desc: 'Thinly sliced raw beef with arugula, parmesan, and lemon.',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
    ],
    primi: [
        {
            name: 'Spaghetti Carbonara',
            price: '$22',
            desc: 'Classic Roman pasta with guanciale, eggs, pecorino, and black pepper.',
            image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Risotto ai Funghi Porcini',
            price: '$24',
            desc: 'Creamy risotto with porcini mushrooms and parmesan.',
            image: 'https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Lasagne alla Bolognese',
            price: '$23',
            desc: 'Layers of pasta with traditional meat sauce and béchamel.',
            image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Ravioli di Ricotta e Spinaci',
            price: '$21',
            desc: 'Handmade ravioli with ricotta and spinach in sage butter.',
            image: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
    ],
    secondi: [
        {
            name: 'Osso Buco alla Milanese',
            price: '$38',
            desc: 'Braised veal shanks with saffron risotto and gremolata.',
            image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Branzino al Forno',
            price: '$34',
            desc: 'Whole roasted Mediterranean sea bass with herbs and lemon.',
            image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Saltimbocca alla Romana',
            price: '$32',
            desc: 'Veal scaloppine with prosciutto and sage in white wine sauce.',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Pollo alla Cacciatora',
            price: '$28',
            desc: 'Hunter-style chicken with tomatoes, olives, and herbs.',
            image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
    ],
    dolci: [
        {
            name: 'Tiramisu Classico',
            price: '$11',
            desc: 'Traditional coffee-soaked ladyfingers with mascarpone cream.',
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Panna Cotta',
            price: '$10',
            desc: 'Silky vanilla cream with mixed berry compote.',
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: 'Cannoli Siciliani',
            price: '$12',
            desc: 'Crispy shells filled with sweet ricotta and chocolate chips.',
            image: '/cannoli.png'
        },
        {
            name: 'Affogato',
            price: '$9',
            desc: 'Vanilla gelato "drowned" in hot espresso.',
            image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
    ]
};

const categoryLabels = {
    antipasti: 'Antipasti',
    primi: 'Primi Piatti',
    secondi: 'Secondi Piatti',
    dolci: 'Dolci'
};

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('antipasti');

    return (
        <div className="menu-page section-padding">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Il Nostro Menu</h1>
                    <p>Authentic Italian cuisine crafted with passion and tradition.</p>
                </motion.div>

                <div className="menu-tabs">
                    {Object.keys(menuData).map((category) => (
                        <button
                            key={category}
                            className={`tab-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {categoryLabels[category]}
                        </button>
                    ))}
                </div>

                <motion.div
                    className="menu-grid"
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {menuData[activeCategory].map((item, index) => (
                        <motion.div
                            key={index}
                            className="menu-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                            <div className="menu-item-image">
                                <img src={item.image} alt={item.name} />
                                <div className="image-overlay"></div>
                            </div>
                            <div className="menu-item-content">
                                <div className="item-header">
                                    <h3>{item.name}</h3>
                                    <span className="price">{item.price}</span>
                                </div>
                                <p className="item-desc">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Menu;
