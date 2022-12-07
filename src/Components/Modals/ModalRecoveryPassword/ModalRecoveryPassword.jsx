import { useState } from "react";
import { Modal } from "react-bootstrap";
import { MainBtn } from "../../Buttons/MainBtn/MainBtn";
import { IoIosArrowBack } from "react-icons/io";
// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchPutUser } from "../../../Api/putApi";


export const ModalRecoveryPassword = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const usersData = useSelector(state => state.userSlice);
    const dispatch = useDispatch();

    const handleShow = (v) => {
        setFullscreen(v);
        setShow(true);
    }
    const recovery = (e) => {
        e.preventDefault()
        // get info from form ...
        const form_user = {
            email: e.target.email.value,
            question: e.target.question.value,
            answer: e.target.answer.value,
            editpassword: e.target.editpassword.value
        }
        // create interims...
        const interim = usersData.list.find(e => e.email === form_user.email);
        const edit_user = {
            ...interim,
            password: form_user.editpassword,
        }
        // auth interim with form...
        if (interim && interim.question === form_user.question && interim.answer === form_user.answer) {
            fetchPutUser(edit_user.id, edit_user, dispatch);
            setShow(false);
            console.log('changed password correctly');
        } else alert('Incorrect data try again');
    }

    return (
        <>
            <MainBtn name='Forgot Password?' className='text-center text-decoration-none' variant='link' openModal={handleShow} />


            <Modal className='p-0' show={show} fullscreen={fullscreen} onHide={() => setShow(false)} >
                <Modal.Header>
                    <Modal.Title><IoIosArrowBack onClick={() => setShow(false)} className='' /></Modal.Title>
                    <Modal.Title>YouMusic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <div className='m-4 row'><h1 className='text-center'>Account Recovery</h1></div>
                        <form onSubmit={e => recovery(e)} className="needs-validation">
                            <div className="row g-3">

                                <div className="input-group mb-3">
                                    <input type="text" name="email" className="form-control" placeholder="email@gmail.com" aria-label="email@gmail.com" aria-describedby="basic-addon2" />
                                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                                </div>

                                <div className="input-group mb-3">
                                    <select name="question" className="form-select" id="inputGroupSelect02">
                                        <option defaultValue>Choose...</option>
                                        <option>In what city were you born?</option>
                                        <option>What is the name of your favorite pet?</option>
                                        <option>What is your mother's maiden name?</option>
                                    </select>
                                    <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" name="answer" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Answer here</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" name="editpassword" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">New password</label>
                                </div>

                            </div>

                            <button className="mt-2 w-100 btn btn-color btn-lg" type="submit">Recovery</button>

                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}