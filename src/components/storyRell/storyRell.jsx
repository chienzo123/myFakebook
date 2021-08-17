import React from 'react'
import Story from '../story/story'
import './storyRell.scss';
import AddStory from '../addStories/addStories';
import firebase from 'firebase';



function StoryReel(){
    const user = {
        img : firebase.auth().currentUser.photoURL,
        name : firebase.auth().currentUser.displayName
    }
    return (
        <div className="stories">
            <AddStory userAvatar={user.img} />
           
            <Story image="https://images.pexels.com/photos/4873818/pexels-photo-4873818.jpeg" authorPic="https://images.generated.photos/ZD6JRE8uGrKmICH-wDvrn-MQ3am4ZZriA4V6ezTbuXQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNDI4MzQuanBn.jpg" authorName="Đăng Quý" />
            <Story image="https://images.pexels.com/photos/620334/pexels-photo-620334.jpeg" authorPic="https://images.generated.photos/0U5vP_6lPnD4gIDHcJx8zF__j93rWh-yD5DwwyiL8sE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NjQ4MjYuanBn.jpg" authorName="Marry Nguyễn" />
            <Story image="https://images.pexels.com/photos/5198758/pexels-photo-5198758.jpeg" authorPic="https://images.generated.photos/BrDRvr6gw3e02GEjf9-BEGw44s5qEOjff3B5agfU6lY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MTg5MDAuanBn.jpg" authorName="Lê Tùng" />
            <Story image="https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg" authorPic="https://images.generated.photos/3ueJ9FAPIZ6AemZjtUUIRU6Gdk4Zr694ZVJFY_jB9tA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMjc5NjQuanBn.jpg" authorName="Ngọc Ánh" />
            <Story image="https://images.pexels.com/photos/620334/pexels-photo-620334.jpeg" authorPic="https://images.generated.photos/0U5vP_6lPnD4gIDHcJx8zF__j93rWh-yD5DwwyiL8sE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NjQ4MjYuanBn.jpg" authorName="Hữu Đạt" />
        </div>
    )
}
export default StoryReel