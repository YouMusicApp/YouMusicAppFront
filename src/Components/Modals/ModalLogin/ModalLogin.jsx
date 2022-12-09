import { useState } from "react";
import { Modal } from "react-bootstrap";
import { MainBtn } from "../../Buttons/MainBtn/MainBtn";

// redux
import { useDispatch, useSelector } from 'react-redux';
import { ModalRecoveryPassword } from "../ModalRecoveryPassword/ModalRecoveryPassword";
import { ModalRegister } from "../ModalRegister/ModalRegister";
import { IoIosArrowBack } from "react-icons/io";
import { functionLogin } from "../../../Api/Api";


const ModalLogin = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const userData = useSelector(state => state.userSlice);
    const dispatch = useDispatch();

    function handleShow(v) {
        setFullscreen(v);
        setShow(true);
    }
    const login = (e) => {
        e.preventDefault()
        //POST al backend
        functionLogin(e, userData, dispatch)
        setShow(false);
    }
    return (
        <>
            <MainBtn
                name='Log in'
                className='btn__login--home btn-lg text-decoration-none'
                openModal={handleShow}
                variant='link'
            />


            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header>
                    <Modal.Title>
                        <IoIosArrowBack onClick={() => setShow(false)} className='cursor-pointer' />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className='mx-2'>
                        <div className='m-4 row'>
                            <h1 className='text-center'>Sign</h1>
                            <p className='text-center'>You will get access to all your songs and playlists.</p>
                        </div>
                        <form onSubmit={e => login(e)} className="needs-validation">
                            <div className="row g-3">
                                <div className="form-floating mb-3">
                                    <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                            </div>
                            <button className="mt-2 w-100 btn btn-color btn-lg" type="submit">Log in</button>

                        </form>
                        <div className="mt-4 row">
                            <ModalRegister />
                            <ModalRecoveryPassword setShow={setShow} />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalLogin