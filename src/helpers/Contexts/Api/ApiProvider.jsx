import React from 'react'
import { getDataUser } from '../../../Api/Api'
import { postDataRegisterUser } from '../../../Api/ApiPost'
import { ApiContext } from './ApiContext';

const ApiProvider = ({ children }) => {

    const fetchGetUser = async () => {
        const data = await getDataUser();
    }

    const fetchRegisterUsers = async () => {
        const data = await postDataRegisterUser();
    }

    return (
        <ApiContext.Provider value={{ fetchGetUser, fetchRegisterUsers }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider