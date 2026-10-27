(() => {
 const byId=id=>document.getElementById(id);
 const regions=[
  {key:"chanar",name:"Chañar",target:"stories-chanar"},
  {key:"region",name:"Cercanías",target:"stories-region"},
  {key:"patagonia",name:"Patagonia",target:"stories-patagonia"},
  {key:"mundo",name:"Argentina y mundo",target:"stories-mundo"}
 ];
 const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const dateLabel=value=>{if(!value)return "Fecha no informada";const d=new Date(value);return Number.isNaN(d.getTime())?"Fecha no informada":new Intl.DateTimeFormat("es-AR",{day:"2-digit",month:"short"}).format(d)};
 const dateLong=new Intl.DateTimeFormat("es-AR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});byId("today-label").textContent="SAN PATRICIO DEL CHAÑAR · "+dateLong.format(new Date()).toLocaleUpperCase("es-AR");
 const menu=byId("menu-toggle"),nav=byId("main-nav");menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
 function renderStory(item,compact=false){
  const title=esc(item.title||"Publicación sin título"),summary=esc(item.summary||"Consultá la publicación original para conocer los detalles."),source=esc(item.source||"Fuente original"),date=esc(dateLabel(item.date)),category=esc(item.category||"Información");
  const link=/^https:\/\//i.test(item.link||"")?esc(item.link):"#";
  if(compact)return '<article class="story-row"><div><div class="story-kicker">'+category+' · '+source+'</div><h3>'+title+'</h3><p>'+summary+'</p><a class="story-source-link" href="'+link+'" target="_blank" rel="noopener noreferrer">Leer fuente ↗</a></div><time class="story-meta">'+date+'</time></article>';
  return '<article class="story-card"><div class="story-kicker">'+category+'</div><h3>'+title+'</h3><p>'+summary+'</p><div class="card-footer"><span>'+source+' · '+date+'</span><a href="'+link+'" target="_blank" rel="noopener noreferrer">Leer fuente ↗</a></div></article>';
 }
 function fallback(id,msg){byId(id).innerHTML='<div class="empty-note">'+esc(msg)+'</div>'}
 fetch("noticias.json?edicion="+Date.now(),{cache:"no-store"}).then(r=>{if(!r.ok)throw Error("sin edición");return r.json()}).then(data=>{
  const items=Array.isArray(data.items)?data.items:[];
  const order={"Chañar":0,"Cercanías":1,"Patagonia":2,"Argentina y mundo":3};
  items.sort((a,b)=>(order[a.territory]??4)-(order[b.territory]??4)||String(b.date||"").localeCompare(String(a.date||"")));
  const grouped={};regions.forEach(r=>grouped[r.name]=items.filter(x=>x.territory===r.name));
  regions.forEach(r=>{const list=grouped[r.name]||[];const el=byId(r.target);if(!list.length){fallback(r.target,r.name==="Chañar"?"Todavía no hay publicaciones locales verificadas en los feeds automáticos. No rellenamos esta sección con noticias ajenas.":"No hay publicaciones disponibles en esta sección en la última consulta.");return;}el.innerHTML=list.slice(0,r.key==="chanar"?5:6).map(x=>renderStory(x,r.key==="chanar")).join("");});
  byId("count-chanar").textContent=(grouped["Chañar"]||[]).length+" PUBLICACIONES";
  byId("edition-label").textContent=data.updated_at?"CONSULTADO "+new Intl.DateTimeFormat("es-AR",{hour:"2-digit",minute:"2-digit"}).format(new Date(data.updated_at)):"EDICIÓN DIGITAL";
 }).catch(()=>{regions.forEach(r=>fallback(r.target,"La edición automática no está disponible en este momento. No mostramos titulares inventados."));byId("edition-label").textContent="EDICIÓN EN ACTUALIZACIÓN";});
})();