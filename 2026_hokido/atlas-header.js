/* Collapse the illustrated header with scroll; no storage, requests or idle loop. */
(() => {
  'use strict';
  const header=document.querySelector('.atlas-header');
  if(!header)return;
  const root=document.documentElement;
  const toolbar=document.querySelector('.day-toolbar');
  let pending=false;
  function sync(){
    pending=false;
    const style=getComputedStyle(root);
    const expanded=parseFloat(style.getPropertyValue('--atlas-expanded-height'))||310;
    const compact=parseFloat(style.getPropertyValue('--atlas-compact-height'))||88;
    const offset=Math.max(0,window.scrollY);
    const distance=expanded-compact;
    const progress=Math.min(1,offset/distance);
    root.style.setProperty('--atlas-live-height',(expanded-Math.min(offset,distance))+'px');
    root.style.setProperty('--atlas-progress',String(progress));
    header.classList.toggle('is-compact',progress===1);
    if(toolbar)root.style.setProperty('--atlas-toolbar-height',toolbar.getBoundingClientRect().height+'px');
  }
  function schedule(){if(!pending){pending=true;requestAnimationFrame(sync);}}
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule);
  window.addEventListener('pageshow',schedule);
  if(toolbar&&typeof ResizeObserver!=='undefined')new ResizeObserver(schedule).observe(toolbar);
  sync();
})();
