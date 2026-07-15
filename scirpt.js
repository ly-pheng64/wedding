// Gallery placeholders
const lotus = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1.5 3 1.5 6 0 9-1.5-3-1.5-6 0-9zm-6 5c2.5 2 4 4.5 4 7-2.5-1-4.5-3-4-7zm12 0c.5 4-1.5 6-4 7 0-2.5 1.5-5 4-7zM12 11c3 1.5 5 4 5 7H7c0-3 2-5.5 5-7z"/></svg>`;
const grid = document.getElementById('gallery');
for (let i = 1; i <= 6; i++) {
    const tile = document.createElement('div');
    tile.className = 'gallery-tile';
    tile.innerHTML = `${lotus}<span>បន្ថែមរូបភាព ${i}</span>`;
    grid.appendChild(tile);
}

// Countdown to 2027-01-29 00:00 local time
const target = new Date('2027-01-29T00:00:00');
function toKhmerDigits(n) {
    const km = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    return String(n).split('').map(d => km[d] ?? d).join('');
}
function updateCountdown() {
    const now = new Date();
    let diff = target - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    document.getElementById('cd-days').textContent = toKhmerDigits(days);
    document.getElementById('cd-hours').textContent = toKhmerDigits(String(hours).padStart(2, '0'));
    document.getElementById('cd-mins').textContent = toKhmerDigits(String(mins).padStart(2, '0'));
    document.getElementById('cd-secs').textContent = toKhmerDigits(String(secs).padStart(2, '0'));
}
updateCountdown();
setInterval(updateCountdown, 1000);