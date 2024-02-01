import styled from 'styled-components';
import movieLogo from '../../assets/image/netflix_logo.png';
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from 'react';
import { useScrollY } from '../hooks';

function Navbar(props) {
    const [scrollY] = useScrollY();
    return(
        <Navigation style={scrollY < 50 ? {background : 'transparent'} :{background : 'var(--color-background)' }}>
            <div className='navContainer'>
                <div className='logo'>
                    <img src={movieLogo} alt=''/>
                </div>
                <div className='navSearch'>
                    <IoIosSearch className='iconSearch'/>
                    <input type='text' placeholder='Input text here'/>
                </div>
            </div>
        </Navigation>
    )
    
}
export default Navbar;

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    z-index: 10;
    transition-timing-function: ease-in;
    transition: all 1s;

    @media only screen and (max-width: 600px){
        height: 100px;
    }
    .navContainer{
        background-color: transparent;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
        height: 100%;

        @media only screen and (max-width: 600px){
            flex-direction: column;
            
        }
        .logo{
            width: 120px;
            cursor: pointer;
            img{
                width: 100%;
            }
        }
        .navSearch{
            color: var(--color-white);
            padding-right: 20px;
            display: flex;
            justify-content: flex-end;

            &:hover .iconSearch{
                color: var(--color-white);
            }

            .iconSearch{
                width: 20px;
                height: 20px;
                cursor: pointer;
                transform: translateX(24px) translateY(10px);
                color: #bbb;
            }

            input{
                font-size: 14px;
                border: 1px solid white;
                color: var(--color-white);
                outline: none;
                width: 300px;
                padding: 10px;
                cursor: pointer;
                border-radius: 4px;
                opacity: 0;
                background: var(--color-background);
                transition: width 0.5s;

                &:focus{
                    padding-left: 26px;
                    width: 300px;
                    cursor: text;
                    opacity: 1;
                    border-radius: 6px;
                }
            }
        }
    }
`;