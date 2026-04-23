    
    
    function getMoonPhaseLabel(phase){
     if(phase === 0) return "Luna Nueva";
     if(phase < 0.25) return "Creciente";
     if(phase === 0.25) return "Cuarto Creciente";
     if(phase < 0.5) return "Gibosa Creciente";
     if(phase === 0.5) return "Luna Llena";
     if(phase > 0.75) return "Gibosa Menguante";
     if(phase === 0.75) return "Cuarto Menguante";
     return "Menguante";
    }

    function getMoonIcon(phase) {
   if (phase === 0) return "🌑";
   if (phase < 0.25) return "🌒";
   if (phase === 0.25) return "🌓";
   if (phase < 0.5) return "🌔";
   if (phase === 0.5) return "🌕";
   if (phase < 0.75) return "🌖";
   if (phase === 0.75) return "🌗";
   return "🌘";
 }


export default function MoonPhase( {phase}){

  if (phase === undefined) return null;

  const illumination = phase<= 0.5 ? phase * 2 : (1 - phase) * 2;



  const label = getMoonPhaseLabel(phase);

  return (
      <div 
        className="moon-phase"
        style={{
           boxShadow: `0 0 ${10 + 30 * illumination}px rgba(255,255,200,${0.2 + illumination})`
        }}
      >



        <span>Fase lunar:

        {getMoonIcon(phase)} {label}
       </span>



    <div className="moon-bar">
        <div 
        className="moon-fill"
        style={{
          width: `${illumination * 100}%`
        }}
        />
    </div>

    </div>
  );
}
