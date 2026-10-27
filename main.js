'use strict';
/* =====================================================================
   LIGAÇÃO ENTRE AS TELAS, PAINEL DE ESTATÍSTICAS E OVERLAYS
   ===================================================================== */
const $ = id => document.getElementById(id);

const UI = {
  show(which) {
    $('screen-yard').classList.toggle('hidden', which !== 'yard');
    $('screen-battle').classList.toggle('hidden', which !== 'battle');
    $('screen-online').classList.toggle('hidden', which !== 'online');
  },
  overlay({ title, html, buttons }) {
    $('ov-title').textContent = title;
    $('ov-body').innerHTML = html;
    const box = $('ov-btns'); box.innerHTML = '';
    for (const b of buttons) {
      const el = document.createElement('button');
      el.className = 'btn big' + (b.primary ? ' primary' : '');
      el.textContent = b.label; el.onclick = b.onClick;
      box.appendChild(el);
    }
    $('overlay').classList.remove('hidden');
  },
  hideOverlay() { $('overlay').classList.add('hidden'); const cd = document.querySelector('#overlay .card'); if (cd) cd.classList.remove('host'); },
  banner(title, sub) {
    const b = $('banner');
    b.querySelector('h2').textContent = title; b.querySelector('p').textContent = sub || '';
    b.classList.remove('hidden'); b.classList.remove('show'); void b.offsetWidth; b.classList.add('show');
    clearTimeout(UI._bt); UI._bt = setTimeout(() => b.classList.add('hidden'), 2600);
  },
  toYard() {
    Battle.stop(); UI.hideOverlay(); Touch.show(false); UI.show('yard');
    refreshHeader(); Builder.refresh();
  },
};

function refreshHeader() {
  $('coins').textContent = Meta.coins;
  $('best').textContent = Meta.best;
}

function bar(label, value, text, pct, cls = '') {
  return `<div class="stat"><div class="stat-head"><span>${label}</span><b>${text}</b></div>
    <div class="meter"><i class="${cls}" style="width:${clamp(pct, 0, 1) * 100}%"></i></div></div>`;
}

function renderStats(r) {
  const s = r.stats, over = !Builder.isFree() && s.cost > r.budget;
  $('cost-box').innerHTML = `<div class="cost-box ${over ? 'over' : ''}">
      <span>Custo do navio</span><b>🪙 ${s.cost} / ${Builder.isFree() ? '∞' : r.budget}</b>
      <div class="meter"><i class="${over ? 'bad' : 'amber'}" style="width:${Builder.isFree() ? 0 : clamp(s.cost / r.budget, 0, 1) * 100}%"></i></div>
    </div>`;
  $('stats-body').innerHTML =
    bar('Casco total', s.hp, s.hp.toFixed(0) + ' pts', s.hp / 350, 'good') +
    bar('Peso', s.mass, s.mass.toFixed(0), s.mass / 150) +
    bar('Velocidade', s.maxSpeed, (s.maxSpeed / 5).toFixed(0) + ' nós', s.maxSpeed / 250, 'blue') +
    bar('Manobrabilidade', s.turn, s.turn.toFixed(1) + ' rad/s', s.turn / 2.6, 'blue') +
    bar('Aderência (anti-derrapagem)', s.grip, s.grip.toFixed(1), s.grip / 4.5, 'blue') +
    bar('Poder de fogo', s.dps, s.dps.toFixed(0) + ' dps', s.dps / 45, 'red') +
    (s.shield ? bar('Escudo', s.shield, s.shield.toFixed(0) + ' pts', s.shield / 80, 'blue') : '') +
    `<div class="counts">${[
      ['🎯', s.cannons, 'Canhões'], ['💣', s.mortars, 'Morteiros'], ['🔫', s.mgs, 'Metralhadoras'],
      ['🚀', s.torps, 'Torpedos'], ['🎇', s.missiles, 'Mísseis'], ['⚙', s.engines, 'Motores'],
      ['◣', +s.lat.toFixed(1), 'Aletas laterais (valor)'], ['▼', +s.rear.toFixed(1), 'Aletas traseiras (valor)'], ['✚', s.repairs, 'Reparos'],
      ['🛡', s.shields, 'Escudos'], ['📡', s.pd, 'Defesa pontual'], ['💨', s.thrusters, 'Propulsores laterais'],
      ['🗡', s.melee, 'Armas corpo a corpo'], ['🎯', s.ballistics, 'Mísseis balísticos'], ['✨', s.flares, 'Lançadores de flares'], ['🧱', s.plates, 'Placas de convés'], ['🛩', s.hangars, 'Hangares de drone'], ['🚰', s.pumps, 'Bombas de esgoto'], ['🧯', s.sprinklers, 'Anti-incêndio'], ['👥', s.crewCount, 'Grupos de tripulação'],
      ['📡', s.radars + s.lookouts + (s.aesa ? 1 : 0) + (s.irstR ? 1 : 0), 'Radares, vigias e sensores de calor'], ['🔊', s.sonars + s.pings + (s.bowSonar ? 1 : 0), 'Sonares'],
      ['☁', s.smokers, 'Geradores de fumaça'], ['🎭', s.chaffs + s.decoys, 'Iscas (chaff e antitorpedo)'], ['📶', s.jammers + s.tjam + s.djam, 'Bloqueadores e interferidores'],
      ['🛠', s.sealants + s.buoys + s.suppress + s.cutters + s.insul + s.dampers, 'Proteções de avaria'], ['⚙', s.boosters + s.cic + s.dronebays + s.ballcomps + s.gyros, 'Peças de apoio'],
    ].filter(c => c[1] > 0).map(c => `<span title="${c[2]}">${c[0]} ${c[1]}</span>`).join('')}</div>`;
  $('messages').innerHTML =
    r.errors.map(m => `<div class="msg err">⛔ ${m}</div>`).join('') +
    r.warnings.map(m => `<div class="msg warn">⚠ ${m}</div>`).join('') +
    (r.ok && !r.warnings.length ? '<div class="msg ok">✔ Navio pronto para a batalha!</div>' : '');
  const btn = $('btn-battle');
  btn.disabled = !r.ok;
  btn.textContent = r.ok ? '⚔ Ir para a batalha' : 'Corrija o navio para batalhar';
}

