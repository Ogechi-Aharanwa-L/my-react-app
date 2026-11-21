import {useState} from "react";


function LightSwitch() {
    const [isOn, setIsOn] = useState(false);
    return (
        <div>
            <button 
                className="border mt-3 px-5 py-5 rounded-3xl bg-purple-700 text-amber-200" 
                onClick={() => setIsOn(!isOn)} >
                {isOn ? "The light is ON" : "The light is OFF"} 
                 
            </button>
        </div>
    )
}
export default LightSwitch;