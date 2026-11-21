
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
addEventListener('scroll',function(){$('#hd').classList.toggle('s',scrollY>30)},{passive:true});
$('#bg').onclick=function(){$('#mn').classList.toggle('open')};
var CATS=[];P.forEach(function(p){if(CATS.indexOf(p.cat)<0)CATS.push(p.cat)});
var st={q:'',c:''},seen={};
try{var sv=JSON.parse(localStorage.getItem('bv')||'{}');P.forEach(function(p){if(sv[p.id])p.v+=sv[p.id]})}catch(e){}
function fd(s){try{return new Date(s).toLocaleDateString('ar-EG-u-nu-latn',{day:'numeric',month:'long',year:'numeric'})}catch(e){return s}}
function nf(n){return n.toLocaleString('en-US')}
function meta(p){return '<div class="mt2"><span>📅 '+fd(p.d)+'</span><span>👁 '+nf(p.v)+' مشاهدة</span><span>⏱ '+p.rt+' دقائق قراءة</span></div>'}
function card(p,i,big){return '<a class="po'+(big?' big':'')+'" href="#'+p.id+'" style="animation-delay:'+(i*.08)+'s"><div class="th" style="background-image:var('+p.img+')"><span class="cat">'+p.cat+'</span></div><div class="pb2"><h3>'+p.t+'</h3><p>'+p.ex+'</p>'+meta(p)+'<span class="more">اقرأ المقال ←</span></div></a>'}
function mini(p,rank){return '<a class="mi" href="#'+p.id+'">'+(rank?'<span class="rk">'+rank+'</span>':'<span class="mth" style="background-image:var('+p.img+')"></span>')+'<div><b>'+p.t+'</b><small>'+(rank?'👁 '+nf(p.v)+' مشاهدة':fd(p.d))+'</small></div></a>'}
function side(){
 $('#latest').innerHTML=P.slice().sort(function(a,b){return a.d<b.d?1:-1}).slice(0,5).map(function(p){return mini(p)}).join('');
 $('#top').innerHTML=P.slice().sort(function(a,b){return b.v-a.v}).slice(0,5).map(function(p,i){return mini(p,i+1)}).join('');
 $('#cats').innerHTML='<button data-c="" class="'+(st.c?'':'on')+'">الكل ('+P.length+')</button>'+CATS.map(function(c){return '<button data-c="'+c+'" class="'+(st.c===c?'on':'')+'">'+c+' ('+P.filter(function(p){return p.cat===c}).length+')</button>'}).join('')}
function list(){
 var r=P.filter(function(p){return(!st.c||p.cat===st.c)&&(!st.q||(p.t+p.ex).indexOf(st.q)>-1)}).sort(function(a,b){return a.d<b.d?1:-1});
 $('#crumb').innerHTML='<a href="index.html">الرئيسية</a><span>›</span><span>المدونة</span>'+(st.c?'<span>›</span><span>'+st.c+'</span>':'');
 $('#main').innerHTML='<div class="posts">'+(r.length?r.map(function(p,i){return card(p,i,i===0&&r.length>2&&!st.q&&!st.c)}).join(''):'<div class="empty">لا توجد مقالات مطابقة</div>')+'</div>';
 document.title='مدونة إبداع | مقالات ونصائح'}
function art(p){
 if(!seen[p.id]){seen[p.id]=1;p.v++;try{var s=JSON.parse(localStorage.getItem('bv')||'{}');s[p.id]=(s[p.id]||0)+1;localStorage.setItem('bv',JSON.stringify(s))}catch(e){}}
 var o=P.slice().sort(function(a,b){return a.d<b.d?1:-1}),i=o.indexOf(p),nx=o[i-1],pv=o[i+1];
 var rel=P.filter(function(x){return x!==p}).sort(function(a,b){return(b.cat===p.cat)-(a.cat===p.cat)}).slice(0,2);
 var u=encodeURIComponent(location.href);
 $('#crumb').innerHTML='<a href="index.html">الرئيسية</a><span>›</span><a href="#blog">المدونة</a><span>›</span><span>'+p.cat+'</span>';
 $('#main').innerHTML='<article class="art"><span class="badge">'+p.cat+'</span><h2>'+p.t+'</h2>'+meta(p)+'<div class="ac"><div class="aci" style="background-image:var('+p.img+')"></div></div><div class="bd">'+p.b+'</div><div class="sh"><b>شارك المقال:</b><button id="cp">نسخ الرابط</button><a target="_blank" rel="noopener" href="https://wa.me/?text='+u+'">واتساب</a><a target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?url='+u+'">X</a></div><div class="pn">'+(pv?'<a href="#'+pv.id+'"><small>→ المقال السابق</small><b>'+pv.t+'</b></a>':'<span></span>')+(nx?'<a href="#'+nx.id+'" style="text-align:left"><small>المقال التالي ←</small><b>'+nx.t+'</b></a>':'<span></span>')+'</div></article><div class="rel"><h3>مقالات ذات صلة</h3><div class="posts">'+rel.map(function(x,k){return card(x,k)}).join('')+'</div></div>';
 $('#cp').onclick=function(){try{navigator.clipboard.writeText(location.href);this.textContent='تم النسخ ✓'}catch(e){this.textContent='انسخ من شريط العنوان'}};
 document.title=p.t+' | مدونة إبداع'}
function route(user){
 var h=location.hash.slice(1),p=P.filter(function(x){return x.id===h})[0];
 if(p)art(p);else list();
 side();$('#rp').style.width='0';
 if(user)scrollTo({top:0,behavior:'smooth'})}
addEventListener('hashchange',function(){route(true)});
$('#q').addEventListener('input',function(){st.q=this.value.trim();st.c='';if(location.hash.slice(1)&&location.hash!=='#blog'){location.hash='blog'}else{list();side()}});
$('#cats').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;st.c=b.dataset.c;st.q='';$('#q').value='';if(location.hash.slice(1)&&location.hash!=='#blog'){location.hash='blog'}else{list();side()}});
addEventListener('scroll',function(){var a=$('.art');if(!a){$('#rp').style.width='0';return}var r=a.getBoundingClientRect(),t=Math.min(Math.max((innerHeight-r.top)/(r.height+innerHeight*.3),0),1);$('#rp').style.width=t*100+'%'},{passive:true});
document.addEventListener('click',function(e){var a=e.target.closest('a[href="#contact"]');if(a){e.preventDefault();$('#contact').scrollIntoView({behavior:'smooth'})}});
route();
