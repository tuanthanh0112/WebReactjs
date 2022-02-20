import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo2.png'
function Nav() {
    return (
        <NavStyle>
            <div className='logo'>
                <img src={logo} alt=''/>
            </div>
            <ul className='nav-items'>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>FAQs</a>
                </li>
                <li>
                    <a href='#'>Activity</a>
                </li>
                <li>
                    <a href='#'>Contanct</a>
                </li>
                <div className='btn-primary'>
                    GET CONNECTED
                </div>
            </ul>
        </NavStyle>
    )
}
 const NavStyle = styled.nav`
    min-height:10vh;
    display: flex;
    justify-content:space-between;
    align-items:center;
        .nav-items{
            display: flex;
            align-items:center;
        }
        a:hover{
            color: #FFBF00;
        }
        li{
            margin: 0 1rem;
        }
        .btn-primary{
            margin-left: 3rem;
            background-color:rgba(57, 95, 246, 0.6);
            padding: .6rem .8rem;
            border-radius:70px;
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover{
                color: #FFBF00;
                background-color: rgba(57, 95, 246, 1);
            }
        }
        .logo{
            img{
                width: 60px;
            }
        }
    }
 `;
export default Nav
