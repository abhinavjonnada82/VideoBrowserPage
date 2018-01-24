import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyB_w8fwxmIWw-rxETGS6y1kgHha_fX8A78';

//Create a new component. This comp should prod some HTML


class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        }; //default state, contains list of objects at the startup screen
        
        //search funciton, when the app starts up, the construcotr //runs right away, bcz we make a new of instance of app and 
        //that will immediatelt kick off a search with the term //surfboards tehhn the call back function daat will be //called with the list of videosand update this.setState //with new list of videos 
        this.videoSearch('surfboards'); //constructor
       
    }
    
    videoSearch(term) {
        //inital search
     YTSearch({Key: API_KEY, term: term}, (videos) => {
            //this.setState({videos});    
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
     });
    
    
    }
    
    render() {
        const videoSearch =_/debounce((term) => {this.videoSearch(term) }, 300);
        //debounce takes this inner function right here, this one that we pass and it returns a new function that can only be called once every 300 milliseconds
        return (
        <div> 
        <SearchBar onSearchTermChange={videoSearch}  />
            //so basically when search bar calls on search term 
            //change it will do so with a search term you know a 
            //string and that will be sent right into this video //search and thats where the term will pop up. we took
            //this method video search and we passed down into //search bar under the property on search term change. //So all search bar has to do ic call on search props
//start on search change on search term with the new search tem and that wil call our searching function which will go ahead and fetch a new list of videos
            //app is the parent to videolist, videolist needs get access to the videos that are in app state
        <VideoDetail video={this.state.selectedVideo}/>    
        <VideoList 
            onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
    //it takes a video and it updates the selected video, 
    //we pass onVideoSelecr as a property into video list.js
    //and videolist.js takes rhat property and it passes it into //video list item video that item takes that property and says
    //whenever I get clicked call theat function with the video that I was passed and since each video list item has a differnt video
    //define the func and all it does is it takes a videos 
    //and defines it on apps state with a new video
            videos={this.state.videos} />
            //passingprops
            //apps render //methhod and the data we're passing fform app to video 
            //list videos is referred so we're passing prop videos 
            //to video list 
        </div>
        );
    }
}
    




// Take this comp generated HTNL and put it on the page
ReactDOM.render(<App/>, document.querySelector('.container'));
