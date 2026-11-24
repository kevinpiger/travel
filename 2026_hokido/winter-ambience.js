/* Original lightweight SVG winter scenery. Decoration only; no trip data or location access. */
(() => {
  'use strict';
  if (document.getElementById('winter-ambience')) return;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const narrow = matchMedia('(max-width: 680px)');
  const preferenceKey = 'hokkaido-winter-ambience-v1';
  let enabled = true, timer = null, herd = null, reverseNext = Math.random() < 0.5;
  try { enabled = localStorage.getItem(preferenceKey) !== 'off'; } catch {}
  const tree = '<svg viewBox="0 0 120 180" aria-hidden="true"><path d="M56 139h9l4 29H52Z" fill="#af7954"/><path d="M59 8c-6 15-18 29-27 39l15-2c-10 16-24 31-37 42l23-3C22 103 10 119 3 130c27 12 78 16 113-1-14-15-26-32-35-47l24 4C91 72 78 58 71 44l16 3C75 32 67 18 59 8Z" fill="#8a9675"/><path d="M59 15c-4 31-4 76 2 121" fill="none" stroke="#f7edd8" stroke-width="2" opacity=".55"/><path d="M36 54q26 10 47 4M22 91q40 17 73 6M14 123q43 20 84 4" fill="none" stroke="#e7c39b" stroke-width="3" stroke-linecap="round"/><g fill="#d59b6b"><circle cx="45" cy="60" r="4"/><circle cx="76" cy="95" r="4"/><circle cx="31" cy="119" r="4"/></g><g fill="#fff7dc"><circle cx="64" cy="77" r="3"/><circle cx="47" cy="103" r="3"/><circle cx="86" cy="118" r="3"/></g><path d="m59 0 3 7 8 1-6 5 1 8-6-4-7 4 2-8-6-5 8-1Z" fill="#d5ae65"/></svg>';
  const scene = document.createElement('div');
  scene.id = 'winter-ambience';
  scene.setAttribute('aria-hidden', 'true');
  scene.innerHTML = '<div class="winter-paper-dots"></div><div class="winter-tree winter-tree--left">'+tree+'</div><div class="winter-tree winter-tree--right">'+tree+'</div><div class="winter-tree winter-tree--far">'+tree+'</div><div class="winter-snow"></div><div class="winter-background-lane"></div>';
  document.body.prepend(scene);
  document.body.classList.add('winter-warm');
  const snow = scene.querySelector('.winter-snow');
  const snowCount = narrow.matches ? 18 : 30;
  for (let i=0;i<snowCount;i++) {
    const flake = document.createElement('i');
    flake.className = 'winter-flake'+(i%6===0?' winter-flake--star':'');
    flake.style.cssText='--x:'+((i*37+11)%100)+'%;--fall:'+(17+(i*7)%19)+'s;--delay:'+(-((i*11+3)%35))+'s;--drift:'+(-32+(i*13)%72)+'px;--flake:'+(3+(i%4)*1.1)+'px;--alpha:'+(0.22+(i%4)*0.09)+';';
    if(i%6===0)flake.innerHTML='<svg viewBox="0 0 16 16"><path d="M8 1v14M1 8h14M3 3l10 10M3 13 13 3"/></svg>';
    snow.appendChild(flake);
  }
  // A small open illustration space keeps the occasional herd away from itinerary text.
  const clearing = document.createElement('div');
  clearing.className='winter-clearing';clearing.setAttribute('aria-hidden','true');
  clearing.innerHTML='<svg class="winter-clearing-line" viewBox="0 0 1120 90" preserveAspectRatio="none"><path d="M0 72Q120 55 225 70T443 68T650 70T850 66T1120 71" fill="none" stroke="#dcc5a7" stroke-width="1.3"/><path d="M0 80Q190 66 341 81T667 79T1120 80" fill="none" stroke="#ecdcc7" stroke-width="1"/></svg><div class="winter-small-tree winter-small-tree--a">'+tree+'</div><div class="winter-small-tree winter-small-tree--b">'+tree+'</div><span class="winter-twinkle winter-twinkle--a">✧</span><span class="winter-twinkle winter-twinkle--b">✧</span>';
  const mast = document.querySelector('.travel-mast');
  const heading = document.querySelector('main h1') || document.querySelector('header h1');
  if(mast)mast.insertAdjacentElement('afterend',clearing);
  else if(heading)heading.insertAdjacentElement('afterend',clearing);
  else document.body.appendChild(clearing);
  const deerSvg = '<svg viewBox="0 0 160 108" aria-hidden="true"><g class="winter-deer-bob"><g class="winter-deer-leg winter-deer-leg--back"><path d="m49 62-9 22 10 17"/></g><g class="winter-deer-leg winter-deer-leg--front"><path d="m98 61 4 20-10 20"/></g><g class="winter-deer-leg winter-deer-leg--back-alt"><path d="m60 63 5 18-10 20"/></g><g class="winter-deer-leg winter-deer-leg--front-alt"><path d="m89 62-4 19 14 18"/></g><path d="M37 51q-17-13-23-4 9 14 24 12" fill="#c7996e"/><path d="M37 47q24-17 57 0l12 17q-29 16-62 0Z" fill="#bb8b60"/><path d="M90 55q5-15 12-26l18 3-12 37-14-4Z" fill="#bb8b60"/><path d="M101 28q14-13 29-5l19 8q4 9-8 12l-31-3Z" fill="#c79870"/><path d="m108 26-7-13q12-2 19 9M127 24l3-15q11 6 7 18" fill="#bb8b60"/><g fill="none" stroke="#99704f" stroke-width="3" stroke-linecap="round"><path d="M116 24 110 9 113 1M110 9l-8-5M130 23l9-13-1-9M139 10l10-5"/></g><path d="M104 44q3 15 0 24l-10-7Z" fill="#f3dbc0"/><path d="M102 44q10 8 23 3l-1 7q-15 3-25-5Z" fill="#b66e58"/><path d="m117 52 7 21-9-3-6-17Z" fill="#b66e58"/><circle cx="131" cy="31" r="2" fill="#654d3b"/><circle cx="148" cy="34" r="2.6" fill="#82644c"/></g></svg>';
  const button = document.createElement('button');
  button.type='button';button.className='winter-toggle';
  button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M3 12h18M5.5 5.5l13 13M5.5 18.5l13-13"/></svg><span>冬日動畫</span><small></small>';
  document.body.appendChild(button);
  function active(){ return enabled && !reducedMotion.matches && !document.hidden; }
  function clearTimer(){ if(timer!==null){clearTimeout(timer);timer=null;} }
  function schedule(delay){ clearTimer();if(active())timer=setTimeout(visit,delay); }
  function visit(){
    timer=null;if(!active()||herd)return;
    herd=document.createElement('div');
    const backwards=reverseNext;reverseNext=!reverseNext;
    herd.className='winter-herd'+(backwards?' winter-herd--reverse':'');
    const count=narrow.matches?2:3;
    for(let i=0;i<count;i++){
      const deer=document.createElement('div');deer.className='winter-deer';
      deer.style.cssText='--deer-delay:'+(i*0.8)+'s;--deer-scale:'+(i===1?0.75:1)+';';
      deer.innerHTML=deerSvg;herd.appendChild(deer);
    }
    const bounds=clearing.getBoundingClientRect();
    const lane=bounds.bottom>64 && bounds.top<innerHeight ? clearing : scene.querySelector('.winter-background-lane');
    lane.appendChild(herd);
    herd.addEventListener('animationend',e=>{
      if(e.target!==herd)return;herd.remove();herd=null;schedule(38000+Math.random()*26000);
    });
  }
  function sync(){
    const running=active();
    document.body.classList.toggle('winter-still',!running);
    document.body.classList.toggle('winter-reduced',reducedMotion.matches);
    button.setAttribute('aria-pressed',String(enabled&&!reducedMotion.matches));
    button.querySelector('small').textContent=reducedMotion.matches?'靜態':enabled?'開啟':'暫停';
    button.title=reducedMotion.matches?'已依系統的減少動態設定顯示靜態插圖':enabled?'暫停飄雪、聖誕樹與麋鹿動畫':'開啟冬日動畫';
    button.disabled=reducedMotion.matches;
    if(!running)clearTimer();else if(!herd)schedule(6000);
  }
  button.addEventListener('click',()=>{
    enabled=!enabled;
    try{localStorage.setItem(preferenceKey,enabled?'on':'off');}catch{}
    sync();
  });
  document.addEventListener('visibilitychange',sync);
  if(reducedMotion.addEventListener)reducedMotion.addEventListener('change',sync);
  else reducedMotion.addListener(sync);
  window.addEventListener('pagehide',clearTimer);
  window.addEventListener('pageshow',sync);
  sync();
})();
