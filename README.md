# Video App

Deployed on: [![Netlify Status](https://api.netlify.com/api/v1/badges/f048c444-ae9c-4e50-89c2-ad4bb3b1c9f0/deploy-status)](https://app.netlify.com/sites/gifted-nightingale-1ff2e9/deploys)

Check it out: https://rizzle.snimesh.com

## Problem Statement:

The task is to design and develop a video playing web application using React.js

## Approach to Swipe Feature (works perfectly in Mozilla Firefox)

- Nested Scroll Snapping
  - Vertical Scroll Snapping for every single video
    - `.video-view-container` is the parent
    - `.video-view` is the child
  - Horizontal Scroll Snapping for video to creator info
    - `.video-view` is the parent
    - `.video-info` is the child

## Known Issues.

- Video is not playing on scroll
- Snap scrolling works best on firefox (exactly as demostrated in the assignment demo video), but not on `Chrome`.
