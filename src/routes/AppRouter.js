import { Routes, Route } from 'react-router-dom'
import { AlbumPage } from '../pages/AlbumPage'
import { ArtistPage } from '../pages/ArtistPage'
import { ExplorePage } from '../pages/ExplorePage'
import GenrePage from '../pages/GenrePage'
import HomePage from '../pages/HomePage'
import { PlaylistPage } from '../pages/PlaylistPage'
import { ProfilePage } from '../pages/ProfilePage'
import SearchPage from '../pages/SearchPage'
import SongPage from '../pages/SongPage'
import { PrivateRoutes } from './PrivateRoutes'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/track/:_id" element={<SongPage />} />
                <Route path="/album/:_id" element={<AlbumPage />} />
                <Route path="/playlist/:_id" element={<PlaylistPage />} />
                <Route path="/artist/:_id" element={<ArtistPage />} />
                <Route path="/explore/:genre" element={<GenrePage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/search" element={<SearchPage />} />

                <Route path='/profile' element={<PrivateRoutes><ProfilePage /></PrivateRoutes>} />
            </Routes>
        </>
    )
}

export default AppRouter