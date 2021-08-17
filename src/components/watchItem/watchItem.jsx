import React, {useState} from 'react'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './watchItem.scss'


function WatchItem({authorPic, authorName, timestamp, message, optionalVid, like, id}){
    const [check, setCheck] = useState(true);
    
    return (
        
        <div className="post">
            <div className="post__top">
            <Avatar src ={authorPic} className="post__avatar" />
            <div className="post__info">
                <h3>{authorName}</h3>
                <p>{timestamp}</p>
            </div>
         </div>
        <div className="post__bottom">
        <p>{message}</p>
        </div>
        <div className="post__media">
        <img src={optionalVid} className="post__media--img" alt=""  />
        
        </div>
        <p className="like" id = {`1${id}`}>{like} người khác</p>
       <div className="post__options">
        <div className="post__options--option " id = {`${id}`}  onClick={()=> {
        
           setCheck(!check)
            if(check)
            document.getElementById(id).setAttribute("style","color:blue")
            document.getElementById("1"+id).innerHTML = "Bạn và " + like + " người khác";
            if(!check){
                document.getElementById(id).removeAttribute("style")
                document.getElementById("1"+id).innerHTML = "" + like + " người khác";
            }
            console.log(check);
        }
            
            }>
        <ThumbUpIcon/>
        <p>Like</p>
        </div>
   
       
       
        <div className="post__options--option">
        <ChatBubbleOutlinedIcon/>
        <p>Comment</p>
        </div>
        <div className="post__options--option">
        <NearMeIcon/>
        <p>Share</p>
        </div>
        <div className="post__options--option nomob">
        <AccountCircleIcon/>
        <ExpandMoreIcon/>
        </div>
        </div>
       </div>
       
            
    )
}

export default WatchItem