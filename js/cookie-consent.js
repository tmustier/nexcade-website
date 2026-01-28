// Cookie consent management
(function () {
    const banner = document.getElementById('cookieBanner');
    const modal = document.getElementById('cookieModal');

    if (!banner || !modal) return;

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
    }

    function showCookieBanner() {
        banner.classList.add('show');
    }

    function hideCookieBanner() {
        banner.classList.remove('show');
    }

    function showCookieSettings() {
        modal.classList.add('show');
    }

    function hideCookieSettings() {
        modal.classList.remove('show');
    }

    function acceptAllCookies() {
        setCookie('cookie_consent', 'all', 365);
        hideCookieBanner();
        hideCookieSettings();
    }

    function savePreferences() {
        const functional = document.getElementById('functionalCookies').checked;
        const analytics = document.getElementById('analyticsCookies').checked;
        const prefs = { functional, analytics };
        setCookie('cookie_consent', JSON.stringify(prefs), 365);
        hideCookieBanner();
        hideCookieSettings();
    }

    window.showCookieSettings = showCookieSettings;
    window.hideCookieSettings = hideCookieSettings;
    window.acceptAllCookies = acceptAllCookies;
    window.savePreferences = savePreferences;

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideCookieSettings();
        }
    });

    if (!getCookie('cookie_consent')) {
        showCookieBanner();
    }
})();
