// Pénzügyi fogalmak – alkalmazási logika
// A működés változtatás nélkül került kiemelésre az index.html-ből.

// Accent-insensitive, case-insensitive normalize without \p{M}
function normalize(s){
  return (s||'')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .toLowerCase();
}

// Build index
const TERMS = DATA.filter(r=>r["Szó"] && r["Definíció"]).map(r=>{
  const word = String(r["Szó"]).trim();
  const def  = String(r["Definíció"]).trim();
  return { word, def, key: normalize(word) };
});

const searchInput = document.getElementById('searchInput');
const resultsEl   = document.getElementById('results');
const defEl       = document.getElementById('definition');
const historyEl   = document.getElementById('history');

let history = []; // last 10 selected terms (names only)

function renderHistory(){
  historyEl.innerHTML = '';
  if (!history.length){ historyEl.style.display = 'none'; return; }
  historyEl.style.display = 'flex';
  const frag = document.createDocumentFragment();
  history.forEach(w=>{
    const chip = document.createElement('button');
    chip.type='button'; chip.className='chip'; chip.textContent = w;
    chip.addEventListener('click', ()=> openDefinition(w));
    frag.appendChild(chip);
  });
  historyEl.appendChild(frag);
}

function addToHistory(word){
  history = [word, ...history.filter(w=>w!==word)].slice(0,10);
  renderHistory();
}

// Sort: startsWith first, then alphabetical
function sortMatches(q, arr){
  const nq = normalize(q);
  return arr.slice().sort((a,b)=>{
    const aStart = a.key.startsWith(nq) ? 0 : 1;
    const bStart = b.key.startsWith(nq) ? 0 : 1;
    if (aStart !== bStart) return aStart - bStart;
    return a.word.localeCompare(b.word,'hu');
  });
}

function renderResults(items){
  resultsEl.innerHTML='';
  if (!items.length){ resultsEl.style.display='none'; return; }
  resultsEl.style.display='block';
  const frag = document.createDocumentFragment();
  items.forEach((it, idx)=>{
    const el = document.createElement('div');
    el.className='result-item';
    el.setAttribute('role','option');
    el.setAttribute('tabindex', '0');
    el.innerHTML = '<div class="result-title">'+it.word+'</div>' +
                   '<div class="result-snippet">'+ (it.def.length>200?it.def.slice(0,200)+'…':it.def) +'</div>';
    el.addEventListener('click', ()=> openDefinition(it.word));
    el.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') openDefinition(it.word); });
    frag.appendChild(el);
  });
  resultsEl.appendChild(frag);
}

function renderDefinition(word){
  const it = TERMS.find(t=>t.word===word);
  if (!it) return;
  defEl.innerHTML = '<h2>'+it.word+'</h2><p>'+it.def.replace(/\n/g,'<br>')+'</p>';
  defEl.style.display='block';
  resultsEl.style.display='none';
}

function openDefinition(word){
  renderDefinition(word);
  addToHistory(word);
  searchInput.value='';
  searchInput.focus();
}

function onSearch(){
  const q = searchInput.value;
  renderHistory(); // remains visible while typing
  if (!q){ resultsEl.style.display='none'; return; }
  const nq = normalize(q);
  const matches = TERMS.filter(t=> t.key.indexOf(nq)!==-1);
  const sorted = sortMatches(q, matches);
  renderResults(sorted.slice(0,100));
  defEl.style.display='none'; // hide definition while typing
}

// Enter picks top match
function onKeyDown(e){
  if (e.key==='Enter'){
    const q = searchInput.value;
    const nq = normalize(q);
    const first = TERMS.find(t=> t.key.indexOf(nq)!==-1);
    if (first){ openDefinition(first.word); }
  }
}

searchInput.addEventListener('input', onSearch);
searchInput.addEventListener('keydown', onKeyDown);

// Initial
renderHistory();
