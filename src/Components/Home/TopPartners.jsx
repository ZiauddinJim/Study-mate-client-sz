import React, { useEffect, useState } from 'react';
import TextType from '../CreateProfile/TextType';
import Container from '../../MyComponents/Container';
import TopPartnerCard from './TopPartnerCard';
import useAxios from '../../Hooks/useAxios';
import { Link } from 'react-router';


const TopPartners = () => {
    const Axios = useAxios()
    const [data, setData] = useState([])
    useEffect(() => {
        Axios.get("/top-partner")
            .then(data => {
                // console.log(data.data);
                const partner = data.data
                setData(partner)
            })
    }, [Axios])
    return (
        <Container className={'mb-20'}>
            <div className='flex justify-center'>
                <TextType
                    className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-gradient mx-3 lg:mx-auto"
                    text={[
                        "Top Rated Study Partner",
                        "Top Rated Study Partner",
                    ]}
                    typingSpeed={75}
                    pauseDuration={5000}
                    showCursor={true}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10 px-3 sm:px-5 lg:px-10">
                {
                    data.map(data => <TopPartnerCard key={data._id} data={data} />)
                }

            </div>
            <div className='flex justify-center pt-5'>
                <Link to={"/findPartners"} className='my-btn'>Find All Partners</Link>
            </div>
        </Container>
    );
};

export default TopPartners;