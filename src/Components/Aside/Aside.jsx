import { Link, useNavigate } from 'react-router-dom'
import './Aside.css'
import { AiOutlineHome, AiOutlinePlayCircle, AiOutlineSearch } from "react-icons/ai";
import { GiCheckboxTree } from "react-icons/gi";
import { IoIosRadio } from "react-icons/io";
import { BsMusicNoteList } from "react-icons/bs";
import { GiMedallist } from "react-icons/gi";
import ModalEditedPlaylist from '../Modals/ModalEditedPlaylist/ModalEditedPlaylist';

export const Aside = () => {
    const navigate = useNavigate();

    return (
        <nav id="sidebar">
            <div className='container sidebar-header'>
                <div className="mt-3 cursor-pointer" onClick={() => navigate('/')}>
                    <h3>YouMusic</h3>
                </div>
                <div className='search mt-4 mb-2'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                        <span className="input-group-text cursor-pointer" id="basic-addon1"><AiOutlineSearch /></span>
                    </div>
                </div>
                <div className="">
                    <ul className="sidebar-nav">
                        <li><Link to='/'><AiOutlineHome className='me-1' /> Home</Link></li>
                        <li><Link to='/'><AiOutlinePlayCircle className='me-1' /> Listen</Link></li>
                        <li><Link to='/explore'><GiCheckboxTree className='me-1' /> Explore</Link></li>
                        <li><Link to='/'><IoIosRadio className='me-1' /> Radio</Link></li>
                        <li><Link to='/'><GiMedallist className='me-1' /> Artist?</Link></li>
                    </ul>
                </div>
                <div className="">
                    <ul className="sidebar-nav">
                        <ModalEditedPlaylist />
                        
                    </ul>
                </div>

            </div>
        </nav>
    )
}
