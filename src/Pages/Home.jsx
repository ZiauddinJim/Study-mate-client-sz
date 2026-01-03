import { useEffect } from 'react';
import Banner from '../Components/Home/Banner';
import SplashCursor from '../Components/Home/SplashCursor'
import Aos from 'aos';
import 'aos/dist/aos.css';
import useAuth from '../Hooks/useAuth';
import Spinner from '../Spinner/Spinner';
import TopPartners from '../Components/Home/TopPartners';
import HowItWorks from '../Components/Home/HowItWorks';
import Testimonials from '../Components/Home/Testimonials';

import Statistics from '../Components/Home/Statistics';
import Features from '../Components/Home/Features';
import BlogsSection from '../Components/Home/BlogsSection';
import FAQ from '../Components/Home/FAQ';
import Newsletter from '../Components/Home/Newsletter';
import CTA from '../Components/Home/CTA';

const Home = () => {
    const { setLoading, loading } = useAuth()
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease-in-out'
        })
    }, []);

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500)
        return () => clearTimeout(timer)
    }, [setLoading])
    if (loading) return <Spinner />;
    return (
        <div className="overflow-x-hidden">
            <header data-aos="fade-up">
                <title>Home | Study Mate</title>
                <Banner />
            </header>
            <main>
                {/* 1. Statistics Section */}
                <Statistics />
                {/* 2. CTA Section */}
                <CTA />
                {/* 3. Top Partners Section (Existing) */}
                <TopPartners />
                {/* 4. Features Section */}
                <Features />
                {/* 5. How It Works Section (Existing) */}
                <HowItWorks />
                {/* 6. Blogs Preview Section */}
                <BlogsSection />
                {/* 7. Testimonials Section (Existing) */}
                <Testimonials />
                {/* 8. FAQ Section */}
                <FAQ />
                {/* 9. Newsletter Section */}
                <Newsletter />
               
            </main>
            {/* <SplashCursor /> */}
        </div>
    );
};

export default Home;