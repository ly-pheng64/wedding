// ---------- Translations ----------
const translations = {
    km: {
        heroTitle: ' មេីលកាស្រឡាញ់ របស់យើងខ្ញុំ',
        groomLabel: 'កូនប្រុសនាម',
        groomName: 'ផេង',
        brideLabel: 'កូនស្រីនាម',
        brideName: 'អមរ៉ា',
        dateLine: 'ថ្ងៃទី ០៩ ខែមករា ឆ្នាំ២០២៥',
        inviteTitle: 'សូមគោរពអញ្ជើញ',
        // inviteBody: 'មកចូលរួមជាភ្ញៀវកិត្តិយស ក្នុងពិធីមង្គលការ របស់យើងខ្ញុំ ដោយក្តីរាប់អាន',
        inviteBody: 'មកចូលរួមជាភ្ញៀវកិត្តិយស កាមេីលកាស្រឡាញ់ របស់យើងខ្ញុំ ដោយក្តីរាប់អាន',
        countdownTitle: 'រាប់ទៅមុខ',
        countdownSub: 'រង់ចាំថ្ងៃដ៏ពិសេសនេះជាមួយគ្នា',
        labelDays: 'ថ្ងៃ', labelHours: 'ម៉ោង', labelMins: 'នាទី', labelSecs: 'វិនាទី',
        galleryTitle: 'រូបភាពនៃយើងខ្ញុំ',
        gallerySub: 'កន្លែងសម្រាប់បន្ថែមរូបភាពរបស់អ្នកនៅពេលក្រោយ',
        galleryTile: 'បន្ថែមរូបភាព',
        venueTitle: 'ទីតាំងកម្មវិធី',
        venueSub: 'ព័ត៌មានលម្អិតនៅខាងក្រោម',
        venueName: '[ ឈ្មោះទីតាំង ]',
        venueAddress: '[ អាសយដ្ឋានពេញលេញ នឹងបំពេញនៅពេលក្រោយ ]<br>ថ្ងៃទី ២៩ ខែមករា ឆ្នាំ២០២៧',
        venueNote: 'ព័ត៌មានបណ្ដោះអាសន្ន — សូមកែប្រែពេលក្រោយ',
        mapLink: 'មើលក្នុង Google Maps ↗',
        giftTitle: 'ចំណងដៃអំណោយ',
        giftSub: 'ជូនពរជាព័ត៌មានសម្រាប់ចង់ជូនអំណោយពីចម្ងាយ',
        giftBank: '[ ឈ្មោះធនាគារ ]',
        giftAccount: 'លេខគណនី: [ ០០០ ០០០ ០០០ ]<br>ឈ្មោះម្ចាស់គណនី: [ Pheng / Amara ]',
        giftNote: 'ព័ត៌មានបណ្ដោះអាសន្ន — សូមកែប្រែពេលក្រោយ',
        gbTitle: 'ផ្ដល់ដំណឹងជូនពរ',
        gbSub: 'សរសេរសារជូនពរខ្លីៗមួយឲ្យគូរស្នេហ៍',
        gbNamePh: 'ឈ្មោះរបស់អ្នក',
        gbMessagePh: 'សរសេរសារជូនពរ...',
        gbSend: 'ផ្ញើរសារ',
        gbNote: 'សារនឹងបាត់ពេលបើកគេហទំព័រឡើងវិញ ព្រោះមិនទាន់មានទិន្នន័យផ្ទុកជាអចិន្ត្រៃយ៍',
        footerNote: 'សូមអរគុណដែលបានចែករំលែកសេចក្តីរីករាយជាមួយយើងខ្ញុំ',
        fabLanguage: 'ភាសា', fabMusicOn: 'បើកភ្លេង', fabMusicOff: 'បិទភ្លេង',
        fabRsvp: 'RSVP', fabCalendar: 'ជូនដំណឹង', fabSchedule: 'កម្មវិធី',
        fabGallery: 'រូបថត', fabGift: 'ចំណងដៃ', fabGuestbook: 'ផ្ដល់មតិ',
        rsvpSub: 'សូមប្រាប់យើងខ្ញុំដឹងថាតើអ្នកអាចចូលរួមបានទេ',
        rsvpNamePh: 'ឈ្មោះភ្ញៀវ',
        rsvpYes: 'នឹងចូលរួម',
        rsvpNo: 'សូមអភ័យទោស មិនអាចចូលរួមបានទេ',
        rsvpGuestsPh: 'ចំនួនភ្ញៀវ',
        rsvpSubmit: 'បញ្ជាក់ចម្លើយ',
        rsvpThanksYes: (name) => `សូមអរគុណ ${name}! យើងខ្ញុំរង់ចាំជួបអ្នក 🌸`,
        rsvpThanksNo: (name) => `សូមអរគុណ ${name} ដែលបានឆ្លើយតប។`,
        toastLanguage: 'កំពុងបង្ហាញជាភាសាខ្មែរ',
        toastMusicMissing: 'សូមបញ្ចូលឯកសារតន្ត្រីរបស់អ្នកនៅក្នុងកូដសិន (bgm.src) ជាមុនសិន',
        toastGuestbook: 'អរគុណសម្រាប់សាររបស់អ្នក!',
        calendarTitle: 'អាពាហ៍ពិពាហ៍ Pheng & Amara',
        calendarDetails: 'ពិធីមង្គលការរបស់ Pheng និង Amara',
        modalClose: 'បិទ',
        fabToggleLabel: 'បើក/បិទម៉ឺនុយ'
    },
    en: {
        heroTitle: 'Looking At Our Love',
        groomLabel: 'BF',
        groomName: 'Pheng',
        brideLabel: 'GF',
        brideName: 'Amara',
        dateLine: 'January 09, 2025',
        inviteTitle: "You're Invited",
        inviteBody: 'Please join us as our honored guest, as we celebrate our loving day together.',
        countdownTitle: 'count forward',
        countdownSub: 'Counting down to our special day together',
        labelDays: 'Days', labelHours: 'Hours', labelMins: 'Mins', labelSecs: 'Secs',
        galleryTitle: 'Our Photos',
        gallerySub: 'Space for adding your photos later',
        galleryTile: 'Add Photo',
        venueTitle: 'Venue',
        venueSub: 'Details below',
        venueName: '[ Venue Name ]',
        venueAddress: '[ Full address to be added later ]<br>January 29, 2027',
        venueNote: 'Placeholder info — edit later',
        mapLink: 'View in Google Maps ↗',
        giftTitle: 'Gift Registry',
        giftSub: 'Info for sending a gift from afar',
        giftBank: '[ Bank Name ]',
        giftAccount: 'Account No.: [ 000 000 000 ]<br>Account Holder: [ Pheng / Amara ]',
        giftNote: 'Placeholder info — edit later',
        gbTitle: 'Leave a Wish',
        gbSub: 'Write a short message for the couple',
        gbNamePh: 'Your name',
        gbMessagePh: 'Write your wishes...',
        gbSend: 'Send',
        gbNote: 'Messages disappear on reload since there is no permanent storage yet',
        footerNote: 'Thank you for sharing this joy with us',
        fabLanguage: 'Language', fabMusicOn: 'Play Music', fabMusicOff: 'Pause Music',
        fabRsvp: 'RSVP', fabCalendar: 'Add to Calendar', fabSchedule: 'Schedule',
        fabGallery: 'Photos', fabGift: 'Gift', fabGuestbook: 'Guestbook',
        rsvpSub: "Let us know if you'll be able to join",
        rsvpNamePh: 'Guest name',
        rsvpYes: "I'll be there",
        rsvpNo: "Sorry, can't make it",
        rsvpGuestsPh: 'Number of guests',
        rsvpSubmit: 'Confirm response',
        rsvpThanksYes: (name) => `Thank you, ${name}! We can't wait to see you 🌸`,
        rsvpThanksNo: (name) => `Thank you for letting us know, ${name}.`,
        toastLanguage: 'Now showing in English',
        toastMusicMissing: 'Add your own music file to bgm.src in the code first',
        toastGuestbook: 'Thanks for your message!',
        calendarTitle: 'Wedding of Pheng & Amara',
        calendarDetails: 'Wedding celebration of Pheng and Amara',
        modalClose: 'Close',
        fabToggleLabel: 'Open/close menu'
    }
};

