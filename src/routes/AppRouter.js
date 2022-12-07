import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { ProfilePage } from '../pages/ProfilePage'
import SongPage from '../pages/SongPage'
import { PrivateRoutes } from './PrivateRoutes'


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/song/:id" element={<SongPage />} />


                <Route path='/profile' element={<PrivateRoutes><ProfilePage /></PrivateRoutes>} />
            </Routes>
        </>
    )
}

export default AppRouter