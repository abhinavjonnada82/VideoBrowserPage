import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
    //it equvailent to const video = props.video
    //const onVideoSelect = props.onVideoSelect
    const imageUrl = video.snippet.thumbnails.default.url;
    //in video list when we created our video list item
    //we passed in the video as property video, so to get 
    //access to the video inside of video list item 
     //const video = props.video;
    //this first object in the arguments to re-apper has //propery video, please grab that video and declare a //new video or a new variable called videos
    return (
        <li onCLick-{()=> onVideoSelect(video)} className="list-group-item"> 
         <div className="video-list media">
          <div className="media-left">
           <img className="media-object" src={imageUrl} />
         </div>
         <div className="media-body">
           <div className="media-heading">{video.snippet.title}</div>
         </div>
        </li>
        );
};


export default VideoListItem;