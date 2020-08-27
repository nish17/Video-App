import React, { useRef } from 'react';
import '../App.css';
import VideoInfo from './VideoInfo';

export default function Videodetail({ videoData }) {
  const videoInfo = { ...videoData.video };
  const channelInfo = { ...videoData.channel };
  const userInfo = { ...channelInfo.user };

  const videoRef = useRef(null);

  return (
    <section className='video-view'>
      <video
        className='video-player'
        onFocus={() => videoRef.current.play()}
        onBlur={() => videoRef.current.pause()}
        ref={videoRef}
        autoPlay
      >
        <source
          src={videoInfo.originalUrl}
          type='video/mp4'
          allow='autoplay; fullscreen'
        />
      </video>
      <div className='video-info-container'>
        <VideoInfo userName={userInfo.name} />
      </div>
    </section>
  );
}
