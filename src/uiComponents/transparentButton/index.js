import React from 'react'
import './transaparent.scss'

const TransaprentButton = (props) => {
    const { buttonTitle, onClick } = props
    return (
        <button className='buttonSize' onClick= { onClick }>{buttonTitle}</button>
    )
}

export default TransaprentButton