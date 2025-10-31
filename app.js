// Mobile nav toggle
const navToggle = document.querySelectorAll('.nav-toggle');
const navList = document.getElementById('primary-navigation');

function toggleNav(e) {
    if (!navList) return;
    const expanded = navToggle[0].getAttribute('aria-expanded') === 'true';
    navToggle.forEach(btn => btn.setAttribute('aria-expanded', String(!expanded)));
    navList.classList.toggle('show');
}

navToggle.forEach(btn => btn.addEventListener('click', toggleNav));

// Close nav when clicking a link (mobile)
if (navList) {
    navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        navList.classList.remove('show');
        navToggle.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
    }));
}

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        if (href.startsWith('#')) {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Optional: small enhancement for the floating phone button on non-telephony devices
const fab = document.querySelector('.fab');
if (fab && !('ontouchstart' in window) && !navigator.userAgent.match(/Mobile|Android|iPhone|iPad/)) {
    fab.setAttribute('title', 'Κάλεσέ με: 6971234567');
}