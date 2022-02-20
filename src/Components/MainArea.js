import React from 'react'
import styled from 'styled-components'
import bunsiness  from '../img/marketing.mp4';
import cricles from '../img/circles.svg';

import MainContent  from '../Components/MainContent'
import {InnerLayout} from '../Layout'
function MainArea() {
    return (
        <MainAreaStyle>
            <video src={bunsiness} muted playsInline autoPlay loop></video>
            <img src={cricles} alt='' className='overlay'/>

            <InnerLayout>
                <MainContent/>
            </InnerLayout>
        </MainAreaStyle>
    )
}

const MainAreaStyle = styled.div`
    width: 100%;
    height: 85vh;
    position: relative;
    overflow:hidden;
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        right: -400px;
        top: -300px;
    }

    video{
        width: 100%;
        height: 100%;
        object-Fit: cover;
        opacity: 0.7;
    }
`;
export default MainArea
