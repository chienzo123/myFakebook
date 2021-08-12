import React from 'react'
import './rightSlidebar.scss'
import Birthdays from '../birthday/birthday'
import ChatContacs from '../chatContacts/chatContacts';

function RightSidebar(){
    return(
        <div className="sidebar sidebar__right">
            <Birthdays />
            <ChatContacs />

        </div>
    )
}
export default RightSidebar
