const getTheme = () => {
    let theme = window.localStorage.getItem("app-theme");
    return theme || "light";
};

const setTheme = (value = "light") => {
    window.localStorage.setItem("app-theme", value);
};

export { setTheme, getTheme };
