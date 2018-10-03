import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      video: {
        id: {
          videoId: 0
        },
        snippet: {
          title: '',
          description: ''
        }
      },
      query: '',
      max: 5,
      key: YOUTUBE_API_KEY,
      videos: [],
    };
  }

  componentDidMount() {
    this.props.searchYouTube({
      query: this.state.query,
      max: this.state.max,
      key: this.state.key
    }, (data) => {
      this.setState({
        video: data[0],
        videos: data,
      });
    });
  }

  onClickEvent(video) {
    this.setState({
      video: video
    });
  }

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({
      query: event.target.value,
    });
    this.props.searchYouTube({
      query: event.target.value,
      max: this.state.max,
      key: this.state.key
    }, (data) => {
      this.setState({
        video: data[0],
        videos: data
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search query={this.state.query} handleInputChange={this.handleInputChange.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClickEvent={this.onClickEvent.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

