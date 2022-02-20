import React from 'react'
import styled from 'styled-components'
import { SectionStyle } from '../Layout';
import MainTitle from './MainTitle';
import GradienCards from './GradienCards'
import CtButton from './CtButton'
import avatar from '../img/avata.jpg';

import person2 from '../img/bitcoin3.jpg';
import bitcoin from '../img/bitcoin.jpg';
import person3 from '../img/person3.jpg';
import computer from '../img/computer.jpg';
function DemostrantionSection() {
    const ctButton = <CtButton name={'Place bid'}/>
    return (
        <DemostrantionSectionStyled>
            <SectionStyle>
                <div className='title-con'>
                    <MainTitle title={'Live Demonstration'} subtitle={'Live Demonstration'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'} />
                </div>
            <div className="gradient-cards-con">
                <GradienCards image={computer} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctButton={ctButton} />
                <GradienCards image={person3} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctButton={ctButton} />
                <GradienCards image={bitcoin} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctButton={ctButton} />
                <GradienCards image={person2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctButton={ctButton} />
            </div>
            </SectionStyle>
        </DemostrantionSectionStyled>
    )
}
const DemostrantionSectionStyled = styled.div`
`;
export default DemostrantionSection
