import './TopProfile.css'
import { useSelector } from 'react-redux';
import { ModalEdit } from '../Modals/ModalEdit/ModalEdit';

export const TopProfile = () => {

    const userData = useSelector(state => state.userSlice);
    const user = userData.userLogged;
    

    return (
        <>
            <div className="mx-0 ">
                <div className="">
                    <div className=""> <img className="card-img-top" src="https://www.fotocasion.es/media/img/articulos/35203-fondo-colorama-rose-pink-84-27-FOTOCASION-OFERTA-DESCUENTO.jpg" alt="Cimage" />
                        <div className="card-body little-profile text-center p-2">
                            <div className="pro-img"><img src={user.profilePicture ? user.profilePicture : 'https://bootdey.com/img/Content/avatar/avatar7.png'} alt="user" /></div>
                        <div >
                            <h2>{user.userData.username} </h2>
                            <p>{user.userData.first_name} {user.userData.last_name}</p>
                            <p>{user.userData.email}</p>
                        </div>
                                {/* <button href="#" type="submit" className="btn btn-primary profile">Edit</button> */}
                                <ModalEdit />
                            {/* <a className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
