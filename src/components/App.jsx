import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      video: exampleVideoData[0],
      query: '',
      max: 5,
      key: YOUTUBE_API_KEY
    };
  }

  onClickEvent(video) {
    this.setState({
      video: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} onClickEvent={this.onClickEvent.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

