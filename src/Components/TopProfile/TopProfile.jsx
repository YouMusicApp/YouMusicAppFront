import './TopProfile.css'
import { useSelector } from 'react-redux';



export const TopProfile = () => {

    const userData = useSelector(state => state.userSlice);
    const user = userData.userLogged.userData;


    return (
        <>
            <div className="mx-0 ">
                <div className="">
                    <div className=""> <img className="card-img-top" src="https://images.pexels.com/photos/7629316/pexels-photo-7629316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cimage" />
                        <div className="card-body little-profile text-center p-1">
                            <div className="pro-img"><img src={user.profilePicture ? user.profilePicture : 'https://bootdey.com/img/Content/avatar/avatar7.png'} alt="user" /></div>
                            <h3 className="m-b-0">{user.first_name} {user.last_name}</h3>
                            <p className="m-b-0">{user.username}</p>
                            <p>{user.email}</p>
                            {/* <a className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
