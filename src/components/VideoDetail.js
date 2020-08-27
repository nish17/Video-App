import React from 'react';
import '../App.css';
import VideoInfo from './VideoInfo';

export default function Videodetail({ videoData }) {
  const videoInfo = { ...videoData.video };
  const channelInfo = { ...videoData.channel };
  const userInfo = { ...channelInfo.user };
  return (
    <section className='video-view'>
      <video className='video-player'>
        <source src={videoInfo.originalUrl} type='video/mp4' />
      </video>
      <div className='video-info-container'>
        <VideoInfo userName={userInfo.name} />
      </div>
    </section>
  );
}
