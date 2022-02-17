
export const initCustomTheme = () => {
    const tmp = sessionStorage.getItem("custom-display-mode")
    return parseInt(tmp) || 0
}

export const setCustomTheme = (mode) => {
    sessionStorage.setItem("custom-display-mode", mode)
}

export const saveLoginCredentials = (data, isRemember = false) => {
    sessionStorage.setItem("login", JSON.stringify(data))
    if(isRemember) {
        localStorage.setItem("login", JSON.stringify(data))
    } else {
        localStorage.removeItem("login")
    }
}

export const getLoginCredentials = (isLocal = false) => {
    const tmp = isLocal ? localStorage.getItem("login") : sessionStorage.getItem("login")
    return JSON.parse(tmp) || null
}