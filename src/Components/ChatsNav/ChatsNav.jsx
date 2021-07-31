import React from 'react'
import {FaBars,FaEllipsisV} from 'react-icons/fa'
function ChatsNav() {
    return (
        <div className="navbar w-100 d-flex justify-content-between p-2">
        <div className="d-flex justify-content-start">
            <span className="p-1 text-light"><FaBars/></span>
            <span className="p-1 text-light">Rasmio Chat</span>
        </div>
        <div className="">
            <span className="p-1 text-light"><FaEllipsisV/></span>
        </div>
        </div>
    )
}

export default ChatsNav
