
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
addEventListener('scroll',function(){$('#hd').classList.toggle('s',scrollY>30)},{passive:true});
$('#bg').onclick=function(){$('#mn').classList.toggle('open')};
$$('#mn a').forEach(function(a){a.onclick=function(){$('#mn').classList.remove('open')}});
/* reveal + counters */
function count(el){var n=+el.dataset.n,s=el.dataset.s||'+',t0=performance.now();(function f(t){var p=Math.min((t-t0)/1800,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)))+(p>=1?s:'');if(p<1)requestAnimationFrame(f)})(t0)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');$$('[data-n]',e.target).forEach(count);io.unobserve(e.target)}})},{threshold:.15});
$$('.rv').forEach(function(e){io.observe(e)});
/* nav highlight */
var secs=$$('main [id]'),links=$$('#mn a');
addEventListener('scroll',function(){var y=scrollY+140,cur=secs[0];secs.forEach(function(s){if(s.offsetTop<=y)cur=s});links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur.id)})},{passive:true});
/* hero parallax */
var st=$('.stage');
if(st&&matchMedia('(pointer:fine)').matches)$('.hero').addEventListener('mousemove',function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;$('.person').style.translate=x*-14+'px '+y*-10+'px';$('.brush').style.translate=x*26+'px '+y*18+'px';$$('.fc').forEach(function(f,i){f.style.translate=x*(i?30:-30)+'px '+y*24+'px'})});
/* clients marquee */
var names=['SkyTech','Global Trade','NextLevel','Dream Home','Legal Pro','EduPlus'],ic='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>',h='';
h='<img src="assets/img/strip.webp" alt="عملاؤنا">';
$('#mt').innerHTML=h+h+h+h;
var mt=$('#mt'),sh=0;function shift(d){sh+=d*160;mt.style.marginInlineStart=sh+'px'}
$('#nx').onclick=function(){shift(-1)};$('#pv').onclick=function(){shift(1)};
$$('.q button').forEach(function(b){b.onclick=function(){var q=b.parentNode,o=q.classList.contains('open');$$('.q').forEach(function(x){x.classList.remove('open')});if(!o)q.classList.add('open')}});
/* testimonials */
var sl=$$('.sl'),pg=$('#pg'),ci=0,tm;
sl.forEach(function(_,i){var b=document.createElement('button');b.setAttribute('aria-label','شهادة '+(i+1));b.onclick=function(){go(i)};pg.appendChild(b)});
function go(i){ci=i;sl.forEach(function(s,k){s.classList.toggle('on',k===i)});$$('button',pg).forEach(function(b,k){b.classList.toggle('on',k===i)});clearInterval(tm);tm=setInterval(function(){go((ci+1)%sl.length)},5000)}
go(0);
var CATS=[];P.forEach(function(p){if(CATS.indexOf(p.cat)<0)CATS.push(p.cat)});
var LP='blog.html',st={q:'',c:''},seen={};
try{var sv=JSON.parse(localStorage.getItem('bv')||'{}');P.forEach(function(p){if(sv[p.id])p.v+=sv[p.id]})}catch(e){}
function fd(s){try{return new Date(s).toLocaleDateString('ar-EG-u-nu-latn',{day:'numeric',month:'long',year:'numeric'})}catch(e){return s}}
function nf(n){return n.toLocaleString('en-US')}
function meta(p){return '<div class="mt2"><span>📅 '+fd(p.d)+'</span><span>👁 '+nf(p.v)+' مشاهدة</span><span>⏱ '+p.rt+' دقائق قراءة</span></div>'}
function card(p,i,big){return '<a class="po'+(big?' big':'')+'" href="'+LP+'#'+p.id+'" style="animation-delay:'+(i*.08)+'s"><div class="th" style="background-image:var('+p.img+')"><span class="cat">'+p.cat+'</span></div><div class="pb2"><h3>'+p.t+'</h3><p>'+p.ex+'</p>'+meta(p)+'<span class="more">اقرأ المقال ←</span></div></a>'}
function mini(p,rank){return '<a class="mi" href="'+LP+'#'+p.id+'">'+(rank?'<span class="rk">'+rank+'</span>':'<span class="mth" style="background-image:var('+p.img+')"></span>')+'<div><b>'+p.t+'</b><small>'+(rank?'👁 '+nf(p.v)+' مشاهدة':fd(p.d))+'</small></div></a>'}

function initImgs(){var m={realestate:'--i-p1',law:'--i-p2',edu:'--i-p3',stores:'--i-p4',companies:'--i-p5'},r=document.documentElement.style;$$('a.pc').forEach(function(a){var k=(a.getAttribute('href')||'').split('#')[1],i=$('img',a);if(m[k]&&i)r.setProperty(m[k],'url("'+i.src+'")')});var l=$('img.lap');if(l)r.setProperty('--i-lap','url("'+l.src+'")')}
initImgs();
$('#hposts').innerHTML=P.slice().sort(function(a,b){return a.d<b.d?1:-1}).slice(0,3).map(function(p,i){return card(p,i,false)}).join('');
$('#fm').addEventListener('submit',function(e){e.preventDefault();this.innerHTML='<div class="ok">✓ شكراً لك! استلمنا طلبك وسنتواصل معك خلال 24 ساعة.</div>'});
if(location.hash){var _e=document.getElementById(location.hash.slice(1));if(_e)setTimeout(function(){_e.scrollIntoView()},400)}
