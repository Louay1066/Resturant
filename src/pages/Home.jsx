import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import '../styles/Home.css';

const TestimonialSection = ({ testimonials }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    return (
        <div className="testimonial-section-container">
            <div className="testimonial-sidebar">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className={`testimonial-item ${index === selectedIndex ? 'active' : ''}`}
                        onClick={() => setSelectedIndex(index)}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="testimonial-avatar">
                            <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className="testimonial-info">
                            <h4>{testimonial.name}</h4>
                            <div className="testimonial-meta">
                                <div className="rating">
                                    <Star size={14} fill="var(--color-primary)" color="var(--color-primary)" />
                                    <span>{testimonial.rating}</span>
                                </div>
                                <span className="date">{testimonial.date}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="testimonial-content">
                <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="testimonial-quote-container"
                >
                    <div className="quote-mark">"</div>
                    <p className="testimonial-quote">{testimonials[selectedIndex].text}</p>
                </motion.div>
            </div>
        </div>
    );
};

const Home = () => {
    const testimonials = [
        {
            name: 'Maria Rossi',
            text: 'The most authentic Italian food outside of Italy! Every dish reminds me of my nonna\'s cooking.',
            rating: 4.9,
            date: 'on 15 Nov, 2024',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'James Wilson',
            text: 'Exceptional service and incredible flavors. The carbonara is perfection! I wouldn\'t recommend going to anyone else. All of you guys are awesome.',
            rating: 4.9,
            date: 'on 29 Aug, 2024',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Sophie Laurent',
            text: 'A culinary journey to Italy. The ambiance and food are simply outstanding. Definitely love the way the atmosphere works.',
            rating: 4.9,
            date: 'on 12 Oct, 2024',
            image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Benvenuti al Gourmet
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Experience the authentic taste of Italy in every bite
                    </motion.p>
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link to="/menu" className="btn btn-primary">View Menu</Link>
                        <Link to="/servers" className="btn btn-secondary">Meet Our Team</Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            The Italian Experience
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Discover what makes our restaurant truly special
                        </motion.p>
                    </div>

                    <div className="features-showcase">
                        {/* Feature 1 */}
                        <motion.div
                            className="feature-row"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="feature-image">
                                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Italian Chef" />
                            </div>
                            <div className="feature-content">
                                <h3>Authentic Italian Mastery</h3>
                                <p>Our chefs, trained in the culinary heartlands of Italy, bring generations of expertise to every dish. From Naples to Bologna, we honor traditional techniques while adding our creative touch.</p>
                                <div className="feature-stats">
                                    <div className="stat">
                                        <span className="stat-number">20+</span>
                                        <span className="stat-label">Years Experience</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-number">100%</span>
                                        <span className="stat-label">Italian Trained</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            className="feature-row reverse"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="feature-image">
                                <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fresh Ingredients" />
                            </div>
                            <div className="feature-content">
                                <h3>Premium Imported Ingredients</h3>
                                <p>We source the finest ingredients directly from Italy - from San Marzano tomatoes to Parmigiano-Reggiano aged 36 months. Every ingredient tells a story of Italian tradition and quality.</p>
                                <div className="feature-stats">
                                    <div className="stat">
                                        <span className="stat-number">50+</span>
                                        <span className="stat-label">Italian Suppliers</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-number">Daily</span>
                                        <span className="stat-label">Fresh Deliveries</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            className="feature-row"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="feature-image">
                                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Traditional Cooking" />
                            </div>
                            <div className="feature-content">
                                <h3>Award-Winning Excellence</h3>
                                <p>Recognized by culinary critics and food enthusiasts alike, our commitment to authentic Italian cuisine has earned us prestigious awards and a loyal following of discerning diners.</p>
                                <div className="feature-stats">
                                    <div className="stat">
                                        <span className="stat-number">5★</span>
                                        <span className="stat-label">Michelin Guide</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-number">2024</span>
                                        <span className="stat-label">Best Italian</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Customer Reviews
                        </motion.h2>
                    </div>
                    <TestimonialSection testimonials={testimonials} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta section-padding">
                <div className="container">
                    <div className="cta-grid">
                        <motion.div
                            className="cta-image"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Restaurant Interior" />
                            <div className="cta-overlay">
                                <div className="cta-badge">
                                    <Star className="badge-icon" fill="currentColor" />
                                    <span>Rated 5★ on Google</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="cta-content"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2>Experience Authentic Italy</h2>
                            <p>Join us for an unforgettable dining experience. Reserve your table today and discover why we're the city's favorite Italian restaurant.</p>

                            <div className="cta-features">
                                <div className="cta-feature-item">
                                    <div className="feature-check">✓</div>
                                    <span>Fresh ingredients daily</span>
                                </div>
                                <div className="cta-feature-item">
                                    <div className="feature-check">✓</div>
                                    <span>Authentic Italian recipes</span>
                                </div>
                                <div className="cta-feature-item">
                                    <div className="feature-check">✓</div>
                                    <span>Warm, welcoming atmosphere</span>
                                </div>
                            </div>

                            <div className="cta-buttons">
                                <Link to="/menu" className="btn btn-primary-cta">
                                    View Full Menu <ArrowRight size={18} />
                                </Link>
                                <a href="tel:+15551234567" className="btn btn-secondary-cta">
                                    Call to Reserve
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