let currentLang = 'km';

function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.body.classList.toggle('lang-en', lang === 'en');
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang][key] !== undefined) {
            el.placeholder = translations[lang][key];
        }
    });
    musicLabel.textContent = musicPlaying ? translations[lang].fabMusicOff : translations[lang].fabMusicOn;
    renderGallery(lang);
}

function toggleLanguage() {
    currentLang = currentLang === 'km' ? 'en' : 'km';
    applyTranslations(currentLang);
    showToast(translations[currentLang].toastLanguage);
}
// ---------- Gallery ----------
const photos = [
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '9.jpg',

];

const grid = document.getElementById('gallery');
function renderGallery(lang) {
    grid.innerHTML = '';
    photos.forEach((src, i) => {
        const tile = document.createElement('div');
        tile.className = 'gallery-tile has-photo';
        tile.innerHTML = `<img src="${src}" alt="Photo ${i + 1}" loading="lazy">`;
        grid.appendChild(tile);
    });
}

// // ---------- Countdown to 2027-01-29 00:00 local time ----------
// const target = new Date('2027-01-29T00:00:00');
// function toKhmerDigits(n) {
//     const km = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
//     return String(n).split('').map(d => km[d] ?? d).join('');
// }
// function updateCountdown() {
//     const now = new Date();
//     let diff = target - now;
//     if (diff < 0) diff = 0;
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const mins = Math.floor((diff / (1000 * 60)) % 60);
//     const secs = Math.floor((diff / 1000) % 60);
//     const fmt = (n) => currentLang === 'km' ? toKhmerDigits(n) : String(n);
//     document.getElementById('cd-days').textContent = fmt(days);
//     document.getElementById('cd-hours').textContent = fmt(String(hours).padStart(2, '0'));
//     document.getElementById('cd-mins').textContent = fmt(String(mins).padStart(2, '0'));
//     document.getElementById('cd-secs').textContent = fmt(String(secs).padStart(2, '0'));
// }
// updateCountdown();
// setInterval(updateCountdown, 1000);

