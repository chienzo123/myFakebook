import React, {useState} from 'react'
import './postCreater.scss'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Provider from '../context';





function PostCreator(){
    const [input, setInput] = useState('');
    
    const user = {
        img : "https://lh3.googleusercontent.com/a-/AOh14GjgVLZkhG5nY06FjlJoSmPUh-9Xb2sTZW9EObgF=s96-c",
        name : "Hoàng Quyết Chiến"
    }
 
    return(
        <div className="postcreator">
            <div className="postcreator__top">
                <Avatar src={user.img} />
                <form>
                    <input value={input} onChange={(e)=> setInput(e.target.value)} className="postcreator__input" type="text" placeholder = {`What do your mind, ${user.name}`} />
                   
                </form>
            </div>
            <div className="postcreator__bottom">
            <div className="postcreator__bottom--option">
                <VideocamIcon style={{color: "red"}}/>
                <h3>Live Video</h3>
            </div>
            <div className="postcreator__bottom--option">
                <PhotoLibraryIcon style={{color: "green"}}/>
                <h3>Photo/Video</h3>
            </div>
            <div className="postcreator__bottom--option">
                <InsertEmoticonIcon style={{color: "orange"}}/>
                <h3>Feeling/Activity</h3>
            </div>
            </div>
            <div className="postcreator__bottom1">
           <button  onClick = {() => {
        var date = new Date();
        var connecteData = firebase.database().ref('post');
      
        connecteData.push({

            id: Math.random(),
            authorName: user.name,
            authorPic: user.img,
            message: input,
            timestamp: date.toDateString(),
            optionalImg: "",
            like: 0
        })
        
    } } className="btn">Post</button>
            </div>

        </div>
    )
}
export default PostCreator