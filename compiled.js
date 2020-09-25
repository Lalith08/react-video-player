"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4'
};

class Menu extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var text = e.target.value;
    this.props.chooseVideo(text);
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("form", {
      onClick: this.handleClick
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "radio",
      name: "src",
      value: "fast"
    }), /*#__PURE__*/_react.default.createElement("strong", null, "DEERS"), /*#__PURE__*/_react.default.createElement("input", {
      type: "radio",
      name: "src",
      value: "slow"
    }), /*#__PURE__*/_react.default.createElement("strong", null, "TURBO"), /*#__PURE__*/_react.default.createElement("input", {
      type: "radio",
      name: "src",
      value: "cute"
    }), /*#__PURE__*/_react.default.createElement("strong", null, "KITTY"));
  }

}

class Video extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("video", {
      controls: true,
      autostart: true,
      autoPlay: true,
      muted: true,
      src: this.props.src
    }));
  }

}

class App extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: VIDEOS.fast
    };
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Video Player"), /*#__PURE__*/_react.default.createElement(Video, {
      src: this.state.src
    }), /*#__PURE__*/_react.default.createElement(Menu, {
      chooseVideo: this.chooseVideo
    }));
  }

}

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(App, null), document.getElementById('app'));
