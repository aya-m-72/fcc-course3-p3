import DrumPad from "./DrumPad"
import drumAudios from "../assets/drum"
import pianoAudios from "../assets/piano"


const Drum = ({drum,power}) => {
  const machineType = drum?drumAudios:pianoAudios
  return (
    <div className="drum-container">
      {machineType.map((ele) => (
        <DrumPad key={ele.keyTrigger} {...ele} drum={drum} power={power}/>
      ))}
    </div>
  )
}
export default Drum