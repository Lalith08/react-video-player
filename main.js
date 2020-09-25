import React from 'react';
import ReactDOM from 'react-dom';



const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
};

class Menu extends React.Component {
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}
  handleClick(e) {
  var text = e.target.value;
  this.props.chooseVideo(text);
}
  
  render() {
    return (
      <form onClick = {this.handleClick}>
        <input type="radio" name="src" value="fast" /> 
        <strong>DEERS</strong>
        <input type="radio" name="src" value="slow" /> 
        <strong>TURBO</strong>
        <input type="radio" name="src" value="cute" /> 
        <strong>
          KITTY
        </strong>
        
      </form>
    );
  }
}
class Video extends React.Component {
  render() {
    return (
      <div>
        <video controls autostart autoPlay muted 
        src = {this.props.src}/>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };
    this.chooseVideo = this.chooseVideo.bind(this);
  }
  chooseVideo(newVideo) {
  this.setState({
    src: VIDEOS[newVideo]
  });
}
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        
        <Video src ={this.state.src}/>
        <Menu chooseVideo = {this.chooseVideo}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
