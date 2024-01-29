import ReactPlayer from "react-player";
import { IoVolumeMuteOutline } from "react-icons/io5";
import styled from "styled-components";

function Intro(props) {
    return(
        <IntroContainer>
            <ReactPlayer
            playing={true}
            width='100%'
            height='100%'
            volume={1}
            mutex="false"
            url='https://vimeo.com/880633911'
            className="videoIntro"/>
            <div className="infoIntro">
                <h1 className="heading">Netflix Elite</h1>
                <p className="overviewIntro">bvfbvbdfhvbbvuhvubvbfuvbfvbdfvb</p>
            </div>
            <IoVolumeMuteOutline/>

        </IntroContainer>
    )
}
export default Intro;

const IntroContainer = styled.div`
    background-color: var(--color-background);
    position: relative;
    color: var(--color-white);
    padding-top: 56%;

    .videoIntro{
        position:absolute;
        top 0;
        left: 0;

    }
    .infoIntro{
        position: absolute;
        top: 140px;
        left: 30px;
        @media screen and (max-width: 800px){
            top: 120px;
            left: 25px;
        }
        @media screen and (max-width: 600px){
            top: 100px;
            left: 15px;
        }
        .heading{
            font-size: 60px;
            transition: all 0.3s ease;
            
            @media screen and (max-width: 800px){
                left: 40px;
            }
            @media screen and (max-width: 600px){
                left: 24px;
            }
        }
        .overviewIntro{
            max-width: 550px;
            width: 100%;
            line-height: 1.3;
            padding-top: 25px;
            font-size: 18px;

            @media screen and (max-width: 800px){
                font-size: 16px;
            }
            @media screen and (max-width: 600px){
                font-size: 14px;
            }

        }
    }
`