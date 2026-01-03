
import React from 'react';
import { faqData } from '../../Utils/homeData';
import Container from '../../MyComponents/Container';
import { Link } from 'react-router';

const FAQ = () => {
    return (
        <div className="py-20 bg-base-100">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-5" data-aos="fade-right">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked <br /> <span className="text-gradient">Questions</span></h2>
                        <p className="text-base-content/70 mb-8 text-lg">
                            Have questions? We're here to help. Check out our most frequently asked questions below or contact our support team.
                        </p>
                        <Link to={'/contact'} className="btn btn-primary rounded-full px-8">Contact Support</Link>
                    </div>

                    <div className="lg:col-span-7 space-y-4" data-aos="fade-left">
                        {faqData.map((item, index) => (
                            <div key={item.id} className="collapse collapse-plus bg-base-200/50 border border-base-200 hover:border-primary/20 transition-colors">
                                <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
                                <div className="collapse-title text-xl font-medium">
                                    {item.question}
                                </div>
                                <div className="collapse-content text-base-content/70">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FAQ;
