import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
const KEY = 'AIzaSyC3Lqw5sUJy32pGO8wEPuRfo2OiNDIE5No';

class App extends React.Component{
    state= {videos: [] };
    onTermSubmit =async term =>{
         const response= await youtube.get('/search', {
             params: {
                 q:term,
                 part: 'snippet',
                 maxResults: 5,
                 key: KEY,
                 type: 'video',
             }
         });
         this.setState({
             videos: response.data.items
         })
    };
    render(){
        return(
            <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


export default App;