import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import { BsMusicNoteList } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ModalEditedPlaylist = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    function handleShow(v) {
        setFullscreen(v);
        setShow(true);
    }


  return (
    <>
            
            <li><Link to='/' onClick={() => handleShow('sm-down')} >
                <BsMusicNoteList  
                /> Create Playlist </Link>
                </li>

            <Modal centered className='p-0' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header>
                    <Modal.Title><IoIosArrowBack onClick={() => setShow(false)} className='cursor-pointer' /></Modal.Title>
                    <Modal.Title>YouMusic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='m-4 row'><h1 className='text-center'>Edit playlist info</h1></div>
                    <div className='mx-2'>
                        <form onSubmit="" className="needs-validation">
                            <div className="row g-3">

                                <div className="form-floating mb-3">
                                    <input type="text" name="playlistName" className="form-control" id="floatingInput" placeholder="Playlist Name" />
                                    <label htmlFor="floatingInput">Playlist Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" name="Description" className="form-control" id="floatingInput" placeholder="Description" />
                                    <label htmlFor="floatingInput">Description</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" name="img" className="form-control" id="floatingInput" placeholder="Choose pic" />
                                    <label htmlFor="floatingInput">Image for your playlist</label>
                                </div>

                            </div>

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