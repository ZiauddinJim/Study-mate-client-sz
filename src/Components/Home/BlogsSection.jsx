
import React from 'react';
import { Link } from 'react-router';
import { blogsData } from '../../Utils/homeData';
import Container from '../../MyComponents/Container';
import { FaArrowRight } from "react-icons/fa";

const BlogsSection = () => {
    return (
        <div className="py-20 bg-base-200/50">
            <Container>
                <div className="flex justify-between items-end mb-12" data-aos="fade-up">
                    <div className='max-w-xl'>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest from our <span className="text-gradient">Blog</span></h2>
                        <p className="text-base-content/70">Insights, tips, and stories from the community.</p>
                    </div>
                    <Link to="/blogs" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                        View all posts <FaArrowRight />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogsData.map((blog, index) => (
                        <div key={blog.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-base-200" data-aos="fade-up" data-aos-delay={index * 100}>
                            <figure className="h-48 overflow-hidden">
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            </figure>
                            <div className="card-body">
                                <span className="text-xs font-bold text-primary tracking-widest uppercase">{blog.date}</span>
                                <h3 className="card-title group-hover:text-primary transition-colors">{blog.title}</h3>
                                <p className="text-base-content/70 text-sm">{blog.excerpt}</p>
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/blogs/${blog.id}`} className="btn btn-link btn-xs px-0 text-neutral-content group-hover:text-primary no-underline flex items-center gap-1">
                                        Read More <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:hidden mt-8 text-center">
                    <Link to="/blogs" className="btn btn-primary btn-outline rounded-full">
                        View all posts
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default BlogsSection;
