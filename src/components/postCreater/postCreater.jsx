import React  from 'react'
import './postCreater.scss'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function PostCreator(){
    const user = {
        img : "https://lh3.googleusercontent.com/a-/AOh14GjgVLZkhG5nY06FjlJoSmPUh-9Xb2sTZW9EObgF=s96-c",
        name : "Hoàng Quyết Chiến"
    }
    return(
        <div className="postcreator">
            <div className="postcreator__top">
                <Avatar src={user.img} />
                <form>
                    <input value="" className="postcreator__input" type="text" placeholder = {`What do your mind, ${user.name}`} />
                    <button onClick="" type="submit" className="">Submit</button>
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

        </div>
    )
}
export default PostCreator