import './TopProfile.css'
import Slider from "../Slider/Slider"
import { useSelector } from 'react-redux';


export const TopProfile = () => {
    // Explicar como reciclar el componente
    const array = useSelector(state => state.userSlice);

    return (
        <>
            <div className="mx-0 ">
                <div className="">
                    <div className=""> <img className="card-img-top" src="https://i.imgur.com/K7A78We.jpg" alt="Card image cap" />
                        <div className="card-body little-profile text-center p-1">
                            <div className="pro-img"><img src="https://i.imgur.com/8RKXAIV.jpg " alt="user" /></div>
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
