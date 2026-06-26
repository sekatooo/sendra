const stories = [
  { name: 'lea.photo', avatar: 'https://i.pravatar.cc/150?img=12', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80' },
  { name: 'marco_v', avatar: 'https://i.pravatar.cc/150?img=33', img: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&q=80' },
  { name: 'sophie_art', avatar: 'https://i.pravatar.cc/150?img=5', img: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&q=80' },
  { name: 'thomas.k', avatar: 'https://i.pravatar.cc/150?img=60', img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80' },
  { name: 'nina_travels', avatar: 'https://i.pravatar.cc/150?img=22', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&q=80' },
  { name: 'alex.design', avatar: 'https://i.pravatar.cc/150?img=41', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80' },
];

const userProfile = {
  username: 'sendra',
  fullName: 'Sendra Officiel',
  avatar: 'https://i.pravatar.cc/150?img=47',
  bio: 'Bienvenue sur Sendra ✨\nPartagez vos moments préférés',
  followers: 12580,
  following: 843,
  posts: 342
};

const messages = [
  { id: 1, name: 'lea.photo', avatar: 'https://i.pravatar.cc/150?img=12', lastMsg: 'Superbe photo ! 📸', time: '2 min', online: true },
  { id: 2, name: 'marco_v', avatar: 'https://i.pravatar.cc/150?img=33', lastMsg: 'On se voit demain ?', time: '15 min', online: true },
  { id: 3, name: 'sophie_art', avatar: 'https://i.pravatar.cc/150?img=5', lastMsg: 'J\'ai fini la toile ! 🎨', time: '1 h', online: false },
  { id: 4, name: 'thomas.k', avatar: 'https://i.pravatar.cc/150?img=60', lastMsg: 'Merci pour le tuyau', time: '3 h', online: false },
  { id: 5, name: 'nina_travels', avatar: 'https://i.pravatar.cc/150?img=22', lastMsg: 'Nouveau pays demain 🌍', time: '1 j', online: true },
  { id: 6, name: 'alex.design', avatar: 'https://i.pravatar.cc/150?img=41', lastMsg: 'Le logo est prêt', time: '2 j', online: false },
  { id: 7, name: 'julien.prod', avatar: 'https://i.pravatar.cc/150?img=15', lastMsg: 'Appelle moi stp', time: '3 j', online: false },
  { id: 8, name: 'camille.style', avatar: 'https://i.pravatar.cc/150?img=55', lastMsg: 'Belle tenue ! 👗', time: '5 j', online: false },
];

const users = [
  { name: 'lea.photo', avatar: 'https://i.pravatar.cc/150?img=12', sub: 'Photographe' },
  { name: 'marco_v', avatar: 'https://i.pravatar.cc/150?img=33', sub: 'Voyageur' },
  { name: 'sophie_art', avatar: 'https://i.pravatar.cc/150?img=5', sub: 'Artiste peintre' },
  { name: 'thomas.k', avatar: 'https://i.pravatar.cc/150?img=60', sub: 'Musicien' },
  { name: 'nina_travels', avatar: 'https://i.pravatar.cc/150?img=22', sub: 'Blogueuse voyage' },
  { name: 'alex.design', avatar: 'https://i.pravatar.cc/150?img=41', sub: 'Designer graphique' },
  { name: 'julien.prod', avatar: 'https://i.pravatar.cc/150?img=15', sub: 'Producteur' },
  { name: 'camille.style', avatar: 'https://i.pravatar.cc/150?img=55', sub: 'Influenceuse mode' },
  { name: 'raph.photo', avatar: 'https://i.pravatar.cc/150?img=68', sub: 'Photographe' },
  { name: 'ana.ceramics', avatar: 'https://i.pravatar.cc/150?img=36', sub: 'Céramiste' },
];

const reelsData = [
  { user: 'nina_travels', avatar: 'https://i.pravatar.cc/150?img=22', video: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80', likes: 45231, desc: 'Paradise beach 🌴 #Travel' },
  { user: 'marco_v', avatar: 'https://i.pravatar.cc/150?img=33', video: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80', likes: 28100, desc: 'Meilleur repas de ma vie 🍝' },
  { user: 'sophie_art', avatar: 'https://i.pravatar.cc/150?img=5', video: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80', likes: 18762, desc: 'Processus créatif 🎨' },
  { user: 'lea.photo', avatar: 'https://i.pravatar.cc/150?img=12', video: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80', likes: 56103, desc: 'Golden hour magic ✨ #Photography' },
  { user: 'julien.prod', avatar: 'https://i.pravatar.cc/150?img=15', video: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&q=80', likes: 9340, desc: 'Nouveau son en approche 🎵' },
  { user: 'camille.style', avatar: 'https://i.pravatar.cc/150?img=55', video: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80', likes: 37220, desc: 'OOTD du jour 👗 #Mode' },
  { user: 'thomas.k', avatar: 'https://i.pravatar.cc/150?img=60', video: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80', likes: 15400, desc: 'Concert hier soir 🎸' },
  { user: 'raph.photo', avatar: 'https://i.pravatar.cc/150?img=68', video: 'https://images.unsplash.com/photo-1518894781321-630e638d0742?w=500&q=80', likes: 22100, desc: 'Street photography 📷' },
];

const profilePosts = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&q=80',
  'https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=500&q=80',
];

function initApp() {
  renderMessages();
  renderReels();
  renderProfilePosts();
  showPage('home');
}

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navMap = { home: 0, search: 1, explore: 2, reels: 3, messages: 4, notifications: 5, create: 6, profile: 7 };
  const navIdx = navMap[page];
  if (navIdx !== undefined) {
    const items = document.querySelectorAll('.sidebar .nav-item');
    if (items[navIdx]) items[navIdx].classList.add('active');
  }
  if (page === 'reels') initReelsPlayer();
}

function renderMessages() {
  const list = document.getElementById('messagesList');
  list.innerHTML = messages.map(m => `
    <div class="msg-item" onclick="toast('Discussion avec ${m.name}')">
      <div class="msg-avatar-wrap ${m.online ? 'online' : ''}">
        <img src="${m.avatar}" class="msg-avatar" alt="">
      </div>
      <div class="msg-info">
        <div class="msg-name">${m.name}</div>
        <div class="msg-preview">${m.lastMsg}</div>
      </div>
      <div class="msg-time">${m.time}</div>
    </div>
  `).join('');
}

function renderReels() {
  const container = document.getElementById('reelsContainer');
  container.innerHTML = reelsData.map((r, idx) => `
    <div class="reel-item" id="reel-${idx}">
      <img src="${r.video}" class="reel-video" alt="">
      <div class="reel-overlay">
        <div class="reel-user-row">
          <img src="${r.avatar}" class="reel-user-avatar" alt="">
          <span class="reel-username">${r.user}</span>
          <button class="reel-follow-btn" onclick="event.stopPropagation(); toast('Abonné à ${r.user}')">S'abonner</button>
        </div>
        <div class="reel-desc">${r.desc}</div>
        <div class="reel-actions">
          <button class="reel-action-btn" onclick="event.stopPropagation(); toggleReelLike(this)">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            <span>${formatNumber(r.likes)}</span>
          </button>
          <button class="reel-action-btn" onclick="event.stopPropagation(); toast('Commentaire')">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            <span>${Math.floor(r.likes * 0.08)}</span>
          </button>
          <button class="reel-action-btn" onclick="event.stopPropagation(); toggleReelSave(this)">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="19 21 12 16 5 21 5 3 19 3 19 21"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderProfilePosts() {
  const grid = document.getElementById('profilePostsGrid');
  grid.innerHTML = profilePosts.map((img, idx) => `
    <div class="profile-post" onclick="toast('Publication ${idx+1}')">
      <img src="${img}" alt="">
      <div class="profile-post-overlay">
        <span>❤️ ${Math.floor(Math.random() * 5000)}</span>
      </div>
    </div>
  `).join('');
}

let currentReelIdx = 0;

function initReelsPlayer() {
  currentReelIdx = 0;
  scrollToReel(0);
}

function scrollToReel(idx) {
  const container = document.getElementById('reelsContainer');
  const reel = document.getElementById('reel-' + idx);
  if (reel) reel.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function toggleReelLike(btn) {
  btn.classList.toggle('liked');
  const svg = btn.querySelector('svg');
  const span = btn.querySelector('span');
  let count = parseInt(span.textContent.replace(/\D/g, ''));
  if (btn.classList.contains('liked')) {
    svg.setAttribute('fill', '#ff3040');
    span.textContent = formatNumber(count + 1);
  } else {
    svg.setAttribute('fill', 'none');
    span.textContent = formatNumber(count - 1);
  }
}

function toggleReelSave(btn) {
  btn.classList.toggle('saved');
  const svg = btn.querySelector('svg');
  svg.setAttribute('fill', btn.classList.contains('saved') ? 'white' : 'none');
  toast(btn.classList.contains('saved') ? 'Enregistré ✓' : 'Retiré');
}

function searchContent() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultsDiv = document.getElementById('searchResults');
  if (!query) { resultsDiv.innerHTML = '<div class="search-placeholder">Cherchez des personnes ou des vidéos</div>'; return; }

  const peopleResults = users.filter(u => u.name.includes(query));
  const videoResults = reelsData.filter(r => r.user.includes(query) || r.desc.toLowerCase().includes(query));

  let html = '';
  if (peopleResults.length) {
    html += '<div class="search-section-title">Personnes</div>';
    html += peopleResults.map(u => `
      <div class="search-user" onclick="toast('Profil de ${u.name}')">
        <img src="${u.avatar}" class="search-user-avatar" alt="">
        <div class="search-user-info">
          <div class="search-user-name">${u.name}</div>
          <div class="search-user-sub">${u.sub}</div>
        </div>
        <button class="suggest-follow-btn" onclick="event.stopPropagation(); toggleFollow(this)">S'abonner</button>
      </div>
    `).join('');
  }
  if (videoResults.length) {
    html += '<div class="search-section-title">Vidéos</div>';
    html += '<div class="search-video-grid">';
    html += videoResults.map(r => `
      <div class="search-video-item" onclick="showPage('reels')">
        <img src="${r.video}" alt="">
        <span>${r.user}</span>
      </div>
    `).join('');
    html += '</div>';
  }
  if (!peopleResults.length && !videoResults.length) {
    html = '<div class="search-placeholder">Aucun résultat pour "' + query + '"</div>';
  }
  resultsDiv.innerHTML = html;
}

function toggleMoreMenu() {
  document.getElementById('moreModal').classList.toggle('open');
}

function formatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

let storyTimer = null;
let currentStoryIdx = 0;

function openStory(idx) {
  currentStoryIdx = idx;
  const s = stories[idx];
  document.getElementById('storyModal').classList.add('open');
  document.getElementById('storyBg').src = s.img;
  document.getElementById('storyUserAvatar').src = s.avatar;
  document.getElementById('storyUserName').textContent = s.name;
  document.getElementById('storyReplyInput').placeholder = `Répondre à ${s.name} ...`;

  const row = document.getElementById('storyProgressRow');
  row.innerHTML = '';
  stories.forEach((_, i) => {
    const bar = document.createElement('div');
    bar.className = 'story-progress';
    const fill = document.createElement('div');
    fill.className = 'story-progress-fill' + (i < idx ? ' full' : '');
    fill.id = `spf-${i}`;
    bar.appendChild(fill);
    row.appendChild(bar);
  });

  clearTimeout(storyTimer);
  setTimeout(() => {
    const fill = document.getElementById(`spf-${idx}`);
    if (fill) fill.style.width = '100%';
  }, 50);
  storyTimer = setTimeout(() => {
    if (idx + 1 < stories.length) openStory(idx + 1);
    else closeStory();
  }, 5100);
}

function closeStory() {
  clearTimeout(storyTimer);
  document.getElementById('storyModal').classList.remove('open');
}

function closeStoryOnOverlay(e) {
  if (e.target === document.getElementById('storyModal')) closeStory();
}

function toggleLike(btn) {
  btn.classList.toggle('liked');
  const svg = btn.querySelector('svg');
  if (btn.classList.contains('liked')) {
    svg.setAttribute('fill', '#ff3040');
    svg.setAttribute('stroke', '#ff3040');
    btn.style.transform = 'scale(1.3)';
    setTimeout(() => btn.style.transform = 'scale(1)', 200);
  } else {
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', '#262626');
  }
}

function likePost(img) {
  const heart = document.createElement('div');
  heart.textContent = '❤️';
  heart.style.cssText = `position:absolute;font-size:80px;pointer-events:none;
    top:50%;left:50%;transform:translate(-50%,-50%) scale(0);
    transition:transform 0.3s, opacity 0.6s;z-index:10;`;
  img.parentElement.style.position = 'relative';
  img.parentElement.appendChild(heart);
  setTimeout(() => { heart.style.transform = 'translate(-50%,-50%) scale(1)'; }, 10);
  setTimeout(() => { heart.style.opacity = '0'; heart.style.transform = 'translate(-50%,-60%) scale(1.2)'; }, 400);
  setTimeout(() => heart.remove(), 900);
  const likeBtn = img.parentElement.querySelector('.action-btn');
  if (!likeBtn.classList.contains('liked')) toggleLike(likeBtn);
}

function toggleSave(btn) {
  btn.classList.toggle('saved');
  const svg = btn.querySelector('svg');
  if (btn.classList.contains('saved')) {
    svg.setAttribute('fill', '#262626');
    toast('Publication enregistrée');
  } else {
    svg.setAttribute('fill', 'none');
    toast('Publication retirée des enregistrements');
  }
}

function toggleFollow(btn) {
  if (btn.textContent === "S'abonner") {
    btn.textContent = 'Abonné(e)';
    btn.classList.add('following');
    toast('Abonnement confirmé ✓');
  } else {
    btn.textContent = "S'abonner";
    btn.classList.remove('following');
  }
}

function togglePostBtn(input) {
  const btn = input.nextElementSibling;
  btn.classList.toggle('active', input.value.trim().length > 0);
}

function postComment(btn) {
  const input = btn.previousElementSibling;
  if (!input.value.trim()) return;
  toast('Commentaire publié ✓');
  input.value = '';
  btn.classList.remove('active');
}

let toastTimeout;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => el.classList.remove('show'), 2500);
}

document.addEventListener('DOMContentLoaded', initApp);
