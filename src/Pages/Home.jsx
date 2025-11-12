import { useEffect } from 'react';
import Banner from '../Components/Home/Banner';
// import SplashCursor from '../Components/Home/SplashCursor'
import Aos from 'aos';
import 'aos/dist/aos.css';
import useAuth from '../Hooks/useAuth';
import Spinner from '../Spinner/Spinner';
import TopPartners from '../Components/Home/TopPartners';
import HowItWorks from '../Components/Home/HowItWorks';
import Testimonials from '../Components/Home/Testimonials';

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
        <>
            <header data-aos="fade-up">
                <Banner />
            </header>
            <main>
                <div>
                    <TopPartners />
                </div>
                <div>
                    <HowItWorks />
                </div>
                <div>
                    <Testimonials />
                </div>
            </main>
            {/* <SplashCursor /> */}
        </>
    );
};

export default Home;