import React, { useEffect, useState } from 'react';
import TextType from '../CreateProfile/TextType';
import Container from '../../MyComponents/Container';
import TopPartnerCard from './TopPartnerCard';
import useAxios from '../../Hooks/useAxios';


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
                    className="text-4xl font-extrabold text-gradient"
                    text={[
                        "Top Rated Study Partner",
                        "Top Rated Study Partner",
                    ]}
                    typingSpeed={75}
                    pauseDuration={5000}
                    showCursor={true}
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10 mx-5 lg:mx-auto'>
                {
                    data.map(data => <TopPartnerCard key={data._id} data={data} />)
                }

            </div>
            <div className='flex justify-center pt-5'>
                <div className='my-btn'>Find All Partners</div>
            </div>
        </Container>
    );
};

export default TopPartners;