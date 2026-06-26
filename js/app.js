const stories = [
  { name: 'lea.photo', avatar: 'https://i.pravatar.cc/150?img=12', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80' },
  { name: 'marco_v', avatar: 'https://i.pravatar.cc/150?img=33', img: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&q=80' },
  { name: 'sophie_art', avatar: 'https://i.pravatar.cc/150?img=5', img: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&q=80' },
  { name: 'thomas.k', avatar: 'https://i.pravatar.cc/150?img=60', img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80' },
  { name: 'nina_travels', avatar: 'https://i.pravatar.cc/150?img=22', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&q=80' },
  { name: 'alex.design', avatar: 'https://i.pravatar.cc/150?img=41', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80' },
];

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

function showPage(p) { /* navigation placeholder */ }
