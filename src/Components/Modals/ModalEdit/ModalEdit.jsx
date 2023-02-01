// redux
import { useDispatch, useSelector } from 'react-redux';
import { setUserEdit } from '../../../redux/features/user/userSlice';
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { useAuth0 } from '@auth0/auth0-react';
import { fetchEditUser } from '../../../Api/putApi';


export const ModalEdit = () => {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const { getAccessTokenSilently } = useAuth0();

    const userData = useSelector(state => state.userSlice);
    const user = userData.userLogged;

    const dispatch = useDispatch();

    function handleShow(v) {
        setFullscreen(v);
        setShow(true);
    }

    const editForm = async (e, id) => {
        e.preventDefault()
        const token = await getAccessTokenSilently();

        const editUser = {
            ...user,
            "userData": {
                ...user.userData,
                username: e.target.username.value,
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                complete_name: `${e.target.first_name.value} ${e.target.last_name.value}`,
            }

        }
        fetchEditUser(id, editUser, token, dispatch, setUserEdit)
    }

    return (
        <>
            <Button onClick={() => handleShow('sm-down')} className='btn text-dark border-none btn-outline-link' variant='btn-link'><BsThreeDots /></Button>

            <Modal className='p-0' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header>
                    <Modal.Title><IoIosArrowBack onClick={() => setShow(false)} className='cursor-pointer' /></Modal.Title>
                    <Modal.Title>YouMusic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='m-4 row'><h1 className='text-center'> Edit Account Settings </h1></div>
                    <div className='mx-2'>


                        <form onSubmit={editForm} className="needs-validation">
                            <div className="row g-3">
                                <div className="form-floating mb-3">
                                    <input type="text" name="username" className="form-control" placeholder="name@example.com" defaultValue={user.userData.username} />
                                    <label htmlFor="floatingInput">Username</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" name="first_name" className="form-control" placeholder="name@example.com" defaultValue={user.userData.first_name} />
                                    <label htmlFor="floatingInput">First name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" name="last_name" className="form-control" placeholder="name@example.com" defaultValue={user.userData.last_name} />
                                    <label htmlFor="floatingInput">Last name</label>
                                </div>
                            </div>
                            <button className="mt-4 w-100 btn btn-color btn-lg" type="submit" onClick={() => setShow(false)}>Save</button>

                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    )
}