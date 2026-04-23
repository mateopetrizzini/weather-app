import MoonPhase from "./MoonPhase";
import { Sunrise, Sunset, Moon, MoonStar } from "lucide-react";

function Astronomy({ astro }) {

    if(!astro?.astronomy) return null;

    const data = astro.astronomy.astro;

  return (
    <div className="astronomy">
        
        <div className="moon-block">
            <MoonPhase phase={data.moon_phase}/>
        </div>        

    <div className="sun-section">    

    <div className="sun-item">
        <span><Sunrise size={16}/></span>
        <strong>{data.sunrise}</strong>
        </div>

    <div className="sun-item">
        
        <span><Sunset size={16}/></span>
        <strong>{data.sunset}</strong> 
        </div>

    <div className="sun-item">
        <span><Moon size={16}/></span>
        <strong>{data.moonrise}</strong>
        </div>

    <div className="sun-item">
        <span><MoonStar size={16}/></span>
        <strong>{data.moonset}</strong>
    </div>

    </div>

    </div>
  )
}

export default Astronomy;