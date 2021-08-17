import React, {useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import firebase from 'firebase';
import './hader.scss';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Avatar from '@material-ui/core/Avatar';



import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


function Header(){
    const [checked, setChecked] = useState(true);
    const user = {
        img : firebase.auth().currentUser.photoURL,
        name : firebase.auth().currentUser.displayName
    }
    
    const activeHome = () => {
        document.getElementById("home").setAttribute("class","header__middle--option header__middle--option-active");
        document.getElementById("watch").setAttribute("class", "header__middle--option")
    }
    const activeWatch = () => {
        document.getElementById("watch").setAttribute("class","header__middle--option header__middle--option-active");
        document.getElementById("home").setAttribute("class", "header__middle--option")
    }
    return (
        <nav className="header">
            <div className="header__left">
        <img className='logo'src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="anh"/>
        <div className="header__left--input">
            <SearchIcon/>
            <input type="text" placeholder="Search Fakebook" className="searchinput"/>


        </div>
        <IconButton className="searchinput__mob">
            <SearchIcon/>
        </IconButton>
            </div>
            <div className="header__middle">

                <div className="header__middle--option header__middle--option-active" id="home">
                    <Link to="/" >
                    <HomeIcon fontSize="large" onClick={activeHome} />
                    </Link>
                </div>
                <div className="header__middle--option" id="watch">
                     <Link to="/watch" >
                    <SubscriptionsOutlinedIcon fontSize="large" onClick={activeWatch}/>
                    </Link>
                </div>
                <div className="header__middle--option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__middle--option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__middle--option">
                    <SupervisedUserCircleRoundedIcon fontSize="large"/>
                </div>

            </div>
            <div className="header__right">
            <IconButton>
                <AddIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon/>
            </IconButton>
            <IconButton className="dad" onClick={() => {
                setChecked(!checked);
                if(checked)
                document.getElementsByClassName("info")[0].setAttribute("style", "display: block !important;")
                if(!checked)
                document.getElementsByClassName("info")[0].removeAttribute("style")
            }}>
                <ExpandMoreIcon/>
            </IconButton>
            <div className="info">
            <button className="info__user">
                <div className="inix">
                <Avatar alt="Cindy Baker" src={user.img} />
                </div>
            <div className="text-user">
             <strong>{user.name}</strong>
             <p>Try cập trang cá nhân của bạn</p>
             </div>

            </button>
            
            <button className="info__icon">
                <div className="inix">
                <IconButton>
                <Brightness2Icon  />
             </IconButton>
                </div>
            
             <strong>Màn Hình / Trợ năng</strong>
            </button>
            <button className="info__icon">
                <div className="inix">
                <IconButton>
                <HelpIcon  />
             </IconButton>
                </div>
            
             <strong>Trợ Giúp / Hỗ Trợ</strong>
            </button>
            <button className="info__icon">
                <div className="inix">
                <IconButton>
                <SettingsIcon  />
             </IconButton>
                </div>
            
             <strong>Cài Đặt</strong>
            </button>
            <button className="info__icon"  onClick={() => firebase.auth().signOut()}>
                <div className="inix">
                <IconButton>
                <ExitToAppIcon  />
             </IconButton>
                </div>
            
             <strong>Đăng Xuất</strong>
            </button>
            
            
            </div>
            </div>
        </nav>
    )
}
export default Header