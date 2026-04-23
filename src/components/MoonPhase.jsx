    function getMoonPhase(phase){
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

  return (
    <div className="extra-item-moon">
        <span>Fase lunar:</span>

        <strong>
           {getMoonIcon(phase)} {getMoonPhase(phase)}
        </strong>

    </div>
  );
}
