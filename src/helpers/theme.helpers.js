const getTheme = () => {
    let preferredTheme = 'light';
    let theme = window.localStorage.getItem("app-theme");

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        preferredTheme = 'dark';
    }

    setTheme(theme || preferredTheme);
    return theme || preferredTheme;
};

const setTheme = (value = "light") => {
    window.localStorage.setItem("app-theme", value);
};

export { setTheme, getTheme };
