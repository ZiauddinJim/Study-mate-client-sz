
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { blogsData } from '../Utils/homeData';
import Container from '../MyComponents/Container';
import { FaCalendarAlt, FaUser, FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Error404 from '../Error/Error404';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API fetch delay if needed, or just find immediately
        const foundBlog = blogsData.find(b => b.id === parseInt(id));
        setBlog(foundBlog);
        setLoading(false);

        // Scroll to top when page opens
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-spinner loading-lg text-primary"></span></div>;

    if (!blog) return <Error404 />;

    return (
        <div className="pt-24 pb-16 bg-base-100 min-h-screen">
            <Container>
                {/* Back Button */}
                <Link to="/blogs" className="btn btn-ghost gap-2 mb-8 hover:bg-base-200 group">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Blogs
                </Link>

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-8" data-aos="fade-up">
                        <div className="flex items-center gap-4 text-sm font-semibold tracking-wider text-primary mb-4 uppercase">
                            <span className="bg-primary/10 px-3 py-1 rounded-full">Study Tips</span>
                            <span className="flex items-center gap-2 text-base-content/60"><FaCalendarAlt /> {blog.date}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-base-content">
                            {blog.title}
                        </h1>

                        {/* Author Info */}
                        <div className="flex items-center justify-between border-y border-base-300 py-6">
                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={blog.authorImage || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt={blog.author} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-base-content">{blog.author || "Admin"}</h3>
                                    <p className="text-xs text-base-content/60">Content Writer</p>
                                </div>
                            </div>

                            {/* Social Share */}
                            <div className="flex gap-2">
                                <button className="btn btn-circle btn-sm btn-ghost hover:bg-blue-100 hover:text-blue-600"><FaFacebookF /></button>
                                <button className="btn btn-circle btn-sm btn-ghost hover:bg-sky-100 hover:text-sky-500"><FaTwitter /></button>
                                <button className="btn btn-circle btn-sm btn-ghost hover:bg-blue-100 hover:text-blue-700"><FaLinkedinIn /></button>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-12" data-aos="zoom-in">
                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                    </figure>

                    {/* Content */}
                    <article className="prose prose-lg prose-headings:text-base-content prose-p:text-base-content/80 max-w-none mb-16" data-aos="fade-up">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </article>

                    {/* Footer/Navigation */}
                    <div className="divider"></div>
                    <div className="flex justify-between items-center mt-8">
                        <div>
                            <h4 className="font-bold mb-2">Tags</h4>
                            <div className="flex gap-2">
                                <span className="badge badge-outline">Education</span>
                                <span className="badge badge-outline">Learning</span>
                                <span className="badge badge-outline">Productivity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetails;
