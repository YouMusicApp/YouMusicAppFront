import './TopProfile.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikeTrack } from '../../Api/putApi';
import { setUserEdit } from '../../redux/features/user/userSlice';

export const TopProfile = () => {

    const userData = useSelector(state => state.userSlice);
    const user = userData.userLogged;
    const dispatch = useDispatch();

    const editForm = (e) => {
        e.preventDefault()

        const editUser = {
            ...user,
            "userData": {
                username: e.target.username.value,
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                profilePicture: user.userData.profilePicture
            }

        }
        fetchLikeTrack(editUser)

        dispatch(setUserEdit(editUser))
console.log(editUser)
    }


    return (
        <>
            <div className="mx-0 ">
                <div className="">
                    <div className=""> <img className="card-img-top" src="https://images.pexels.com/photos/7629316/pexels-photo-7629316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cimage" />
                        <div className="card-body little-profile text-center p-1">
                            <div className="pro-img"><img src={user.profilePicture ? user.profilePicture : 'https://bootdey.com/img/Content/avatar/avatar7.png'} alt="user" /></div>

                            <form onSubmit={editForm} action="#" className="form-group profile ">
                                <input type="text" placeholder="name" name="username" className="username" defaultValue={user.userData.username} />
                                <input type="text" placeholder="first_name" name="first_name" className="first_name" defaultValue={user.userData.first_name} />
                                <input type="text" placeholder="last_name" name="last_name" className="last_name" defaultValue={user.userData.last_name} />
                                <inp className="m-b-0"ut type="text" placeholder="email" name="email" className="email" defaultValue={user.userData.email} />
                                <input type="password" placeholder="password" name="password" className="password" defaultValue={user.userData.password} />
                                <button href="#" type="submit" className="btn btn-primary profile">Edit</button>
                            </form>
                            <p>{user.email}</p>
                            {/* <a className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
