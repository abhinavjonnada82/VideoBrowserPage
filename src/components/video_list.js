import React, {Component} from 'react';
import VideoListItem from './video_list_item';
import ReactDOM from 'react-dom';


const VideoList = (props) => {
   const videoItems = props.videos.map((video) => {
        return(
            <VideoListItem
            onVideoSelect= {props.onVideoSelect}
            <VideoListitem key={video.etag} video={video} />
    });
        
    return (
        <ul className="col-md-4 list-group">
        {videoItems}
        </ul>
        );
};

export default VideoList;

        