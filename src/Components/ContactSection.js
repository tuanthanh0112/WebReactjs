import React from 'react'
import styled from 'styled-components'
import { SectionStyle } from '../Layout';
import map from '../img/map.png'
function ContactSection() {
    return (
        <ContactSectionStyle>
            <SectionStyle>
                <div className='contact-info'>
                    <h3 className='contact-title'>Contact US</h3>
                    <p>30 Avenue Street, United Kingdom</p>
                    <p>012345678901</p>
                    <p>12345ttt@gmail.com</p>
                </div>
                <div className='bg-image'>
                    <img src={map} alt=''/>
                </div>
            </SectionStyle>
        </ContactSectionStyle>
    )
}
const ContactSectionStyle = styled.div`
    background-color:#020C31;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; 
    position: relative; 
    padding: 4rem 0;  
    z-index: 1;
    p{
        opacity: 0.5;
    }
    .bg-image{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        img{
            width: 80%;
            opacity: 0.07;
        }
    }
    .contact-title{
        position: relative;
        padding-bottom: 1rem;
        margin-bottom:2rem;
        font-weight:500;
        font-sixe:1.5rem;
        &::before{
            content: '';
            bottom: 0;
            position: absolute;
            transform: translateX(-50%);
            width: 4rem;
            height: 2px;
            background-color: #eb3fa9;
            left: 50%;
        }
    }
`;
export default ContactSection
