
import React from 'react';
import CountUp from 'react-countup';
import { statsData } from '../../Utils/homeData';
import Container from '../../MyComponents/Container';

const Statistics = () => {
    return (
        <div className="py-20 bg-linear-to-r from-primary/10 to-secondary/10">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-aos="fade-up">
                    {statsData.map((stat) => (
                        <div key={stat.id} className="p-6 bg-base-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary mb-2">
                                <CountUp end={parseInt(stat.value)} duration={2.5} suffix={stat.value.includes('+') ? '+' : ''} />
                            </div>
                            <p className="text-base-content/70 font-medium uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Statistics;
