import React from 'react'
import { useState } from 'react'


const bombillo = () => {

    const [onOff, setOnOff] = useState('off')

    const toggleOnOff = () => {
        if (onOff === 'off') {
            setOnOff('on')
        }else{
            setOnOff('off')
        }
    }

    return (
        <div className='caja-bombillo'>
            <div className={`circle ${onOff}`}></div>
            <button className='btn' onClick={toggleOnOff}>{onOff}</button>
        </div>
    )
}

export default bombillo