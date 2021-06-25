import React from 'react';
import SharedFooter from '../../SharedComponents/SharedFooter/SharedFooter';
import Header from '../Header/Header';
import ReviewSection from '../ReviewSection/ReviewSection';
import Services from '../ServiceComponents/Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ReviewSection></ReviewSection>
            <SharedFooter></SharedFooter>
        </div>
    );
};

export default Home;