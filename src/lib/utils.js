
export const initCustomTheme = () => {
    const tmp = sessionStorage.getItem("custom-display-mode")
    return parseInt(tmp) || 0
}

export const setCustomTheme = (mode) => {
    sessionStorage.setItem("custom-display-mode", mode)
}