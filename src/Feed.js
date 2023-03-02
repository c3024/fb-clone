import React, { useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';
import { useState } from 'react';

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts')
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => (
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    ));
  }, []);

  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        {console.log("posts is " + posts)};
        {posts.map(post => {
          return <Post 
            key = {post.data.id}
            profilePic = {post.data.profilePic}
            message = {post.data.message}
            timestamp = {post.data.timestamp}
            username = {post.data.username}
            image = {post.data.image}
          />
        })}
        <Post 
          profilePic="https://images.pexels.com/photos/10768835/pexels-photo-10768835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          message="Wow this works!"
          timestamp="This is a timestamp"
          username="Manju"
          image="https://images.pexels.com/photos/15658380/pexels-photo-15658380.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Post 
          profilePic="https://images.pexels.com/photos/14446665/pexels-photo-14446665.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          message="Wow this works!"
          timestamp="This is a timestamp"
          username="Manju"
          image="https://images.pexels.com/photos/15326426/pexels-photo-15326426.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
    </div>
  )
}

export default Feed
