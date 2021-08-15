import React  from 'react'
import './feed.scss'
import StoryReel from '../storyRell/storyRell'
import PostCreator from '../postCreater/postCreater'
import {Provider} from '../context.jsx'
import Contacts from './Contacts'

function Feed(){
    return(
        <div className="feed">
        <StoryReel/>
        <PostCreator/>
        <Provider>
        <Contacts/>
        </Provider>
        </div>
    )
}
export default Feed