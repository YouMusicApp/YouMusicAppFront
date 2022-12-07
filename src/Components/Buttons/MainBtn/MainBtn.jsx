import React from 'react'
import { Button } from 'react-bootstrap'
import './../StyleBtn.css'

export const MainBtn = ({ name, className, variant, openModal, size }) => {
    return (
        <Button className={className} size={size} variant={variant} onClick={() => openModal(true)}>
            {name}
        </Button>
    )
}
export const MainBtnStd = ({ name, className, variant, onClick, size }) => {
    return (
        <Button className={className} variant={variant} size={size} onClick={() => {onClick()}}>
            {name}
        </Button>
    )
}