// ปุ่ม Say Hello: สลับข้อความทุกครั้งที่กด
const statusEl = document.querySelector('#status');
let greeted = false;
document.querySelector('#helloBtn').addEventListener('click', () => {
  greeted = !greeted;
  statusEl.textContent = greeted ? 'Hello from GitHub Pages!' : 'Ready to deploy';
});

// ปุ่ม Toggle Theme: สลับโหมดสว่าง/มืด และจำค่าที่เลือกไว้
const themeBtn = document.querySelector('#themeBtn');

function applyTheme(theme) {
  const dark = theme === 'dark';
  document.body.classList.toggle('dark', dark);
  themeBtn.textContent = dark ? '☀️ Light' : '🌙 Dark';
  themeBtn.setAttribute('aria-pressed', String(dark));
}

let saved = 'light';
try { saved = localStorage.getItem('theme') || 'light'; } catch (e) {}
applyTheme(saved);

themeBtn.addEventListener('click', () => {
  const next = document.body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});
