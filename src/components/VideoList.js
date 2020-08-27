import React from 'react';
import Videodetail from './VideoDetail';
import '../App.css';
export default function Videolist({ VideosArray }) {
  return (
    <div className='video-view-container'>
      {VideosArray.map((video, i) => (
        <Videodetail key={i} videoData={video} />
      ))}
    </div>
  );
}
