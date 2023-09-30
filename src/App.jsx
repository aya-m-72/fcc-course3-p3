import { useState } from "react"
import Drum from "./components/Drum"

function App() {
  console.log("rendered...")
  const [drum, setDrum] = useState(true)
  const [power, setPower] = useState(true)
  return (
    <div className={drum ? "container" : "container piano"} style={{transition:"all 1s ease-in-out"}}>
      <div className="box" id="drum-machine">
        <Drum drum={drum} power={power} />
        <div className="console">
          <div className="type-controller">
            <button
              className="control-btn"
              onClick={() => setDrum((prev) => !prev)}
            >
              {drum ? "piano" : "drum"}
            </button>
          </div>
          <div className="power-controller">
            <button
              className="control-btn"
              onClick={() => setPower((prev) => !prev)}
            >
              {power ? "Turn Off" : "Turn On"}
            </button>
          </div>
          <div className="volume-slider">
            <input id="slider" type="range" min="0" max="100" />
          </div>
          <div className="display" id="display"></div>
        </div>
      </div>
    </div>
  )
}

export default App
