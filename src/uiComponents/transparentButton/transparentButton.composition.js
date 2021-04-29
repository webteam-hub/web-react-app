import React from 'react'
import TransaprentButton from '.'

export const BasicTransparentButton = () => {
    return <TransaprentButton buttonTitle='Click Me' onClick= {() => (alert("Hello! I am an alert box!!"))}/>
}