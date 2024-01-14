import Quora from '../../assets/quoralogo.png';
import { IoMdHome, IoIosSearch } from "react-icons/io";
import { FaListAlt, FaUsers, FaBell, FaUserCircle } from "react-icons/fa";
import { LiaEdit } from "react-icons/lia";
import { TbWorld } from "react-icons/tb";
import Button from '@mui/material/Button';
import './header.css';

function Header(){
    return(
        <div className='header-container'>
            <div>
                <img src={Quora} className='image'/>
            </div>
            <div className='icons-wrapper'>
                <IoMdHome className='icons' />
                <FaListAlt className='icons' />
                <LiaEdit className='icons' />
                <FaUsers className='icons' />
                <FaBell className='icons' />
            </div>
            <div className='search-wrapper'>
                <div>
                    <IoIosSearch />
                </div>
                <input id='search-quora' type='text' placeholder= 'Search Quora'/>
            </div>
            <div>
                <Button id='try-quora' variant="outlined">Try Quora+</Button>
            </div>
            <div className='icons-wrapper'>
                <FaUserCircle className='icons' />
                <TbWorld className='icons' />
            </div>
            <div>
                <Button id='add-question' variant="contained">Add Question</Button>
            </div>
        </div>
    )
}

export default Header; 