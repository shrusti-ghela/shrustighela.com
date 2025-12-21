(function(){
  const key='sg-theme', root=document.documentElement;
  function apply(mode){ root.dataset.theme=mode; try{ localStorage.setItem(key, mode); } catch{} }
  function init(){
    let saved=null; try{ saved=localStorage.getItem(key); } catch{}
    if(saved==='dark' || saved==='light') apply(saved);
    else apply(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    inject();
  }
  function inject(){
    if(document.getElementById('sg-theme-toggle')) return;
    const btn=document.createElement('button');
    btn.id='sg-theme-toggle'; btn.ariaLabel='Toggle dark/light';
    btn.textContent=(root.dataset.theme==='dark')?'🌙':'☀️';
    Object.assign(btn.style,{position:'fixed',right:'16px',bottom:'16px',zIndex:9999,padding:'8px 10px',border:'1px solid rgba(128,128,128,.35)',borderRadius:'10px',background:'transparent'});
    btn.onclick=()=>{ const next=(root.dataset.theme==='dark')?'light':'dark'; apply(next); btn.textContent=(next==='dark')?'🌙':'☀️'; };
    document.body.appendChild(btn);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
