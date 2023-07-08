const USER_TOKEN_KEY = 'USER_TOKEN_KEY'
const LOGIN_NAV_ITEM_KEY = 'login-nav-item'
const PRODUCTS_NAV_ITEM_KEY = 'products-nav-item'
const LOGOUT_NAV_ITEM_KEY = 'logout-nav-item'

const setValueInLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}

const getValueFromLocalStorage = (key) => {
    return localStorage.getItem(key)
}

const clearValueInLocalStorage = (key) => {
    localStorage.removeItem(key)
}

const setDisplayProperty = (id, value) => {
    if (document.getElementById(id)) {
        document.getElementById(id).style.display = value
    }
}

const onPageLoadNavSettings = () => {
    if (getValueFromLocalStorage(USER_TOKEN_KEY)) {
        setDisplayProperty(LOGIN_NAV_ITEM_KEY, 'none')
        setDisplayProperty(PRODUCTS_NAV_ITEM_KEY, 'block')
        setDisplayProperty(LOGOUT_NAV_ITEM_KEY, 'block')
    } else {
        setDisplayProperty(LOGIN_NAV_ITEM_KEY, 'block')
        setDisplayProperty(PRODUCTS_NAV_ITEM_KEY, 'none')
        setDisplayProperty(LOGOUT_NAV_ITEM_KEY, 'none')
    }
}

const getLogout = () => {
    clearValueInLocalStorage(USER_TOKEN_KEY)
    window.location = "/"
}

onPageLoadNavSettings()