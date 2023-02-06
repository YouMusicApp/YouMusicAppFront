import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import './Aside.css'
import { AiOutlineHome } from "react-icons/ai";
import { GiCheckboxTree } from "react-icons/gi";
import ModalEditedPlaylist from '../Modals/ModalEditedPlaylist/ModalEditedPlaylist';
import Search from '../Search/Search';

export const Aside = () => {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";

    const handleFilter = (e) => {
        setSearchParams({ filter: e.target.value });

    }

    return (
        <nav id="sidebar">
            <div className='container sidebar-header'>
                <div className="mt-3 cursor-pointer" onClick={() => navigate('/')}>
                    <h3>YouMusic</h3>
                </div>
                <div className="">
                    <div className='search mt-4 mb-2'>
                        <Search
                            handleFilter={handleFilter}
                            filter={filter}
                        />
                    </div>
                    <ul className="sidebar-nav">
                        <li><Link to='/'><AiOutlineHome className='me-1' /> Home</Link></li>
                        {/* <li><Link to='/'><AiOutlinePlayCircle className='me-1' /> Listen</Link></li> */}
                        <li><Link to='/explore'><GiCheckboxTree className='me-1' /> Explore</Link></li>
                        {/* <li><Link to='/'><IoIosRadio className='me-1' /> Radio</Link></li>
                        <li><Link to='/'><GiMedallist className='me-1' /> Artist?</Link></li> */}
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
