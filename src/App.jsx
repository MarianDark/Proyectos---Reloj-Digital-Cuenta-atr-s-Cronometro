import './App.css';
import Countdown from './components/Countdown/Countdown';
import DigitalClock from './components/DigitalClock/DigitalClock';
import Stopwatch from './components/Stopwatch/Stopwatch';


function App() {
  return (
    <div className="App">
    <h3>Digital Clock</h3>
    <DigitalClock/>
    <h3>Count Down</h3>
    <Countdown/>
    <h3>Stop Watch</h3>
    <Stopwatch/>
    </div>
  );
}

export default App;