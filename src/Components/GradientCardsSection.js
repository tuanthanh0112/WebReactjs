import React from "react";
import styled from "styled-components";
import { SectionStyle } from "../Layout";
import MainTitle from "../Components/MainTitle";
import avatar from '../img/avata.jpg';
import CtaButton from './CtButton';
import person from '../img/person.jpg';
import person2 from '../img/bitcoin3.jpg';
import bitcoin2 from '../img/bitcoin2.jpg';
import bitcoin from '../img/bitcoin.jpg';
import person3 from '../img/person3.jpg';
import computer from '../img/computer.jpg';
import GradientCard from '../Components/GradienCards'
function GradientCardsSection() {
  return (
    <GradientCardsSectionStyled>
      <SectionStyle>
        <div className="title-con">
          <MainTitle
            title={"Popular Blogs"}
            subtitle={"Our Top Blogs"}
            para={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
            }
          />
        </div>
        <div className="gradient-cards-con">
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={person2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={person3} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={computer} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={bitcoin} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                </div>
                <div className="load">
                    <CtaButton name={'View More'} />
                </div>
      </SectionStyle>
    </GradientCardsSectionStyled>
  );
}

const GradientCardsSectionStyled = styled.div` 
.load{
    padding-top: 3rem;
    text-align: center;
}`;
export default GradientCardsSection;
