// DrumPad.js
import React from "react";
import "../styles/DrumPad.css";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.key.toUpperCase() === this.props.keyTrigger) {
      this.playSound();
    }
  };

  playSound = () => {
    const audio = this.audioRef.current;
    audio.currentTime = 0;
    audio.play();
    document.getElementById("display").innerText = this.props.id;
  };

  render() {
    const { keyTrigger, id, src } = this.props;
    return (
      <div className="drum-pad" id={id} onClick={this.playSound}>
        {keyTrigger}
        <audio
          ref={this.audioRef}
          className="clip"
          id={keyTrigger}
          src={src}
        ></audio>
      </div>
    );
  }
}

export default DrumPad;
