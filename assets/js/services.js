
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
addEventListener('scroll',function(){$('#hd').classList.toggle('s',scrollY>30)},{passive:true});
$('#bg').onclick=function(){$('#mn').classList.toggle('open')};
$$('#mn a').forEach(function(a){a.addEventListener('click',function(){$('#mn').classList.remove('open')})});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
$$('.rv').forEach(function(e){io.observe(e)});
var secs=$$('main [id]'),links=$$('#mn a[href^="#"]');
addEventListener('scroll',function(){var y=scrollY+140,cur=secs[0];secs.forEach(function(s){if(s.offsetTop<=y)cur=s});links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur.id)})},{passive:true});
if(matchMedia('(pointer:fine)').matches)$('.hero').addEventListener('mousemove',function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;$('.person').style.translate=x*-14+'px '+y*-10+'px';$('.brush').style.translate=x*26+'px '+y*18+'px';$$('.fc').forEach(function(f,i){f.style.translate=x*(i?30:-30)+'px '+y*24+'px'})});
$$('.q button').forEach(function(b){b.onclick=function(){var q=b.parentNode,o=q.classList.contains('open');$$('.q').forEach(function(x){x.classList.remove('open')});if(!o)q.classList.add('open')}});

var SV={
sites:{n:'المواقع التعريفية',b:'🌐 باقات المواقع التعريفية',t:'موقعك التعريفي الاحترافي',p:3000,d:'نصمم موقعاً تعريفياً بهوية علامتك يعرّف عملاءك بخدماتك ويزيد ثقتهم بك.',c:['دومين مجاني','استضافة مجانية','شهادة SSL','تصميم متجاوب'],
 pl:[['الأساسية',3000,['موقع تعريفي حتى 5 صفحات','نموذج تواصل وزر واتساب','تصميم متجاوب + SSL','دعم فني شهر']],['الاحترافية',5500,['حتى 10 صفحات','لوحة تحكم لإدارة المحتوى','معرض أعمال وتحسين SEO','دعم فني 3 شهور']],['المتقدمة',9000,['صفحات غير محدودة','لغتان (عربي/إنجليزي)','مدونة وتحليلات الزوار','دعم فني 12 شهر']]]},
stores:{n:'المتاجر الإلكترونية',b:'🛒 باقات المتاجر الإلكترونية',t:'متجرك الإلكتروني الاحترافي',p:6000,d:'ابدأ البيع أونلاين بمتجر سريع وسهل الإدارة، مع بوابات دفع وربط شحن.',c:['دومين مجاني','استضافة مجانية','بوابات دفع','إدارة الطلبات'],
 pl:[['انطلاق',6000,['حتى 50 منتج','دفع عند الاستلام + بطاقات','لوحة إدارة الطلبات','دعم فني شهر']],['نمو',12000,['حتى 500 منتج','ربط شركات الشحن','أكواد خصم وتقارير مبيعات','دعم فني 3 شهور']],['متقدم',25000,['منتجات غير محدودة','إدارة مخزون متعددة','ربط ERP وتطبيقات خارجية','دعم فني 12 شهر']]]},
companies:{n:'الشركات',b:'🏢 باقات مواقع الشركات',t:'موقع شركتك الاحترافي',p:8000,d:'واجهة رقمية تعكس قوة شركتك وتخدم عملاءك وشركاءك بمصداقية واحترافية.',c:['دومين مجاني','استضافة مجانية','لوحة تحكم','هوية متكاملة'],
 pl:[['الشركات الناشئة',8000,['حتى 8 صفحات','صفحات خدمات ومشاريع','لوحة تحكم','دعم فني شهر']],['الشركات المتوسطة',14000,['حتى 15 صفحة','لغتان','بوابة وظائف وطلبات تواصل','دعم فني 3 شهور']],['المؤسسات',28000,['نظام مخصص بالكامل','لوحات تحكم متعددة الصلاحيات','ربط أنظمة داخلية','دعم فني 12 شهر']]]},
realestate:{n:'العقارات',b:'🏙️ باقات المواقع العقارية',t:'موقعك العقاري الاحترافي',p:7000,d:'اعرض وحداتك ومشاريعك بشكل جذاب مع بحث متقدم وتواصل مباشر مع المشترين.',c:['دومين مجاني','استضافة مجانية','فلاتر بحث','خرائط الموقع'],
 pl:[['وسيط عقاري',7000,['عرض حتى 50 وحدة','فلاتر بحث','نموذج حجز ومعاينة','دعم فني شهر']],['شركة عقارية',13000,['وحدات ومشاريع غير محدودة','خرائط وجولات صور','لوحة إدارة العملاء','دعم فني 3 شهور']],['مطور عقاري',24000,['صفحات مشاريع مخصصة','جولة افتراضية 360°','ربط CRM','دعم فني 12 شهر']]]},
law:{n:'المحاماة',b:'⚖️ باقات مواقع المحاماة',t:'موقع مكتبك القانوني',p:4500,d:'حضور رقمي يعكس هيبة مكتبك ويسهل على العملاء طلب الاستشارات.',c:['دومين مجاني','استضافة مجانية','حجز استشارات','مدونة قانونية'],
 pl:[['محامٍ فردي',4500,['حتى 6 صفحات','صفحات مجالات الممارسة','نموذج طلب استشارة','دعم فني شهر']],['مكتب محاماة',8500,['حتى 12 صفحة','مدونة ومقالات قانونية','حجز مواعيد أونلاين','دعم فني 3 شهور']],['شركة محاماة',16000,['فريق وفروع متعددة','بوابة عملاء','لغتان وتحسين SEO','دعم فني 12 شهر']]]},
edu:{n:'التعليم والكورسات',b:'🎓 باقات المنصات التعليمية',t:'منصتك التعليمية الاحترافية',p:8000,d:'منصة لعرض كورساتك وتسجيل الطلاب والدفع أونلاين بتجربة تعلم ممتازة.',c:['دومين مجاني','استضافة مجانية','تسجيل ودفع','لوحة طلاب'],
 pl:[['مدرّس',8000,['عرض حتى 10 كورسات','تسجيل ودفع أونلاين','لوحة تحكم','دعم فني شهر']],['أكاديمية',15000,['كورسات غير محدودة','فيديوهات واختبارات','شهادات إتمام','دعم فني 3 شهور']],['منصة متكاملة',30000,['عدة مدرّسين','لوحات طلاب ومدرّسين','تطبيق موبايل','دعم فني 12 شهر']]]}};
