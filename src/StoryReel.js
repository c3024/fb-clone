import React from 'react'
import './StoryReel.css' 
import Story from './Story'

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story image="https://images.pexels.com/photos/15588318/pexels-photo-15588318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             profileSrc="https://images.pexels.com/photos/15550234/pexels-photo-15550234.jpeg"
             title="Manju"
      />
      <Story image="https://images.pexels.com/photos/14865792/pexels-photo-14865792.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
             profileSrc="https://images.pexels.com/photos/3459901/pexels-photo-3459901.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
             title="Haddu"
      />
      <Story image="https://images.pexels.com/photos/15362644/pexels-photo-15362644.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
             profileSrc="https://images.pexels.com/photos/15119320/pexels-photo-15119320.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
             title="Chaitu"
      />
      <Story image="https://images.pexels.com/photos/13233270/pexels-photo-13233270.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
             profileSrc="https://images.pexels.com/photos/13208656/pexels-photo-13208656.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
             title="Bhargavi"
      />
      <Story image="https://images.pexels.com/photos/15452131/pexels-photo-15452131.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
             profileSrc="https://images.pexels.com/photos/15253320/pexels-photo-15253320.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
             title="Chaitanya"
      />
      

      
      
    </div>
  )
}

export default StoryReel
