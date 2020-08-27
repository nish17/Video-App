import React from 'react'

import data from '../data.json';
import Videolist from './VideoList';

export default function Video() {
  return (
    <div className='main-app' >
      <Videolist VideosArray={data} />
    </div>
  )
}
