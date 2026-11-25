/* Original, decorative SVG sketches. No requests, location access or stored data. */
(() => {
  'use strict';
  if(!document.body.classList.contains('daily-reader')||document.body.classList.contains('resource-library'))return;
  const ns='http://www.w3.org/2000/svg';
  const drawings={
    transit:'<path d="M9 94H142M15 101H137" stroke="#c6ad7e"/><path d="m13 78 13-25 13 25Z" fill="#a8b991"/><path d="M26 78v13"/><rect x="45" y="34" width="87" height="54" rx="12" fill="#fff9e9"/><path d="M47 45h82v15H47" fill="#70887c" stroke="none"/><path d="M75 45v15M101 45v15" stroke="#fff9e9"/><path d="M56 34v-7h39l12 7" fill="#c98169"/><path d="M46 71h84" stroke="#d7ac58" stroke-width="5"/><circle cx="63" cy="90" r="6" fill="#655246"/><circle cx="117" cy="90" r="6" fill="#655246"/><path d="M111 20q-13-7-6-14" stroke="#b9c5b3"/>',
    map:'<path d="m15 30 36-11 43 13 39-12v66l-39 13-43-13-36 12Z" fill="#edf1e4"/><path d="m51 19 43 13v67L51 86Z" fill="#fbefd1"/><path d="M51 20v65M94 33v64" stroke="#c9c0a4"/><path d="M28 76q14-25 34-13t30-11" fill="none" stroke="#c2846c" stroke-dasharray="4 6"/><path d="M94 14c-13 0-22 9-22 20 0 17 22 36 22 36s22-19 22-36c0-11-9-20-22-20Z" fill="#c98169"/><circle cx="94" cy="34" r="8" fill="#fff9e9"/>',
    food:'<ellipse cx="75" cy="94" rx="56" ry="7" fill="#ece0c7" stroke="none"/><path d="M31 57h81c-4 27-19 35-40 35S36 82 31 57Z" fill="#c98169"/><ellipse cx="72" cy="57" rx="41" ry="10" fill="#fff8df"/><path d="M47 57q11-11 23 0t25-1" stroke="#d7ac58"/><path d="M53 37q-10-7-1-16M72 35q-10-7-1-16M90 36q-10-7-1-16" stroke="#c6b08c"/><path d="m87 49 31-28M94 53l31-27" stroke="#79604d"/><path d="M116 67h20v24h-20Z" fill="#a8b991"/><path d="M136 71q13-2 10 9-2 6-10 4" fill="none"/>',
    stay:'<path d="M10 97h132" stroke="#d9c9a7"/><path d="M35 49h83v44H35Z" fill="#fff7e7"/><path d="m25 49 51-35 52 35Z" fill="#708368"/><path d="m29 45 47-32 47 32" stroke="#fffdf8" stroke-width="6"/><path d="M70 63h18v30H70Z" fill="#c98169"/><path d="M46 59h15v16H46ZM96 59h13v16H96Z" fill="#e5b965"/><path d="M53 59v16M46 67h15M102 59v16M96 67h13" stroke="#fff7e7" stroke-width="2"/><path d="m8 85 10-21 10 21Z" fill="#a8b991"/><path d="M18 85v11"/><path d="M109 30V14h9v23" fill="#c98169"/>',
    weather:'<circle cx="103" cy="35" r="20" fill="#e5b965" stroke="#d0a650"/><path d="M103 5V1M127 13l5-4M134 35h7M80 12l-4-5" stroke="#d0a650"/><path d="M28 68c-19-2-16-28 1-29 1-23 35-29 45-6 25-7 40 20 23 34Z" fill="#fffdf8" stroke="#99ada3"/><path d="M39 82v15M31 86l16 8M47 86l-16 8M77 82v15M69 86l16 8M85 86l-16 8" stroke="#8d9e8b" stroke-width="2"/>'
  };
  const sprites=document.createElementNS(ns,'svg');
  sprites.setAttribute('aria-hidden','true');sprites.setAttribute('width','0');sprites.setAttribute('height','0');
  sprites.style.position='absolute';sprites.style.overflow='hidden';
  sprites.innerHTML='<defs>'+Object.entries(drawings).map(([kind,content])=>'<symbol id="travel-mini-'+kind+'" viewBox="0 0 150 110"><g fill="none" stroke="#786252" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">'+content+'</g></symbol>').join('')+'</defs>';
  document.body.prepend(sprites);
  function decorate(selector,kind){
    document.querySelectorAll(selector).forEach(title=>{
      if(title.querySelector(':scope > .travel-mini-art'))return;
      const svg=document.createElementNS(ns,'svg');
      svg.setAttribute('class','travel-mini-art');svg.setAttribute('viewBox','0 0 150 110');
      svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
      const use=document.createElementNS(ns,'use');use.setAttribute('href','#travel-mini-'+kind);svg.appendChild(use);
      title.classList.add('illustrated-title');title.appendChild(svg);
    });
  }
  function refresh(){
    decorate('#view-plan .timeline-heading,#day-transport-title','transit');
    decorate('#day-map-title','map');
    decorate('#candidate-day-panel .candidate-route h3','food');
    decorate('.day-aside>.aside-note:first-child h4','stay');
    decorate('#weather-title','weather');
  }
  refresh();
  window.addEventListener('hokkaido-day-change',()=>queueMicrotask(refresh));
})();
