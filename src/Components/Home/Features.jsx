
import React from 'react';
import { featuresData } from '../../Utils/homeData';
import Container from '../../MyComponents/Container';

const Features = () => {
    return (
        <div className="py-20 bg-base-100">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose <span className="text-gradient">Study Mate</span>?</h2>
                    <p className="text-base-content/70">Discover the tools and community that will take your learning journey to the next level.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuresData.map((feature, index) => (
                        <div
                            key={feature.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="p-8 rounded-3xl bg-base-200/50 hover:bg-base-200 transition-colors duration-300 border border-transparent hover:border-primary/20 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <feature.icon />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-base-content/70 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Features;
