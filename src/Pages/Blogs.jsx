
import React from 'react';
import { blogsData } from '../Utils/homeData';
import Container from '../MyComponents/Container';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router';

const Blogs = () => {
    return (
        <div className="py-24 bg-base-100 min-h-screen">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gradient">Blog</span></h1>
                    <p className="text-xl text-base-content/70">
                        Stay updated with the latest study techniques, community stories, and platform updates.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogsData.map((blog, index) => (
                        <div key={blog.id} className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary/50 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                            <figure className="h-64">
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <div className="flex items-center gap-4 text-sm text-base-content/60 mb-2">
                                    <span className="flex items-center gap-1"><FaCalendarAlt /> {blog.date}</span>
                                    <span className="flex items-center gap-1"><FaUser /> Admin</span>
                                </div>
                                <h2 className="card-title text-2xl hover:text-primary transition-colors cursor-pointer">{blog.title}</h2>
                                <p className="text-base-content/70 mb-4">{blog.excerpt}</p>
                                <Link to={`/blogs/${blog.id}`} className="btn btn-outline btn-primary btn-sm rounded-full">Read Full Story</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container >
        </div >
    );
};

export default Blogs;
