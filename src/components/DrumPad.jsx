import { useEffect } from "react";

const DrumPad = ({keyTrigger,des,url,drum,power}) => {
  useEffect(()=>{
    if(!power){
      document.getElementById("slider").disabled = true 
    }
    else{
      document.getElementById("slider").disabled = false 

    }
    const temp = (event)=>{
      if(event.key.toUpperCase() === keyTrigger){
        soundPlayer(url,des);
      }
    }
    document.addEventListener("keypress",temp)
    return () => document.removeEventListener("keypress", temp)
  },[drum,power])

  const soundPlayer = (url,des)=>{
    if(!power){
      return;
    }
    else {

      let snd = new Audio(url)
      snd.volume = (document.getElementById("slider").value * 0.01)
      snd.play()
      // to pass tests but it has a bug of not being able to be interrupted;
      // let snd = document.getElementById(keyTrigger)
      // snd.volume = (document.getElementById("slider").value * 0.01)
      // snd.play()
      document.getElementById("display").innerHTML = des;
      document.getElementById(des).focus();
    }
  }
  
  return (
    <button id={des} className="drum-pad" onClick={()=>soundPlayer(url,des)} >
      {keyTrigger}
      <audio src={url} className="clip" id={keyTrigger} />
    </button>
  )
}
export default DrumPad