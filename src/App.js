import './App.css';
import DigitalClock from './DigitalClock';
import { Typewriter } from 'react-simple-typewriter';

function App() {
  return (
    <div className="video-container">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/BackG1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="content">
        <h1>
          <Typewriter
            words={['Hey, this is a Digital Clock']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <div id="clock-container">
          <DigitalClock />
        </div>
      </div>
    </div>
  );
}

export default App;
