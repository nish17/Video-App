import React from 'react'

export default function VideoInfo({userName}) {
  return (
    <div className='video-info' >
      {!userName? ' - ': userName}
    </div>
  )
}
