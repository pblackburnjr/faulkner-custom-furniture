(function(){
  var $ = function(s,r){return (r||document).querySelector(s)};
  var esc = function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};

  // mobile menu
  var tg = $('.nav-toggle'), nav = $('.nav');
  if(tg){ tg.addEventListener('click',function(){
    var o = nav.classList.toggle('open'); tg.setAttribute('aria-expanded',o);
  }); }

  function priceText(p){ return p ? p : 'Request a quote'; }
  function pic(it){
    return it.img ? '<img src="'+it.img+'" alt="'+esc(it.name)+'" loading="lazy">'
                  : '<div class="nophoto">[PLACEHOLDER: photo of '+esc(it.name)+']</div>';
  }
  function card(it){
    var q = 'contact.html?product='+encodeURIComponent(it.name)+'#quote';
    return '<article class="card"><div class="pic">'+pic(it)+'</div><div class="body">'+
      '<h3>'+esc(it.name)+'</h3><div class="price">'+esc(priceText(it.price))+'</div>'+
      '<div class="actions"><button class="btn ghost" data-detail="'+esc(it.name)+'">View details</button></div></div></article>';
  }
  function allItems(){
    var a=[]; CATEGORIES.forEach(function(c){c.items.forEach(function(i){i.cat=c.name;a.push(i)})}); return a;
  }

  // home featured
  var feat = $('#featured');
  if(feat){
    var names=['Abigail Sectional','Promo Sofa','Terri Chair','Sumner Ottomans (Pair)'];
    feat.innerHTML = allItems().filter(function(i){return names.indexOf(i.name)>-1}).map(card).join('');
  }

  // products page
  var prod = $('#catalog');
  if(prod){
    var h='', navh='';
    CATEGORIES.forEach(function(c){
      navh += '<a href="#'+c.id+'">'+c.name+'</a>';
      h += '<section id="'+c.id+'" aria-labelledby="h-'+c.id+'"><h2 class="cat-title" id="h-'+c.id+'">'+c.name+'</h2>';
      if(c.items.length){ h += '<div class="grid g4">'+c.items.map(card).join('')+'</div>'; }
      else { h += '<div class="panel"><p><span class="ph">[PLACEHOLDER: headboard styles, sizes and photos &mdash; none were in the Webador draft]</span></p><a class="btn" href="contact.html?product=Custom%20headboard#quote">Request a headboard quote</a></div>'; }
      h += '</section><div style="height:48px"></div>';
    });
    prod.innerHTML = h; var cn=$('#catnav'); if(cn) cn.innerHTML=navh;
  }

  // detail dialog
  var dlg = $('#detail');
  if(dlg){
    document.addEventListener('click',function(e){
      var b = e.target.closest('[data-detail]'); if(!b) return;
      var it = allItems().filter(function(i){return i.name===b.getAttribute('data-detail')})[0]; if(!it) return;
      var fab = it.variants ? '<div class="variants" role="group" aria-label="Fabric"><p class="v-label">Fabric: <strong data-vname aria-live="polite">'+esc(it.variants[0].name)+'</strong></p><div class="v-chips">'+
        it.variants.map(function(v,i){
          return '<button type="button" class="v-chip" data-vi="'+i+'" aria-pressed="'+(i===0)+'" aria-label="'+esc(v.name)+'" title="'+esc(v.name)+'"><img src="'+(v.swatch||v.img)+'" alt="" loading="lazy"></button>';
        }).join('')+'</div></div>' : '';
      dlg.innerHTML = '<div class="dlg"><div class="pic">'+pic(it)+'</div><div class="info">'+
        '<button class="close" aria-label="Close" data-close>&times;</button>'+
        '<h2>'+esc(it.name)+'</h2><p class="price" style="font-size:1.3rem">'+esc(it.price?it.price+' <small>(base price, as listed in draft)</small>':'Request a quote')+'</p>'+
        '<p>Category: '+esc(it.cat)+'. Made to order in our Lincolnton, NC workshop and tailored to your space: choose the fabric and, where needed, the dimensions.</p>'+fab+
        '<p><span class="ph">[PLACEHOLDER: dimensions, materials and construction details for '+esc(it.name)+']</span></p>'+
        '<a class="btn" href="contact.html?product='+encodeURIComponent(it.name)+'#quote">Request a quote</a></div></div>';
      dlg.currentItem = it;
      dlg.showModal();
    });
    dlg.addEventListener('click',function(e){
      var c = e.target.closest('.v-chip'); if(!c || !dlg.currentItem) return;
      var v = dlg.currentItem.variants[+c.getAttribute('data-vi')], im = $('.pic img',dlg), nm = $('[data-vname]',dlg);
      if(!v || !im) return;
      im.src = v.img; im.alt = dlg.currentItem.name+' in '+v.name;
      if(nm) nm.textContent = v.name;
      dlg.querySelectorAll('.v-chip').forEach(function(b){ b.setAttribute('aria-pressed', b===c); });
    });
    dlg.addEventListener('click',function(e){ if(e.target===dlg || e.target.hasAttribute('data-close')) dlg.close(); });
  }

  // fabrics page
  var fabs = $('#fabrics');
  if(fabs){
    fabs.innerHTML = FABRICS.map(function(f){
      var id = f.fam.toLowerCase().replace(/[^a-z]+/g,'-');
      var body = f.items.length ? '<div class="swatches">'+f.items.map(function(s){
        var chip = s[1] ? '<img src="'+F+s[1]+'" alt="'+esc(f.fam+' '+s[0])+'" loading="lazy">'
                        : '<div class="nophoto">[PLACEHOLDER: swatch photo]</div>';
        return '<div class="sw"><div class="chip">'+chip+'</div><div class="t"><strong>'+esc(f.fam)+' &ndash; '+esc(s[0])+'</strong>'+
          '<a class="price" href="contact.html?swatch='+encodeURIComponent(f.fam+' - '+s[0])+'#quote">Free swatch request</a></div></div>';
      }).join('')+'</div>'
      : '<div class="fam-empty"><span class="ph">[PLACEHOLDER: colors and swatch photos for '+esc(f.fam)+']</span> &mdash; listed in the draft with no colors.</div>';
      return '<section class="fam" id="'+id+'"><h2>'+esc(f.fam)+'</h2>'+body+'</section>';
    }).join('');
    var fn=$('#famnav'); if(fn) fn.innerHTML = FABRICS.map(function(f){return '<a href="#'+f.fam.toLowerCase().replace(/[^a-z]+/g,'-')+'">'+esc(f.fam)+'</a>'}).join('');
  }

  // quote form -> mailto (no backend)
  var form = $('#quote-form');
  if(form){
    var params = new URLSearchParams(location.search);
    var msg = form.elements['message'];
    if(params.get('product')) form.elements['interest'].value = params.get('product');
    if(params.get('swatch')){ form.elements['interest'].value = 'Swatch request: '+params.get('swatch'); }
    form.addEventListener('submit',function(e){
      e.preventDefault();
      if(form.elements['website'].value) return; // honeypot
      var f = form.elements;
      var body = 'Name: '+f.name.value+'\nEmail: '+f.email.value+'\nPhone: '+f.phone.value+
        '\nInterested in: '+f.interest.value+'\nPreferred fabric: '+f.fabric.value+'\nDimensions / room notes: '+f.dims.value+
        '\n\n'+f.message.value;
      location.href = 'mailto:faulknerscustom@gmail.com?subject='+encodeURIComponent('Quote request: '+(f.interest.value||'custom furniture'))+'&body='+encodeURIComponent(body);
      var ok=$('#form-ok'); if(ok) ok.hidden=false;
    });
  }
})();
