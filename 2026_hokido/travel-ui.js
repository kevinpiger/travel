/* Navigation only: never changes booking or preparation states. */
(() => {
  'use strict';
  let saved;
  try { saved=JSON.parse(localStorage.getItem('hokkaido-daily-reader-v1')); } catch {}
  const returnUrl=new URL('./index.html',location.href);
  if(saved&&Number.isInteger(saved.index)&&saved.index>=0&&saved.index<9){returnUrl.searchParams.set('day',String(saved.index+5));returnUrl.searchParams.set('view',['plan','transport','map','food','weather'].includes(saved.view)?saved.view:'plan');}
  returnUrl.hash='itinerary';
  document.querySelectorAll('.return-day').forEach(a=>a.href=returnUrl.href);
  if(document.body.classList.contains('travel-document')){
    const main=document.querySelector('main');if(!main)return;
    const index=document.createElement('nav');index.className='doc-index';index.setAttribute('aria-label','本頁內容');
    let n=0;
    main.querySelectorAll('h2').forEach(h=>{
      if(h.closest('details'))return;
      const target=h.closest('section')||h; if(!target.id)target.id='reference-'+(++n);
      const a=document.createElement('a');a.href='#'+target.id;a.textContent=h.textContent;index.appendChild(a);
    });
    const h1=main.querySelector('h1');if(index.children.length>8){const folder=document.createElement('details');folder.className='doc-index-folder';const summary=document.createElement('summary');summary.textContent='快速跳到本頁內容（'+index.children.length+'項）';folder.append(summary,index);if(h1)h1.insertAdjacentElement('afterend',folder);else main.prepend(folder);}else if(h1)h1.insertAdjacentElement('afterend',index);else main.prepend(index);
    const nav=document.createElement('nav');nav.className='doc-switch';nav.setAttribute('aria-label','其他旅行資料');
    [['jr','車票'],['rental','租車'],['luggage','行李'],['sights','景點／門票'],['tax','退稅']].forEach(([p,label])=>{const a=document.createElement('a');a.href='./'+p+'.html';a.textContent=label;if(document.body.dataset.page===p)a.setAttribute('aria-current','page');nav.appendChild(a);});main.appendChild(nav);
  }
})();
