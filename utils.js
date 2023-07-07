const USER_TOKEN_KEY = "USER_TOKEN_KEY"

const setValueInLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}

const getValueInLocalStorage = (key) => {
    localStorage.getItem(key)
}

const clearValueInLocalStorage = (key) => {
    localStorage.setItem(key, '')
}

const hideNavItems = () => {
    document.getElementById("login-nav-item").style.display = 'none'
}