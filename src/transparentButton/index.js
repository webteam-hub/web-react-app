import react from 'react'
import { render } from 'react-dom'
import './transaparent.scss'

const TransaprentButton = (props) => {
    const { buttonTitle, onClick } = props
    return (
        <button className='buttonSize' onClick= { onClick }>{buttonTitle}</button>
    )
}

export default TransaprentButton