function setTheme(theme) {
    const root = document.documentElement;
    const themeStyleLink = document.getElementById('theme-style');
    const themeStyleLinkAttr = themeStyleLink.getAttribute('href');
    if (theme === 'light') {
        const updatedThemeStyleLinkAttr = themeStyleLinkAttr.replace('dark', 'light');
        themeStyleLink.setAttribute('href', updatedThemeStyleLinkAttr);
        localStorage.setItem('theme', 'light');
    } else if (theme === 'dark') {
        const updatedThemeStyleLinkAttr = themeStyleLinkAttr.replace('light', 'dark');
        themeStyleLink.setAttribute('href', updatedThemeStyleLinkAttr);
        localStorage.setItem('theme', 'dark');
    } else if (theme === 'system') {
        const updatedThemeStyleLinkAttr = prefersDarkColorScheme()?themeStyleLinkAttr.replace('light', 'dark'):themeStyleLinkAttr.replace('dark', 'light');
        themeStyleLink.setAttribute('href', updatedThemeStyleLinkAttr);
        localStorage.removeItem('theme');
    }
}

function loadStylesheet(stylesheetPath, theme, root) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = stylesheetPath;
    link.setAttribute('data-theme-stylesheet', theme);
    document.head.appendChild(link);
}

function prefersDarkColorScheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('system');
}

const themeButtons = document.querySelectorAll('[data-type="theme-button"]');

Array.from(themeButtons).forEach((button) => {
    button.addEventListener('click', function (event) {
        const selectedTheme = event.target.dataset.theme;
        setTheme(selectedTheme);
    });
});
