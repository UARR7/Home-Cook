import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>Delivering varieties of locations <br />HomeCook</p>
            <div className="app-download-platforms">
                <img src={assets.map} alt="" />
                {}
            </div>
        </div>
    )
}

export default AppDownload
