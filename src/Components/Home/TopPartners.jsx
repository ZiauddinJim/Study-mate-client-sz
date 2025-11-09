import React from 'react';
import TextType from '../CreateProfile/TextType';
import Container from '../../MyComponents/Container';


const TopPartners = () => {
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
                    deletingSpeed={30}
                    pauseDuration={5000}
                    showCursor={true}
                    loop={true}
                />
            </div>
        </Container>
    );
};

export default TopPartners;