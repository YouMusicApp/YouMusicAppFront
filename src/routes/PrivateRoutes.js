import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = ({ children }) => {
    const usersData = useSelector(state => state.userSlice);
    

    return usersData.isLogged ? children : <Navigate to="/" />
}
