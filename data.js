/* Product and fabric data (from Webador capture). Edit here, pages render from it. */
var P = 'assets/products/', F = 'assets/fabrics/';
var CATEGORIES = [
  { id:'sectionals', name:'Sectionals', items:[
    { name:'Abigail Sectional', price:'$4,850.00', img:P+'abigail-sectional.png', variants:[
      { name:'Phoenix Pearl', img:P+'abigail-sectional.png' },
      { name:'Hercules Navy', img:P+'abigail-sectional-hercules-navy-high.png', swatch:F+'herculesnavy-high.jpg' }
    ] },
    { name:'Carla Sectional',   price:'$4,850.00' },
    { name:'Promo Sectional',   price:'$4,850.00', img:P+'sectional2-high.png' }
  ]},
  { id:'sofas', name:'Sofas', items:[
    { name:'Abigail Sofa', price:'$2,350.00' },
    { name:'Carla Sofa',   price:'$2,350.00' },
    { name:'Nash Sofa',    price:'$2,350.00' },
    { name:'Promo Sofa',   price:'$2,350.00', img:P+'promosofa-high.jpg' }
  ]},
  { id:'chairs', name:'Chairs', items:[
    { name:'Abigail Chair', price:'$1,000.00' },
    { name:'Carla Chair',   price:'$1,000.00' },
    { name:'Claire Chair',  price:'$1,000.00', img:P+'claire-chair-screenshot-high.png' },
    { name:'Deanna Chair',  price:'$1,000.00', img:P+'deanna-chair-high.jpg', variants:[
      { name:'Hailey Cotton', img:P+'deanna-chair-high.jpg', swatch:F+'haileycotton-high.jpg' },
      { name:'Phoenix Beige', img:P+'deanna-chair-phoenix-beige-high.png', swatch:F+'pheonixbeige-high.jpg' },
      { name:'Sugarshack Natural', img:P+'deanna-chair-sugarshack-natural-high.png', swatch:F+'ss-natural-high.jpg' },
      { name:'Hailey Natural', img:P+'deanna-chair-hailey-natural-high.png', swatch:F+'haileynatural-high.jpg' },
      { name:'Meow Pebble', img:P+'deanna-chair-meow-pebble-high.png', swatch:F+'meowpebble-high.jpg' }
    ] },
    { name:'Emory Chair',   price:'$1,000.00' },
    { name:'Estelle Chair', price:'$1,000.00' },
    { name:'Nash Chair',    price:'$1,000.00', img:P+'nash-chair-high.png', variants:[
      { name:'Hailey Cotton', img:P+'nash-chair-high.png', swatch:F+'haileycotton-high.jpg' },
      { name:'Sugarshack Hemp', img:P+'nash-chair-sugarshack-hemp-high.png', swatch:F+'ss-hemp-high.jpg' },
      { name:'Sugarshack Natural', img:P+'nash-chair-sugarshack-natural-high.png', swatch:F+'ss-natural-high.jpg' }
    ] },
    { name:'Terri Chair',   price:'$1,000.00', img:P+'terri-chair-ss-granite-high.png', variants:[
      { name:'Sugarshack Granite', img:P+'terri-chair-ss-granite-high.png' },
      { name:'White', img:P+'terri-chair-white-high.png' },
      { name:'Doyle', img:P+'terri-chair-doyle-high.png' },
      { name:'Sugarshack Beige', img:P+'terri-chair-sugarshack-beige-high.png', swatch:F+'ss-beige-high.jpg' },
      { name:'Meow Spa', img:P+'terri-chair-meow-spa-high.png', swatch:F+'meowspa-high.jpg' }
    ] },
    { name:'Westin Chair',  price:'$1,000.00', img:P+'westin-white-high.png' },
    { name:'Wynne Chair',   price:'$1,000.00', img:P+'wynne2-high.png' }
  ]},
  { id:'ottomans', name:'Ottomans', items:[
    { name:'Sumner Ottomans (Pair)', price:'$350.00', img:P+'sumner-high.jpg' },
    { name:'Round Ottoman',          price:null, img:P+'roundott-high.jpg' },
    { name:'Bench Ottoman',          price:null },
    { name:'Octagon Sumner Ottoman', price:null }
  ]},
  { id:'headboards', name:'Headboards', items:[] }
];

var FABRICS = [
  { fam:'Avany Garde', items:[['Linen/Blue','ag-linenblue-high.jpg'],['Linen/Taupe','ag-linentaupe-high.jpg'],['Navy','ag-navy-high.jpg']] },
  { fam:'Balsam Court', items:[] },
  { fam:'Cobblestone', items:[] },
  { fam:'Darwin', items:[] },
  { fam:'Doyle', items:[] },
  { fam:'Five by Five', items:[['Cotton',null]] },
  { fam:'Hailey', items:[['Cotton','haileycotton-high.jpg'],['Linen','haileylinen-high.jpg'],['Mocha','haileymocha-high.jpg'],['Pewter','haileypewter-high.jpg'],['Slate','haileyslate-high.jpg'],['Natural','haileynatural-high.jpg']] },
  { fam:'Hercules', items:[['Navy','herculesnavy-high.jpg'],['Pebble','herculespebble-high.jpg'],['Pewter','herculespewter-high.jpg'],['Silver','herculessilver-high.jpg'],['Spray','herculesspray-high.jpg'],['Steele','herculessteele-high.jpg']] },
  { fam:'Leather', items:[] },
  { fam:'Linen', items:[] },
  { fam:'Meow', items:[['Pebble','meowpebble-high.jpg'],['Spa','meowspa-high.jpg']] },
  { fam:'Monaco', items:[] },
  { fam:'Perf Beck', items:[] },
  { fam:'Phoenix', items:[['Beige','pheonixbeige-high.jpg'],['Pearl',null]] },
  { fam:'Sugarshack', items:[['Beach','ss-beach-high.jpg'],['Beige','ss-beige-high.jpg'],['Charcoal','ss-charcoal-high.jpg'],['Cotton','ss-cotton-high.jpg'],['Hemp','ss-hemp-high.jpg'],['Natural','ss-natural-high.jpg'],['Pearl','ss-pearl-high.jpg'],['Slate','ss-slate-high.jpg'],['Spa','ss-spa-high.jpg'],['Wedgewood','ss-wedgewood-high.jpg']] },
  { fam:'Wild Dunes', items:[] }
];
