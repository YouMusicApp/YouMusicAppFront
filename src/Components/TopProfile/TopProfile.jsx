import './TopProfile.css'
import Slider from "../Slider/Slider"
import { useSelector } from 'react-redux';


export const TopProfile = () => {

    const array = useSelector(state => state.userSlice);
  

    return (
        <>
            <div className="mx-0 ">
                <div className="">
                    <div className=""> <img className="card-img-top" src="https://images.pexels.com/photos/7629316/pexels-photo-7629316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap" />
                        <div className="card-body little-profile text-center p-1">
                            <div className="pro-img"><img src="https://images.pexels.com/photos/3756770/pexels-photo-3756770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" /></div>
                            <h3 className="m-b-0">Brad Macullam</h3>
                            <p>Web Designer &amp; Developer</p>
                            {/* <a className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <Slider
                    slidesPerView={2}
                    size='small'
                    array={array}
                    title='My favorites songs'
                />
            </div>
        </>
    )
}
