import React from 'react'
import './birthday.scss'
import SidebarRow from '../slidebarRow/slidebarRow'
import CakeIcon from '@material-ui/icons/Cake';

function Birthdays(){
    return (
        <div className="birthdays birthdays__wrp">
            <h4 className="birthdays_header">Birthdays</h4>
            <SidebarRow Icon={CakeIcon} birthdays = {["Trang Trịnh","Ngọc Ánh","Đăng Quý","Tiến Tùng"]} />
        </div>
    )
}
export default Birthdays
