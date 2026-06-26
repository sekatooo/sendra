const stories = [
  { name: 'lea.photo', avatar: 'https://i.pravatar.cc/150?img=12', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80' },
  { name: 'marco_v', avatar: 'https://i.pravatar.cc/150?img=33', img: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&q=80' },
  { name: 'sophie_art', avatar: 'https://i.pravatar.cc/150?img=5', img: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&q=80' },
  { name: 'thomas.k', avatar: 'https://i.pravatar.cc/150?img=60', img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80' },
  { name: 'nina_travels', avatar: 'https://i.pravatar.cc/150?img=22', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&q=80' },
  { name: 'alex.design', avatar: 'https://i.pravatar.cc/150?img=41', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80' },
];

let currentUser = null;

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

const notificationsData = [
  { user: 'lea.photo', avatar: 'https://i.pravatar.cc/150?img=12', text: 'a aimé votre publication', time: '2 min' },
  { user: 'marco_v', avatar: 'https://i.pravatar.cc/150?img=33', text: 'a commencé à vous suivre', time: '15 min' },
  { user: 'sophie_art', avatar: 'https://i.pravatar.cc/150?img=5', text: 'a commenté : "Magnifique !"', time: '1 h' },
  { user: 'thomas.k', avatar: 'https://i.pravatar.cc/150?img=60', text: 'a aimé votre publication', time: '3 h' },
  { user: 'nina_travels', avatar: 'https://i.pravatar.cc/150?img=22', text: 'a commencé à vous suivre', time: '5 h' },
  { user: 'alex.design', avatar: 'https://i.pravatar.cc/150?img=41', text: 'a aimé votre photo de profil', time: '1 j' },
  { user: 'julien.prod', avatar: 'https://i.pravatar.cc/150?img=15', text: 'a commenté : "Super contenu ! 🔥"', time: '2 j' },
  { user: 'camille.style', avatar: 'https://i.pravatar.cc/150?img=55', text: 'a commencé à vous suivre', time: '3 j' },
  { user: 'raph.photo', avatar: 'https://i.pravatar.cc/150?img=68', text: 'a aimé votre publication', time: '5 j' },
  { user: 'ana.ceramics', avatar: 'https://i.pravatar.cc/150?img=36', text: 'a commenté : "J\'adore ! 🏺"', time: '6 j' },
];

const exploreData = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&q=80',
  'https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=500&q=80',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80',
  'https://images.unsplash.com/photo-1440588424189-46ada1a5b9b5?w=500&q=80',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&q=80',
  'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
  'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80',
];

function initApp() {
  const session = localStorage.getItem('sendra_session');
  if (session) {
    const users = JSON.parse(localStorage.getItem('sendra_users') || '[]');
    currentUser = users.find(u => u.username === session);
    if (currentUser) {
      document.getElementById('authScreen').style.display = 'none';
      document.querySelector('.sidebar').style.display = 'flex';
      document.querySelector('.main').style.display = 'flex';
      updateProfilePage();
      renderMessages();
      renderReels();
      renderProfilePosts();
      renderNotifications();
      renderCreate();
      renderExplore();
      showPage('home');
      return;
    }
  }
  document.getElementById('authScreen').style.display = 'flex';
  document.querySelector('.sidebar').style.display = 'none';
  document.querySelector('.main').style.display = 'none';
}

function showLogin() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
  document.querySelector('.auth-title').textContent = 'Connexion';
  document.querySelector('.auth-toggle').innerHTML = `Vous n'avez pas de compte ? <a href="#" onclick="showSignup(); return false">Inscrivez-vous</a>`;
}

function showSignup() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
  document.querySelector('.auth-title').textContent = 'Inscription';
  document.querySelector('.auth-toggle').innerHTML = `Vous avez déjà un compte ? <a href="#" onclick="showLogin(); return false">Connectez-vous</a>`;
}

function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const users = JSON.parse(localStorage.getItem('sendra_users') || '[]');
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) { toast('Identifiant ou mot de passe incorrect'); return; }
  currentUser = user;
  localStorage.setItem('sendra_session', username);
  document.getElementById('authScreen').style.display = 'none';
  document.querySelector('.sidebar').style.display = 'flex';
  document.querySelector('.main').style.display = 'flex';
  updateProfilePage();
  renderMessages();
  renderReels();
  renderProfilePosts();
  renderNotifications();
  renderCreate();
  renderExplore();
  showPage('home');
  toast('Bienvenue ' + username + ' \u2713');
}

function handleSignup(e) {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  if (!username || !email || !password) { toast('Remplissez tous les champs'); return; }
  if (password.length < 4) { toast('Mot de passe trop court (min 4 caract\u00e8res)'); return; }
  const users = JSON.parse(localStorage.getItem('sendra_users') || '[]');
  if (users.find(u => u.username === username)) { toast('Ce nom d\'utilisateur existe d\u00e9j\u00e0'); return; }
  const avatars = ['https://i.pravatar.cc/150?img=47','https://i.pravatar.cc/150?img=12','https://i.pravatar.cc/150?img=33','https://i.pravatar.cc/150?img=5','https://i.pravatar.cc/150?img=60','https://i.pravatar.cc/150?img=22'];
  const newUser = {
    username, email, password,
    fullName: username,
    avatar: avatars[Math.floor(Math.random() * avatars.length)],
    bio: 'Nouveau sur Sendra \u2728',
    followers: 0, following: 0, posts: 0
  };
  users.push(newUser);
  localStorage.setItem('sendra_users', JSON.stringify(users));
  currentUser = newUser;
  localStorage.setItem('sendra_session', username);
  document.getElementById('authScreen').style.display = 'none';
  document.querySelector('.sidebar').style.display = 'flex';
  document.querySelector('.main').style.display = 'flex';
  updateProfilePage();
  renderMessages();
  renderReels();
  renderProfilePosts();
  renderNotifications();
  renderCreate();
  renderExplore();
  showPage('home');
  toast('Compte cr\u00e9\u00e9 ! Bienvenue ' + username + ' \ud83c\udf89');
}

function logout() {
  localStorage.removeItem('sendra_session');
  currentUser = null;
  document.getElementById('authScreen').style.display = 'flex';
  document.querySelector('.sidebar').style.display = 'none';
  document.querySelector('.main').style.display = 'none';
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('signupUsername').value = '';
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPassword').value = '';
  showLogin();
  toggleMoreMenu();
  toast('D\u00e9connect\u00e9 \u2713');
}

function updateProfilePage() {
  if (!currentUser) return;
  document.getElementById('profUsername').textContent = currentUser.username;
  document.querySelectorAll('.right-you-name').forEach(el => el.textContent = currentUser.username);
  document.querySelectorAll('.right-you-full').forEach(el => el.textContent = currentUser.fullName || currentUser.username);
  document.querySelectorAll('.nav-avatar').forEach(el => el.src = currentUser.avatar);
  document.querySelectorAll('.right-you-avatar').forEach(el => el.src = currentUser.avatar);
  document.querySelectorAll('.profile-avatar-large').forEach(el => el.src = currentUser.avatar);
  document.getElementById('profPosts').textContent = currentUser.posts || 0;
  document.getElementById('profFollowers').textContent = currentUser.followers >= 1000 ? (currentUser.followers/1000).toFixed(1) + 'k' : (currentUser.followers || 0);
  document.getElementById('profFollowing').textContent = currentUser.following || 0;
  document.getElementById('profBio').innerHTML = (currentUser.bio || '').replace(/\n/g, '<br>');
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

function searchMessages(query) {
  const list = document.getElementById('messagesList');
  const filtered = messages.filter(m =>
    m.name.toLowerCase().includes(query.toLowerCase())
  );
  list.innerHTML = filtered.map(m => `
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
  if (!query && filtered.length === messages.length) return;
  if (!filtered.length) {
    list.innerHTML = `<div class="search-placeholder" style="padding:30px 20px">Aucun ami trouvé</div>`;
  }
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
  toast(btn.classList.contains('saved') ? 'Enregistr\u00e9 \u2713' : 'Retir\u00e9');
}

function searchContent() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultsDiv = document.getElementById('searchResults');
  if (!query) { resultsDiv.innerHTML = '<div class="search-placeholder">Cherchez des personnes ou des vid\u00e9os</div>'; return; }

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
    html += '<div class="search-section-title">Vid\u00e9os</div>';
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
    html = '<div class="search-placeholder">Aucun r\u00e9sultat pour "' + query + '"</div>';
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
  document.getElementById('storyReplyInput').placeholder = `R\u00e9pondre \u00e0 ${s.name} ...`;

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
  heart.textContent = '\u2764\ufe0f';
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
    toast('Publication enregistr\u00e9e');
  } else {
    svg.setAttribute('fill', 'none');
    toast('Publication retir\u00e9e des enregistrements');
  }
}

function toggleFollow(btn) {
  if (btn.textContent === "S'abonner") {
    btn.textContent = 'Abonn\u00e9(e)';
    btn.classList.add('following');
    toast('Abonnement confirm\u00e9 \u2713');
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
  toast('Commentaire publi\u00e9 \u2713');
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

// ===== NOTIFICATIONS =====
function renderNotifications() {
  const page = document.getElementById('page-notifications');
  page.innerHTML = `
    <div class="notif-page">
      <div class="notif-header"><h2>Notifications</h2></div>
      <div class="notif-list">
        ${notificationsData.map(n => `
          <div class="notif-item">
            <img src="${n.avatar}" class="notif-avatar" alt="">
            <div class="notif-text"><strong>${n.user}</strong> ${n.text}</div>
            <div class="notif-time">${n.time}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ===== EXPLORE =====
function renderExplore() {
  const page = document.getElementById('page-explore');
  page.innerHTML = `
    <div class="explore-page">
      <div class="explore-grid">
        ${exploreData.map(url => `
          <div class="explore-item" onclick="toast('Explorer')">
            <img src="${url}" alt="">
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ===== CREATE POST =====
function renderCreate() {
  const page = document.getElementById('page-create');
  page.innerHTML = `
    <div class="create-page">
      <div class="create-card">
        <h2>Cr\u00e9er une publication</h2>
        <div class="create-upload" id="createUpload" onclick="document.getElementById('createFileInput').click()">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#8e8e8e" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
          <span>Cliquez pour ajouter une photo</span>
        </div>
        <input type="file" id="createFileInput" accept="image/*" style="display:none" onchange="previewCreateImage(event)">
        <img id="createPreview" class="create-preview" style="display:none" alt="">
        <div class="create-caption-wrap">
          <textarea id="createCaption" class="create-caption" placeholder="\u00c9crivez une l\u00e9gende..." rows="3"></textarea>
        </div>
        <button class="create-share-btn" onclick="sharePost()">Partager</button>
      </div>
    </div>
  `;
}

function previewCreateImage(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    document.getElementById('createUpload').style.display = 'none';
    const preview = document.getElementById('createPreview');
    preview.src = ev.target.result;
    preview.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function sharePost() {
  const preview = document.getElementById('createPreview');
  if (!preview || !preview.src) { toast('Ajoutez d\u2019abord une photo'); return; }
  if (currentUser) {
    currentUser.posts = (currentUser.posts || 0) + 1;
    const users = JSON.parse(localStorage.getItem('sendra_users') || '[]');
    const idx = users.findIndex(u => u.username === currentUser.username);
    if (idx !== -1) { users[idx] = currentUser; localStorage.setItem('sendra_users', JSON.stringify(users)); }
    updateProfilePage();
  }
  toast('Publication partag\u00e9e \u2713');
  document.getElementById('createUpload').style.display = 'flex';
  document.getElementById('createPreview').style.display = 'none';
  document.getElementById('createPreview').src = '';
  document.getElementById('createCaption').value = '';
}

// ===== VOTRE STORY =====
function openYourStory() {
  if (!currentUser) { toast('Connectez-vous d\u2019abord'); return; }
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
      stories.unshift({
        name: currentUser.username,
        avatar: currentUser.avatar,
        img: ev.target.result
      });
      toast('Story publi\u00e9e \u2713');
      openStory(0);
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

// ===== EDIT PROFILE =====
function openEditProfile() {
  if (!currentUser) return;
  closeModal();
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.style.display = 'flex';
  overlay.onclick = function(e) { if (e.target === this) this.remove(); };
  overlay.innerHTML = `
    <div class="edit-profile-modal">
      <div class="edit-profile-header">
        <h3>Modifier le profil</h3>
        <button class="edit-close" onclick="this.closest('.modal-overlay').remove()">\u2715</button>
      </div>
      <div class="edit-profile-body">
        <div class="edit-avatar-row" onclick="document.getElementById('editAvatarInput').click()">
          <img src="${currentUser.avatar}" id="editAvatarPreview" alt="">
          <span>Changer la photo</span>
        </div>
        <input type="file" id="editAvatarInput" accept="image/*" style="display:none" onchange="previewEditAvatar(event)">
        <div class="edit-field">
          <label>Nom d'utilisateur</label>
          <input type="text" id="editName" value="${currentUser.username}">
        </div>
        <div class="edit-field">
          <label>Bio</label>
          <textarea id="editBio" rows="3">${currentUser.bio || ''}</textarea>
        </div>
        <button class="edit-save-btn" onclick="saveProfile(this)">Enregistrer</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function previewEditAvatar(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    document.getElementById('editAvatarPreview').src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function saveProfile(btn) {
  const name = document.getElementById('editName').value.trim();
  const bio = document.getElementById('editBio').value.trim();
  if (!name) { toast('Le nom d\'utilisateur est requis'); return; }
  currentUser.username = name;
  currentUser.fullName = name;
  currentUser.bio = bio;
  const avatarSrc = document.getElementById('editAvatarPreview').src;
  if (avatarSrc && avatarSrc.startsWith('data:')) {
    currentUser.avatar = avatarSrc;
  }
  const users = JSON.parse(localStorage.getItem('sendra_users') || '[]');
  const idx = users.findIndex(u => u.username === localStorage.getItem('sendra_session'));
  if (idx !== -1) {
    users[idx] = currentUser;
    localStorage.setItem('sendra_users', JSON.stringify(users));
    localStorage.setItem('sendra_session', currentUser.username);
  }
  updateProfilePage();
  btn.closest('.modal-overlay').remove();
  toast('Profil mis \u00e0 jour \u2713');
}

// ===== PLUS MENU MODALS =====
function closeModal() {
  const el = document.getElementById('genericModal');
  el.classList.remove('open');
}

function openModal(title, bodyHTML) {
  toggleMoreMenu();
  const el = document.getElementById('genericModal');
  document.getElementById('genericModalContent').innerHTML = `
    <div class="generic-modal-header">
      <h3>${title}</h3>
      <button class="generic-modal-close" onclick="closeModal()">\u2715</button>
    </div>
    <div class="generic-modal-body">
      ${bodyHTML}
    </div>
  `;
  el.classList.add('open');
}

function openSettingsModal() {
  openModal('Param\u00e8tres', `
    <div class="modal-menu-item" onclick="toast('Modifier le profil'); closeModal()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      Modifier le profil
    </div>
    <div class="modal-menu-item" onclick="toast('Changer le mot de passe'); closeModal()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
      Changer le mot de passe
    </div>
    <div class="modal-menu-item" onclick="toast('Notifications push'); closeModal()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      Notifications push
    </div>
    <div class="modal-menu-item" onclick="toast('Confidentialit\u00e9'); closeModal()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
      Confidentialit\u00e9
    </div>
  `);
}

function openAccessibilityModal() {
  openModal('Accessibilit\u00e9', `
    <div class="modal-menu-item" onclick="document.body.style.fontSize=++fontSize+'px'; toast('Taille: '+fontSize+'px')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
      Augmenter la taille du texte
    </div>

    <div class="modal-menu-item" onclick="toast('Sons d\u00e9sactiv\u00e9s'); closeModal()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
      D\u00e9sactiver les sons
    </div>
  `);
}

let fontSize = 14;

function openReportModal() {
  openModal('Signaler un probl\u00e8me', `
    <div class="report-form">
      <textarea class="report-textarea" placeholder="D\u00e9crivez votre probl\u00e8me..." rows="5"></textarea>
      <button class="report-submit" onclick="toast('Signalement envoy\u00e9 \u2713'); closeModal()">Envoyer</button>
    </div>
  `);
}

function openBusinessModal() {
  openModal('Compte professionnel', `
    <div class="business-info">
      <p style="margin-bottom:16px;line-height:1.6">Passez \u00e0 un compte professionnel pour acc\u00e9der \u00e0 des fonctionnalit\u00e9s exclusives :</p>
      <div class="modal-menu-item" style="cursor:default;opacity:0.8">📊 Statistiques avanc\u00e9es</div>
      <div class="modal-menu-item" style="cursor:default;opacity:0.8">📧 Outils marketing</div>
      <div class="modal-menu-item" style="cursor:default;opacity:0.8">🏷️ \u00c9tiquettes de produit</div>
      <div class="modal-menu-item" style="cursor:default;opacity:0.8">📅 Programmation de contenu</div>
      <button class="report-submit" style="margin-top:16px" onclick="toast('Fonctionnalit\u00e9 \u00e0 venir'); closeModal()">Passer au pro</button>
    </div>
  `);
}

function openAboutModal() {
  openModal('\u00c0 propos de Sendra', `
    <div class="about-info">
      <div class="about-logo">Sendra</div>
      <p style="margin:12px 0;line-height:1.6">Sendra est une plateforme de partage de photos et vid\u00e9os. Connectez-vous avec vos amis, partagez vos moments et d\u00e9couvrez du contenu inspirant.</p>
      <p style="color:var(--text-light);font-size:13px">Version 1.0.0<br>\u00a9 2025 Sendra. Tous droits r\u00e9serv\u00e9s.</p>
    </div>
  `);
}

document.addEventListener('DOMContentLoaded', initApp);