// ---------- Count up from 2025-01-09 00:00 local time ----------
const startDate = new Date('2025-01-09T00:00:00');

function toKhmerDigits(n) {
    const km = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    return String(n).split('').map(d => km[d] ?? d).join('');
}

function updateCountdown() {
    const now = new Date();
    let diff = now - startDate; // elapsed time since start
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const fmt = (n) => currentLang === 'km' ? toKhmerDigits(n) : String(n);

    document.getElementById('cd-days').textContent = fmt(days);
    document.getElementById('cd-hours').textContent = fmt(String(hours).padStart(2, '0'));
    document.getElementById('cd-mins').textContent = fmt(String(mins).padStart(2, '0'));
    document.getElementById('cd-secs').textContent = fmt(String(secs).padStart(2, '0'));
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ---------- Toast helper ----------
let toastTimer;
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

// ---------- Floating menu ----------
const fabRoot = document.querySelector('.fab-root');
const fabToggle = document.getElementById('fab-toggle');
const fabOverlay = document.getElementById('fab-overlay');

function closeFab() {
    fabRoot.classList.remove('open');
    fabOverlay.classList.remove('show');
}
fabToggle.addEventListener('click', () => {
    const open = fabRoot.classList.toggle('open');
    fabOverlay.classList.toggle('show', open);
});
fabOverlay.addEventListener('click', closeFab);

document.querySelectorAll('.fab-item').forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        handleFabAction(action);
        closeFab();
    });
});

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleFabAction(action) {
    switch (action) {
        case 'language':
            toggleLanguage();
            break;
        case 'music':
            toggleMusic();
            break;
        case 'rsvp':
            openRsvp();
            break;
        case 'calendar':
            addToCalendar();
            break;
        case 'schedule':
            scrollToSection('section-schedule');
            break;
        case 'gallery':
            scrollToSection('section-gallery');
            break;
        case 'gift':
            scrollToSection('section-gift');
            break;
        case 'guestbook':
            scrollToSection('section-guestbook');
            break;
    }
}

// ---------- Music toggle ----------
const bgm = document.getElementById('bgm');
const musicLabel = document.getElementById('music-label');
let musicPlaying = false;
function toggleMusic() {
    if (!bgm.src) {
        showToast(translations[currentLang].toastMusicMissing);
        return;
    }
    if (musicPlaying) {
        bgm.pause();
        musicLabel.textContent = translations[currentLang].fabMusicOn;
    } else {
        bgm.play();
        musicLabel.textContent = translations[currentLang].fabMusicOff;
    }
    musicPlaying = !musicPlaying;
}

// ---------- Add to calendar ----------
function addToCalendar() {
    const start = '20270129T000000';
    const end = '20270129T230000';
    const text = encodeURIComponent(translations[currentLang].calendarTitle);
    const details = encodeURIComponent(translations[currentLang].calendarDetails);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}`;
    window.open(url, '_blank');
}

// ---------- RSVP modal ----------
const rsvpOverlay = document.getElementById('rsvp-overlay');
const rsvpClose = document.getElementById('rsvp-close');
const rsvpForm = document.getElementById('rsvp-form');
const rsvpThanks = document.getElementById('rsvp-thanks');

function openRsvp() {
    rsvpOverlay.classList.add('show');
}
function closeRsvp() {
    rsvpOverlay.classList.remove('show');
}
rsvpClose.addEventListener('click', closeRsvp);
rsvpOverlay.addEventListener('click', (e) => {
    if (e.target === rsvpOverlay) closeRsvp();
});
rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('rsvp-name').value.trim();
    const attending = document.getElementById('rsvp-attending').value;
    rsvpThanks.textContent = attending === 'yes'
        ? translations[currentLang].rsvpThanksYes(name)
        : translations[currentLang].rsvpThanksNo(name);
    rsvpForm.reset();
    setTimeout(closeRsvp, 1800);
});

// ---------- Guestbook (client-side only, resets on reload) ----------
const gbForm = document.getElementById('guestbook-form');
const gbList = document.getElementById('guestbook-list');
gbForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('gb-name').value.trim();
    const message = document.getElementById('gb-message').value.trim();
    const entry = document.createElement('div');
    entry.className = 'gb-entry';
    entry.innerHTML = `<p class="gb-name"></p><p class="gb-message"></p>`;
    entry.querySelector('.gb-name').textContent = name;
    entry.querySelector('.gb-message').textContent = message;
    gbList.prepend(entry);
    gbForm.reset();
    showToast(translations[currentLang].toastGuestbook);
});

// ---------- Init ----------
renderGallery(currentLang);