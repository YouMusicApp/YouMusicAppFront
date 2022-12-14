import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import { BsMusicNoteList } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchPostEditedPlaylist } from '../../../Api/postApi';
import { createNewPlaylist } from '../../../redux/features/playlist/playlistSlice';

const ModalEditedPlaylist = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice);



    function handleShow(v) {
        setFullscreen(v);
        setShow(true);
    }
    console.log(usersData.userLogged)

    const functionPlaylistEdited = (e) => {
        e.preventDefault();



        const newPlaylist = {
            id: uuidv4(),
            userId: usersData.userLogged.id,
            name: e.target.name.value,
            description: e.target.description.value,
            thumbnail: e.target.img.value,
            // publicAccessible: e.target.public.value,
            tracks: [],
        }

        console.log(newPlaylist);
        dispatch(createNewPlaylist(newPlaylist));
        fetchPostEditedPlaylist(newPlaylist)
        setShow(false);
    }

    return (
        <>

            <li><Link to='/' onClick={() => handleShow('sm-down')} >
                <BsMusicNoteList
                /> New Playlist </Link>
            </li>

            <Modal centered className='p-0' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header>
                    <Modal.Title><IoIosArrowBack onClick={() => setShow(false)} className='cursor-pointer' /></Modal.Title>
                    <Modal.Title>YouMusic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='m-4 row'><h1 className='text-center'>Edit playlist info</h1></div>
                    <div className='mx-2'>
                        <form onSubmit={(e) => functionPlaylistEdited(e)} className="needs-validation">
                            <div className="row g-3">

                                <div className="form-floating mb-3">
                                    <input type="text" name="name" className="form-control" id="floatingInput" placeholder="Playlist Name" />
                                    <label htmlFor="floatingInput">Playlist Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" name="description" className="form-control" id="floatingInput" placeholder="Description" />
                                    <label htmlFor="floatingInput">Description</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" name="img" className="form-control" id="floatingInput" placeholder="Choose pic" />
                                    <label htmlFor="floatingInput">Image for your playlist</label>
                                </div>

                            </div>

                            {/* <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" required />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Public
                                </label>
                            </div> */}

                            <h6 className='register__email--error mt-2'></h6>
                            <button className="mt-2 w-100 btn btn-color btn-lg" type="submit">Save</button>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEditedPlaylist