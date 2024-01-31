import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { SmoothHorizontalScrolling } from "../../utils";
const movies = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d1b54657285421.59cfc94f9e6b5.jpg",
    "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
    "https://img.freepik.com/premium-photo/movie-poster-design_841014-8784.jpg",
    "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
    "https://i.pinimg.com/736x/b8/9b/a6/b89ba63ee5dc4fefdfcc4157767af9e4.jpg",
    "https://i.pinimg.com/474x/c8/a0/25/c8a025c1dd50816e75f84f6cc665c611.jpg",
    "https://i.pinimg.com/736x/48/61/3e/48613e3dfe4b8d590dbf5c04acbe2bd9.jpg",
    "https://i.pinimg.com/originals/37/18/94/371894fd517162a44e0983d38bf484de.jpg",
    "https://i.pinimg.com/736x/95/23/10/9523102b8b2e10c940c71e59fa1d4f50.jpg",
    "https://i.pinimg.com/originals/a9/18/b3/a918b3c45b6aec67bcfaa4fc9ca65637.jpg",
    "https://i.pinimg.com/originals/a9/18/b3/a918b3c45b6aec67bcfaa4fc9ca65637.jpg",
];

function Contents(props) {
    const sliderRef = useRef();
    const movieRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);

    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if(sliderRef.current.scrollLeft < maxScrollLeft){
            SmoothHorizontalScrolling(sliderRef.current, 
                250, 
                movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft)
        };
    }

    const handleScrollLeft = () => {
        if(sliderRef.current.scrollLeft > 0){
            SmoothHorizontalScrolling(sliderRef.current, 
                250, 
                -movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft)
        };
    }
    useEffect(() => {
        if(isDrag){
            if(dragMove < dragDown) handleScrollRight();
            if(dragMove > dragDown) handleScrollLeft();
        }
    }, [dragDown, dragMove, isDrag])
    const onDragStart = e => {
        
    }
    const onDragEnd = e => {
        
    }
    const onDragEnter = e => {
        
    }

    return(
        <MovieRowContainer draggable="false">
            <h1 className="heading">Netflix Original</h1>
            <MoviesSlider 
            ref={sliderRef} 
            draggable="true"
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}>
                {
                    movies.map((movie, index) => (
                        <div key={index} className="movieItem" ref={movieRef} draggable="false">
                            <img src={movie} alt="" draggable="false"/>
                            <div className="movieName">Movie name</div>
                        </div>
                    ))
                }
            </MoviesSlider>
            <div>
                <div className="btnLeft" onClick={handleScrollLeft}>
                    <FaChevronLeft/>
                </div>
                <div className="btnRight" onClick={handleScrollRight}>
                    <FaChevronRight/>
                </div>
            </div>
        </MovieRowContainer>
    )
}
export default Contents;

const MovieRowContainer = styled.div`
    background-color: var(--color-background);
    color: var(--color-white);
    padding: 20px 20px 0;
    position: relative;
    width: 100%;
    height: 100%;

    .heading{
        font-size: 18px;
        user-select: none;
    }
    .btnLeft{
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        width: 50px;
        height: 100px;
        cursor: pointer;
        transform-origin: center;
        background-color: rgba(0,0,0,0.5);
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-50%);
        
        &:hover{
            background-color: rgba(0,0,0,0.7);
        }
        &:hover svg{
            opacity: 1;
            transform: scale(1.1);
        }

        svg{
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3 linear;
        }

    }
    .btnRight{
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        width: 50px;
        height: 100px;
        cursor: pointer;
        transform-origin: center;
        background-color: rgba(0,0,0,0.5);
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-50%);
        
        &:hover{
            background-color: rgba(0,0,0,0.7);
        }
        &:hover svg{
            opacity: 1;
            transform: scale(1.1);
        }

        svg{
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3 linear;
        }

    }
`;

const MoviesSlider = styled.div`
    display: grid;
    gap: 6px;
    grid-template-columns: repeat(${movies.length}, 300px);
    transition: all 0.3 linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;

    &:hover .movieItem{
        opacity: 0.5;
    }

    .movieItem{
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        transform: center left;
        position: realative;

        &:hover{
            opacity: 1;
            transform: scale(1.1);
            z-index: 10;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .movieName{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 4px;
            text-align: center;
            font-size: 16px;
            background-color: rgba(0, 0, 0, 0.65);
        }
    }

`;