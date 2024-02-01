import { FaHome, FaGhost, FaStar,  } from "react-icons/fa";
import { FcBarChart, FcClapperboard, FcLike,} from "react-icons/fc";
import { MdTheaterComedy } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import styled from "styled-components";
import MenuItem from "./MenuItem";

function Menu(props) {
    return(
        <MenuPane>
            <MenuItem name="Home" Icon={FaHome}/>
            <MenuItem name="Trending" Icon={FcBarChart}/>
            <MenuItem name="Top rated" Icon={FaStar}/>
            <MenuItem name="Actions Movie" Icon={FcClapperboard}/>
            <MenuItem name="Comedy Movie" Icon={MdTheaterComedy}/>
            <MenuItem name="Horror Movie" Icon={FaGhost}/>
            <MenuItem name="Romance Movie" Icon={FcLike}/>
            <MenuItem name="Document" Icon={IoDocumentTextOutline}/>

        </MenuPane>
    )
}
export default Menu;

const MenuPane = styled.div`
    position: fixed;
    left: 0;
    top: 20%;
    width: 46px;
    padding: 4px 0;
    background: rgba(220, 220, 220, 0.3);
    z-index: 100;
    display: flex;
    flex-direction: column;
    transform-origin: left center;
    transition: all 0.3s linear;
    overflow: hidden;
    &:hover{
        width: 180px;
        background: rgba(220, 220, 220, 0.5);
    }

    .subMenu{
        display: flex;
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;

        .item{
            font-size: 30px;
            margin-right: 8px;
        }
        span{
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6);
            &:hover{
                color: white;
            }
        }
    }

`;