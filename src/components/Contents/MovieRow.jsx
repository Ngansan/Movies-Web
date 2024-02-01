import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { SmoothHorizontalScrolling } from "../../utils";
import {useViewPort} from "../hooks";


function MovieRow(props) {
    const {movies, title, isNetflix} = props;
    const sliderRef = useRef();
    const movieRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const [windowWidth] = useViewPort();

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
            <h1 className="heading">{title}</h1>
            <MoviesSlider 
            ref={sliderRef} 
            draggable="true"
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
            style={
                movies && movies.length > 0 ? 
                {
                    gridTemplateColumns: `repeat(${movies.length},
                        ${windowWidth > 1200 ? '360px'
                        : windowWidth > 992 ? '300px'
                        : windowWidth > 768 ? '250px' : '200px'})`
                } : {}
            }
        >
            { movies && movies.length > 0 && movies.map((movie, index) => (
                <div key={index} className="movieItem" ref={movieRef} draggable="false">
                    <img src={movie} draggable="false" />
                    <div className="movieName">Movie name</div>
                </div>
            ))}
            </MoviesSlider>
            <div>
                <div onClick={handleScrollLeft} className={`btnLeft ${isNetflix && 'isNetflix'}`}>
                    <FaChevronLeft/>
                </div>
                <div className={`btnRight ${isNetflix && 'isNetflix'}`} onClick={handleScrollRight}>
                    <FaChevronRight/>
                </div>
            </div>
        </MovieRowContainer>
    )
}
export default MovieRow;

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
        width: 40px;
        height: 50px;
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
            font-size: 40px;
            transition: all 0.3 linear;
        }
        &.isNetflix{
            height: 100px;
            width: max-content;
        }
    }
    .btnRight{
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        width: 40px;
        height: 50px;
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
            font-size: 40px;
            transition: all 0.3 linear;
        }
        &.isNetflix{
            height: 100px;
            width: max-content;
        }

    }
`;

const MoviesSlider = styled.div`
    display: grid;
    gap: 6px;
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