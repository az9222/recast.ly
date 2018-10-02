import VideoList from './VideoList.js';

class VideoListEntry extends React.Component {
  constructor (props) {
    super(props);
    this.videoImg = this.props.video.snippet.thumbnails.default.url;
    this.videoTitle = this.props.video.snippet.title;
    this.videoDescription = this.props.video.snippet.description;
  }

  render() {
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={this.videoImg} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{this.videoTitle}</div>
          <div className="video-list-entry-detail">{this.videoDescription}</div>
        </div>
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
