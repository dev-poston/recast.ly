import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import VideoListEntry from './VideoListEntry.js';
import apiKey from '../config/youtube.js';
import Search from './Search.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      currentVideo: {snippet: {title: '', description: ''}, id: {videoId: ''}}
    };
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }

  onListClick(video) {
    this.setState({
      currentVideo: video
    });
  }



  componentDidMount() {
    this.getYouTubeVideos('cat', 5);
  }

  getYouTubeVideos(searchQuery, maxSearch) {
    let options = {query: searchQuery, key: apiKey, max: maxSearch};
    searchYouTube(options, (data)=>(
      this.setState({
        videoList: data.items,
        currentVideo: data.items[0]
      })
    ));
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search search={this.getYouTubeVideos}/> </em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo} /></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.videoList} onClick={this.onListClick.bind(this)}/></em></h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
