import React from 'react'
import './leftSlidebar.scss'
import SidebarRow from '../slidebarRow/slidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import firebase from 'firebase';


function LeftSidebar () {

    const user = {
        img : firebase.auth().currentUser.photoURL,
        name : firebase.auth().currentUser.displayName
    }
    return(
        <div className="sidebar sidebar__left">
            <SidebarRow src = {user.img} title = {user.name} />
            <SidebarRow Icon = {LocalHospitalIcon} title = "Covid-19 Imfomation Center" />
            <SidebarRow Icon = {EmojiFlagsIcon} title = "Pages" />
            <SidebarRow Icon = {PeopleIcon} title = "Friends" />
            <SidebarRow Icon = {ChatIcon} title = "Messenger" />
            <SidebarRow Icon = {StorefrontIcon} title = "Marketplace" />
            <SidebarRow Icon = {VideoLibraryIcon} title = "Videos" />
            <SidebarRow Icon = {ExpandMoreIcon} title = "More" />

        </div>
    )
}
export default LeftSidebar;