var KEYS=['sites','stores','companies','realestate','law','edu'];
function fmt(n){return n.toLocaleString('en-US')}
$('#pills').innerHTML=KEYS.map(function(k){return '<a href="#'+k+'" data-k="'+k+'">'+SV[k].n+'</a>'}).join('');
function render(k,user){var s=SV[k];
 $('#hb').textContent=s.b;
 $('#ht').innerHTML=s.t+' <span>يبدأ من <em>'+fmt(s.p)+'</em> جنيه</span>';
 $('#hp').innerHTML=s.d+' <b style="color:#fff">والاستضافة والدومين علينا</b> لأول سنة.';
 $('#hc').innerHTML=s.c.map(function(x){return '<span>'+x+'</span>'}).join('');
 $('#pb').textContent=fmt(s.p);
 $('#pt').textContent='اختر باقة '+s.n+' المناسبة لك';
 $('#ch').textContent='جاهز تبدأ بـ '+fmt(s.p)+' جنيه؟';
 $('#plans').innerHTML=s.pl.map(function(p,i){return '<div class="plan sw'+(i==1?' ft':'')+' in">'+(i==1?'<em>الأكثر طلباً</em>':'')+'<h3>'+p[0]+'</h3><div class="pr">يبدأ من <b>'+fmt(p[1])+'</b> ج.م</div><ul><li>دومين واستضافة مجاناً لأول سنة</li>'+p[2].map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><a class="btn '+(i==1?'pri':'out')+'" href="#contact">اطلب الباقة</a></div>'}).join('');
 $$('a.pc').forEach(function(a){a.classList.toggle('cur',a.dataset.k===k)});
 $$('#pills a').forEach(function(a){a.classList.toggle('on',a.dataset.k===k)});
 $$('#hb,#ht,#hp,#hc').forEach(function(e){e.classList.remove('sw');void e.offsetWidth;e.classList.add('sw')});
 document.title='باقات '+s.n+' تبدأ من '+fmt(s.p)+' جنيه | إبداع';
 if(user)scrollTo({top:0,behavior:'smooth'})}
function cur(){var k=location.hash.slice(1);return SV[k]?k:'sites'}
addEventListener('hashchange',function(){render(cur(),true)});render(cur());
document.addEventListener('click',function(e){var a=e.target.closest('a[href^="#"]');if(!a)return;var id=a.getAttribute('href').slice(1);if(SV[id])return;var el=id&&document.getElementById(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}});