function startCampaign() {
  const r = Builder.analyze();
  if (!r.ok) return;
  UI.show('battle');
  Touch.show(true);
  Battle.start(Builder.getDesign(), Meta.bots.startWave || 1);
}

/** Campo de testes: mar vazio com alvos parados. Ignora o orçamento (só exige um navio estruturalmente válido). */
function startSandbox() {
  const d = Builder.getDesign(), v = validateDesign(d, 0);
  if (!v.ok) { alert('Corrija o navio antes de entrar no campo de testes:\n' + v.error); return; }
  UI.show('battle');
  Touch.show(true);
  Battle.start(d, 1, { sandbox: true });
}

/** opções que cada modo de partida mostra na janela de Bots */
const ALL_OBJ = ['zone', 'convoy', 'port', 'flag', 'defend', 'loot'], OFF_ON = [[false, 'Desligado'], [true, 'Ligado']];
const MODE_FIELDS = [
  { k: 'minutes', label: 'Duração da partida', modes: ['zone', 'convoy', 'port', 'flag', 'loot'], opts: [[0, 'Sem limite'], [3, '3 min'], [5, '5 min'], [8, '8 min'], [12, '12 min'], [20, '20 min'], [30, '30 min']] },
  { k: 'score', label: 'Pontos para vencer', modes: ['zone'], opts: [[100, '100'], [200, '200'], [300, '300'], [500, '500']] },
  { k: 'zones', label: 'Número de zonas', modes: ['zone'], opts: [[1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5']] },
  { k: 'lives', label: 'Vidas do cargueiro', modes: ['convoy'], opts: [[1, '1'], [2, '2'], [3, '3'], [5, '5'], [8, '8']] },
  { k: 'portHp', label: 'Vida dos portos', modes: ['port', 'defend'], opts: [[0.5, '0,5×'], [1, '1× (1500)'], [2, '2×'], [3, '3×'], [5, '5×']] },
  { k: 'turrets', label: 'Torres de cada porto', modes: ['port', 'flag', 'defend'], opts: [[0, 'Nenhuma'], [1, '1'], [2, '2'], [3, '3'], [4, '4'], [6, '6']] },
  { k: 'flags', label: 'Capturas para vencer', modes: ['flag'], opts: [[1, '1'], [2, '2'], [3, '3'], [5, '5'], [10, '10']] },
  { k: 'waves', label: 'Número de ondas', modes: ['defend'], opts: [[3, '3'], [5, '5'], [6, '6'], [8, '8'], [12, '12'], [20, '20']] },
  { k: 'crates', label: 'Caixas ao mesmo tempo', modes: ['loot'], opts: [[6, '6'], [10, '10'], [16, '16'], [24, '24']] },
  { k: 'lootScore', label: 'Pontos para vencer', modes: ['loot'], opts: [[10, '10'], [25, '25'], [40, '40'], [60, '60']] },
  { k: 'respawn', label: 'Reaparecer após afundar', modes: ALL_OBJ, opts: [[3, '3 s'], [5, '5 s'], [8, '8 s'], [12, '12 s'], [20, '20 s']] },
  { k: 'arena', label: 'Tamanho do mapa', modes: ALL_OBJ, opts: [[2400, 'Pequeno'], [3600, 'Médio'], [5000, 'Grande']] },
  { k: 'fog', label: 'Névoa de guerra', modes: ALL_OBJ, opts: [[true, 'Ligada'], [false, 'Desligada']] },
  { k: 'ff', label: 'Fogo amigo', modes: ALL_OBJ, opts: OFF_ON },
];

/* ---------------------------------------------------------------- janela de Bots */
const DIFF_DESC = {
  facil: 'Erram bastante, recarregam devagar e enxergam menos longe.',
  normal: 'Ficam mais fortes a cada onda (padrão da campanha).',
  dificil: 'Miram bem e recarregam no tempo normal.',
  mestre: 'Quase não erram, recarregam mais rápido e enxergam mais longe.',
};
function openBots() {
  const B = Meta.bots, modal = $('modal-bots');
  const pool = PRESETS.map(p => ({ id: p.id, name: p.name, power: p.power })).concat([{ id: 'meu', name: 'Clone do meu navio', power: 0 }]);
  $('bots-diff').innerHTML = Object.keys(BOT_DIFFS).map(k => `<option value="${k}">${BOT_DIFFS[k].name}</option>`).join('');
  $('bots-env').innerHTML = '<option value="rand">Aleatório</option>' + BIOME_KEYS.map(k => `<option value="${k}">${BIOMES[k].name}</option>`).join('');
  $('bots-env').value = Meta.map.env; $('bots-isl').value = String(Meta.map.level); $('bots-mode').value = B.mode || ''; $('bots-allies').value = String(B.allies == null ? 2 : B.allies);
  $('bots-diff').value = B.diff; $('bots-mult').value = String(B.mult);
  $('bots-wave').innerHTML = Array.from({ length: 20 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('');
  $('bots-wave').value = String(B.startWave);
  const showDesc = () => { $('bots-diff-desc').textContent = DIFF_DESC[B.diff] || ''; };
  $('bots-mode').innerHTML = Object.keys(MODE_INFO).map(k => `<option value="${k}">${MODE_INFO[k].name}</option>`).join('');
  $('bots-mode').value = B.mode || '';
  const buildOpts = () => {                                                 // opções de cada modo (só aparecem as que valem para o modo escolhido)
    const md = B.mode || '', box = $('bots-opts');
    const fields = MODE_FIELDS.filter(f => f.modes.includes(md));
    $('bots-opts-title').style.display = box.style.display = fields.length ? '' : 'none';
    box.innerHTML = fields.map(f => `<label class="field">${f.label} <select data-k="${f.k}">${f.opts.map(([v, t]) => `<option value="${v}" ${String(B.opts[f.k]) === String(v) ? 'selected' : ''}>${t}</option>`).join('')}</select></label>`).join('');
    box.querySelectorAll('select').forEach(sel => sel.onchange = () => {
      const d = MODE_OPTS_DEFAULT[sel.dataset.k];
      B.opts[sel.dataset.k] = typeof d === 'boolean' ? sel.value === 'true' : +sel.value; Meta.save();
    });
  };
  const sum = () => {
    const tot = Object.values(B.skirmish).reduce((a, b) => a + b, 0), md = B.mode || '';
    $('bots-mode-desc').textContent = MODE_INFO[md].desc;
    $('bots-sum').textContent = md ? `${MODE_INFO[md].name}: ${md === 'defend' ? 'ondas automáticas' : tot ? tot + ' inimigo(s) escolhido(s)' : 'inimigos automáticos'} · ${B.allies} aliado(s) · ${BOT_DIFFS[B.diff].name}`
      : (tot ? `Escaramuça: ${tot} bot(s) · ${BOT_DIFFS[B.diff].name}` : 'Escaramuça: adicione ao menos 1 bot.');
    $('bots-skirm-start').disabled = !md && !tot;
    buildOpts();
  };
  const buildAllowed = () => {
    $('bots-allowed').innerHTML = pool.map(p => `<label class="chk"><input type="checkbox" data-id="${p.id}" ${!B.allowed || B.allowed.includes(p.id) ? 'checked' : ''}> ${p.name} ${p.power ? `<small>poder ${p.power}</small>` : ''}</label>`).join('');
    $('bots-allowed').querySelectorAll('input').forEach(i => i.onchange = () => {
      const ids = [...$('bots-allowed').querySelectorAll('input:checked')].map(x => x.dataset.id);
      B.allowed = ids.length === pool.length ? null : ids; Meta.save();
    });
  };
  const buildSkirm = () => {
    $('bots-skirm').innerHTML = pool.map(p => `<div class="step"><span>${p.name}</span><button data-id="${p.id}" data-d="-1">−</button><b>${B.skirmish[p.id] || 0}</b><button data-id="${p.id}" data-d="1">+</button></div>`).join('');
    $('bots-skirm').querySelectorAll('button').forEach(b => b.onclick = () => {
      const v = clamp((B.skirmish[b.dataset.id] || 0) + (+b.dataset.d), 0, 6);
      if (v) B.skirmish[b.dataset.id] = v; else delete B.skirmish[b.dataset.id];
      Meta.save(); buildSkirm(); sum();
    });
  };
  $('bots-diff').onchange = () => { B.diff = $('bots-diff').value; Meta.save(); showDesc(); sum(); };
  $('bots-env').onchange = () => { Meta.map.env = $('bots-env').value; Meta.save(); };
  $('bots-isl').onchange = () => { Meta.map.level = +$('bots-isl').value; Meta.save(); };
  $('bots-mode').onchange = () => { B.mode = $('bots-mode').value; Meta.save(); sum(); };
  $('bots-allies').onchange = () => { B.allies = +$('bots-allies').value; Meta.save(); sum(); };
  $('bots-mult').onchange = () => { B.mult = +$('bots-mult').value; Meta.save(); };
  $('bots-wave').onchange = () => { B.startWave = +$('bots-wave').value; Meta.save(); };
  $('bots-all').onclick = () => { B.allowed = null; Meta.save(); buildAllowed(); };
  $('bots-none').onclick = () => { B.allowed = []; Meta.save(); buildAllowed(); };
  $('bots-close').onclick = () => modal.classList.add('hidden');
  $('bots-sandbox').onclick = () => { modal.classList.add('hidden'); startSandbox(); };
  $('bots-skirm-start').onclick = () => {
    const r = Builder.analyze();
    if (!r.ok) { alert('Corrija o navio antes de lutar:\n' + r.errors.join('\n')); return; }
    modal.classList.add('hidden'); UI.show('battle'); Touch.show(true);
    Battle.start(Builder.getDesign(), 1, { counts: Object.assign({}, B.skirmish), diff: B.diff, wave: 6, mode: B.mode || '', allies: B.allies, opts: Object.assign({}, B.opts) });
  };
  showDesc(); buildAllowed(); buildSkirm(); sum();
  modal.classList.remove('hidden');
}

function openOpts() {
  const modal = $('modal-opts'), rng = $('zoom-range');
  const cur = () => Meta.zoom || (window.innerWidth < 900 ? 0.75 : 1);
  const show = () => { rng.value = Math.round(cur() * 100); $('zoom-val').textContent = Math.round(cur() * 100) + '%'; };
  rng.oninput = () => { Meta.zoom = rng.value / 100; Meta.save(); $('zoom-val').textContent = rng.value + '%'; };
  $('zoom-reset').onclick = () => { Meta.zoom = 0; Meta.save(); show(); };
  $('opts-close').onclick = () => modal.classList.add('hidden');
  show(); modal.classList.remove('hidden');
}

window.addEventListener('DOMContentLoaded', () => {
  Meta.load();
  $('ver').textContent = 'v' + VERSION.replace(/\.0$/, '');
  Touch.init();
  Battle.init();
  Online.init();
  Builder.init(renderStats);
  refreshHeader();
  $('btn-battle').onclick = startCampaign;
  $('btn-sandbox').onclick = startSandbox;
  $('btn-online').onclick = () => Online.show();
  $('btn-bots').onclick = openBots;
  $('btn-opts').onclick = openOpts;
  $('btn-reset').onclick = () => {
    const msg = ['Resetar o jogo?', '', 'Isso apaga suas moedas, o recorde de ondas e o navio salvo, e volta ao navio inicial. Não dá para desfazer.'];
    if (!confirm(msg.join('\n'))) return;
    Meta.reset(); Builder.reset(); refreshHeader();
  };
});

/* PWA: instalável no celular e jogável offline (rede primeiro, cache como reserva) */
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
