import React from 'react'
import './Widgets.css'

function Widgets() {
  return (
    <div className='widgets'>
      <iframe 
        title="Wikipedia widget"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwikipedia%2F&tabs=timeline&width=340&height=15000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="100%" style={{border: "none", overflow:"hidden"}} frameborder="0" allow="encrypted-media" >
      </iframe>
    </div>
  )
}

export default Widgets
