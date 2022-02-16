
export const initCustomTheme = () => {
    const tmp = sessionStorage.getItem("custom-display-mode")
    return parseInt(tmp) || 0
}

export const setCustomTheme = (mode) => {
    sessionStorage.setItem("custom-display-mode", mode)
}

export const saveLoginCredentials = (data) => {
    sessionStorage.setItem("login", JSON.stringify(data))
}

export const getLoginCredentials = () => {
    const tmp = sessionStorage.getItem("login")
    return JSON.parse(tmp) || null
}