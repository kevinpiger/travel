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
/* Decorative category accents only; itinerary and booking states stay in their source data. */
(() => {
  'use strict';
  const normalize = value => value.replace(/[\s｜|／/・]/g,'').toLowerCase();
  const byName = new Map();
  const source = document.getElementById('candidate-data');
  if(source){
    try {
      Object.values(JSON.parse(source.textContent).items).forEach(item=>{
        const accent=item.category==='food'?'restaurant':/mont-bell|Alpen/i.test(item.name)?'shopping':'sight';
        byName.set(normalize(item.name),accent);
      });
    }catch{}
  }
  function applyAccents(){
    document.querySelectorAll('.candidate-card').forEach(card=>{
      const heading=card.querySelector('h4');if(!heading)return;
      const key=card.dataset.candidateId||'';
      const accent=key.startsWith('food-')?'restaurant':byName.get(normalize(heading.textContent));
      if(accent)card.dataset.accent=accent;
    });
    document.querySelectorAll('#view-plan .timeline-item').forEach(row=>{
      const title=row.querySelector('h4')?.textContent||'';
      const mode=row.querySelector('.tag:not(.must)')?.textContent||'';
      let accent='other';
      if(/住宿|行李/.test(mode))accent='stay';
      else if(/餐食|餐廳/.test(mode))accent='restaurant';
      else if(/JR|列車|地下鐵|巴士|纜車|機場|航班|自駕|轉乘|取車|租車/.test(mode))accent='transport';
      else if(/早餐|午餐|晚餐|Toraya|鮮魚店/.test(title))accent='restaurant';
      else if(/活動|散步|步行|一日遊|神宮|市集|動物園/.test(mode+' '+title))accent='sight';
      row.dataset.accent=accent;
    });
    document.querySelectorAll('#sight-collections tbody tr').forEach(row=>row.dataset.accent='sight');
    document.querySelectorAll('.hotel-card,.day-aside>.aside-note:first-child').forEach(card=>card.dataset.accent='stay');
    document.querySelectorAll('.map-stop-body,.sight-ticket').forEach(card=>card.dataset.accent='sight');
    if(document.body.dataset.page==='sights')document.querySelectorAll('main article.card[id],main section#tenguyama').forEach(card=>card.dataset.accent='sight');
  }
  applyAccents();
  window.addEventListener('hokkaido-day-change',()=>queueMicrotask(applyAccents));
})();
