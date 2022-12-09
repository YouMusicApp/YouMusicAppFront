import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TopInfo } from '../Components/TopInfo/TopInfo';

export const AlbumPage = () => {
    const { id } = useParams();
    const albums = useSelector(state => state.albumSlice.list);
    const album = albums.find((element) => element.id === parseInt(id));

    return (
        <>
        
            <TopInfo data={album}/>

        </>
    )
}
