/* Preparation UI moved intact from the itinerary. */
(() => {
'use strict';
    function dateNumber(now, zone) {
      const parts = new Intl.DateTimeFormat('en', {timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
      const get = type => parts.find(p => p.type === type).value;
      return Date.UTC(Number(get('year')), Number(get('month')) - 1, Number(get('day')));
    }
    function updateCountdown() {
      const today = dateNumber(new Date(), 'Asia/Taipei');
      const start = Date.UTC(2026, 11, 5), end = Date.UTC(2026, 11, 13);
      const label = document.getElementById('countdown-label'), value = document.getElementById('countdown-number'), unit = document.getElementById('countdown-unit');
      if (today < start) {label.textContent = '距離出發還有';value.textContent = String(Math.ceil((start - today) / 86400000));unit.textContent = ' 天';}
      else if (today <= end) {label.textContent = '旅程進行中';value.textContent = '第 ' + (1 + Math.floor((today - start) / 86400000));unit.textContent = ' 天';}
      else {label.textContent = '把風景收好';value.textContent = '旅行回憶';value.style.fontSize = '22px';unit.textContent = '';}
    }
    updateCountdown();
    setInterval(updateCountdown, 60000);
    const storageKey = 'hokkaido-winter-2026-checklist-v1';
    const checks = [...document.querySelectorAll('[data-check]')];
    let savedChecks = {};
    function storageUnavailable() {document.getElementById('storage-note').textContent = '此瀏覽器目前無法儲存勾選，記錄僅保留在本次頁面中；實際購票與預約狀態以訂單為準。';}
    try {const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');if (saved && typeof saved === 'object' && !Array.isArray(saved)) savedChecks = saved;} catch {storageUnavailable();}
    function updateProgress() {
      const count = checks.filter(input => input.checked).length;
      const progress = document.getElementById('check-progress');progress.max = checks.length;progress.value = count;
      document.getElementById('check-count').textContent = count + '／' + checks.length + ' 已完成';
    }
    checks.forEach(input => {
      input.checked = savedChecks[input.dataset.check] === true;
      input.addEventListener('change', () => {savedChecks[input.dataset.check] = input.checked;try {localStorage.setItem(storageKey, JSON.stringify(savedChecks));} catch {storageUnavailable();}updateProgress();});
    });
    updateProgress();
  function revealTarget(){
    let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}
    const target=document.getElementById(id);if(!target)return;
    let parent=target;while(parent){if(parent.tagName==='DETAILS')parent.open=true;parent=parent.parentElement;}
    requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}));
  }
  document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(link)requestAnimationFrame(revealTarget);});
  window.addEventListener('hashchange',revealTarget);
  revealTarget();
})();
