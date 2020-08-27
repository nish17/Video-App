import React from 'react'

import data from '../data.json';
import Videolist from './VideoList';

export default function Video() {
  return (
    <div>
    <Videolist VideosArray={data} />
    </div>
  )
}
