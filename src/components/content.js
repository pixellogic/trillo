import React from 'react'
import SideBar from './side-bar'
import Hotelview from './hotel-view'
export default function Content() {
    return (
        <div className = "content">
            <SideBar />
            <Hotelview />
        </div>
    )
}
