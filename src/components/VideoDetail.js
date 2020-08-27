import React from 'react';
import '../App.css';
export default function Videodetail({ videoData }) {
  const videoInfo = { ...videoData.video };
  return (
      <section className='video-view' >
        <video className='video-player' controls>
          <source src={videoInfo.originalUrl} type='video/mp4' />
        </video>
      </section>
    
  );
}
