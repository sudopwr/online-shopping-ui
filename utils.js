const USER_TOKEN_KEY = 'USER_TOKEN_KEY'
const LOGGED_IN_USER_KEY = 'LOGGED_IN_USER'
const LOGIN_NAV_ITEM_KEY = 'login-nav-item'
const PRODUCTS_NAV_ITEM_KEY = 'products-nav-item'
const LOGOUT_NAV_ITEM_KEY = 'logout-nav-item'
const ORDERS_NAV_ITEM_KEY = 'orders-nav-item'
const USER_DETAILS_NAV_ITEM_KEY = 'user-details-nav-item'
const USER_ROLE = 'role'
const EDIT_PRODUCT = 'EDIT_PRODUCT'

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
        if (getValueFromLocalStorage(USER_ROLE) === "admin") {
            setDisplayProperty(PRODUCTS_NAV_ITEM_KEY, 'block')
        } else {
            setDisplayProperty(PRODUCTS_NAV_ITEM_KEY, 'none')
        }
        setDisplayProperty(LOGOUT_NAV_ITEM_KEY, 'block')
        setDisplayProperty(ORDERS_NAV_ITEM_KEY, 'block')
        setDisplayProperty(USER_DETAILS_NAV_ITEM_KEY, 'block')
        const user = JSON.parse(getValueFromLocalStorage(LOGGED_IN_USER_KEY))
        document.getElementById("user-image").src = user.image
        document.getElementById("user-name").innerText = user.name
    } else {
        setDisplayProperty(LOGIN_NAV_ITEM_KEY, 'block')
        setDisplayProperty(PRODUCTS_NAV_ITEM_KEY, 'none')
        setDisplayProperty(LOGOUT_NAV_ITEM_KEY, 'none')
        setDisplayProperty(ORDERS_NAV_ITEM_KEY, 'none')
        setDisplayProperty(USER_DETAILS_NAV_ITEM_KEY, 'none')
    }
}

const getLogout = () => {
    clearValueInLocalStorage(USER_TOKEN_KEY)
    clearValueInLocalStorage(USER_ROLE)
    window.location = "/login.html"
}

const decodeJwtResponse = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

const getQueryStringParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(key)
}

onPageLoadNavSettings()