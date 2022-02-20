import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layout';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import DemostrantionSection from './DemostrantionSection';
import GradientCardsSection from './GradientCardsSection';
import MainTitle from './MainTitle';
import SellerCard from './SellerCard';

function BodyContent() {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top Sellers This Month'} subtitle={'All Entrepreneurs'}/>   
                <div className='sellercards'>
                    <SellerCard/>
                    <SellerCard/>
                    <SellerCard/>
                </div>
                <BlogSection/>
                <GradientCardsSection/>
                <DemostrantionSection/>
              
            </InnerLayout>
            <ContactSection/>
            <footer> Copyright @TuanThanh. All Rights Reserved  </footer>
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.main`
.sellercards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin: 2rem 0;
}
footer{
    display: flex;
    align-items: center;
    justify-content: center;
    padding:   3rem 0;
    background-color: #020A27;
    border-top: 1px solid rgba(255,255,255,0.08);
    p{
        opacity: 0.7;
    } 
}
`;
export default BodyContent
