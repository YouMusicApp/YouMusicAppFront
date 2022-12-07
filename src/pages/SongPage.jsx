import React from 'react'
import { useSelector } from 'react-redux';
import Slider from '../Components/Slider/Slider'

const SongPage = () => {

    const tracks = useSelector(state => state.trackSlice);

    return (
        <>
            <div className="mx-0 ">
                <div className="">
                    <div className="">
                        <div className="card-body little-profile text-center p-4">
                            <div className="song"><img src="https://i.imgur.com/8RKXAIV.jpg " alt="user" /></div>
                            <h3 className="m-b-0">Brad Macullam</h3>
                            <p>Web Designer &amp; Developer</p>
                            <button className="m-t-10 waves-effect waves-dark btn btn-dark btn-md btn-rounded" data-abc="true">Play</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container mb-4'>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </table>
            </div>


            <div className='slider'>
                <Slider
                    slidesPerView={2}
                    spaceBetween={100}
                    size='small'
                    img='img__small'
                    array={tracks}
                    title='Tracks'
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                        },
                    }}
                />
            </div>
        </>
    )
}

export default SongPage