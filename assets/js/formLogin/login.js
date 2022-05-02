import { allUsersData } from "./usersDatabase.js"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const TOASTSUCCESS = { title: 'Success', message: 'Đăng nhập thành công', type: 'success' }
const TOASTERROR = { title: 'Error', message: 'Đăng nhập thất bại', type: 'error' }



const main = $('#toast')

const profile = $('#head-right')
const profileRespone = $('.my-account')

const avatar = $('.avatar')
const avatarRespone = $('.avatar-responsive')


const loginForm = $('.login')
const formLogin = $('.form-login')
const formRegister = $('.form-register')


const loginClose = $('.form-login__close')
const loginGmail = $('.form-login__gmail')
const loginPassword = $('.form-login__password')
const loginButton = $('.form-login__button')

const registerName = $('.form-register__name')
const registerGmail = $('.form-register__gmail')
const registerPassword = $('.form-register__password')
const registerButton = $('.form-register__button')

const registerClose = $('.form-register__close')

const switchToRegisterBtn = $('.form-login__switch-register')
const switchToLoginBtn = $('.form-register__switch-login')

getItemFromLocal()


avatar.onclick = () => {
    loginForm.style.display = 'flex'
}
avatarRespone.onclick = () => {
    loginForm.style.display = 'flex'
}

loginClose.onclick = () => {
    loginForm.style.display = 'none'
}

registerClose.onclick = () => {
    loginForm.style.display = 'none'
}

loginButton.onclick = (e) => {
    e.preventDefault()
    const userLogin = {
        gmail: loginGmail.value,
        password: loginPassword.value
    }
    checkUserLogin(userLogin)
}
registerButton.onclick = (e) => {
    e.preventDefault()
    const userRegister = {
        id: allUsersData.length + 1,
        name: registerName.value,
        gmail: registerGmail.value,
        password: registerPassword.value,
        avatar: './assets/img/user/user-avatar.jpg'
    }
    allUsersData.push(userRegister)
    registerName.value = ''
    registerGmail.value = ''
    registerPassword.value = ''
    switchToLoginBtn.click()
    registerClose.click()
    savetoLocalStorage(userRegister)
}

switchToRegisterBtn.onclick = () => {
    formLogin.style.display = 'none'
    formRegister.style.display = 'flex'
}

switchToLoginBtn.onclick = () => {
    formLogin.style.display = 'flex'
    formRegister.style.display = 'none'
}

function checkUserLogin(userLogin) {
    const userSuccess = allUsersData.find((userData) => {
        return userLogin.gmail === userData.gmail
            && userLogin.password === userData.password

    })
    if (!!userSuccess === false) {
        loginFail()
    } else {
        loginSuccess(userSuccess)
    }
}

function loginSuccess(user) {

    toast(TOASTSUCCESS)
    loginForm.style.display = 'none'
    loginGmail.value = ''
    loginPassword.value = ''


    profile.innerHTML = `
        <img src="${user.avatar}" alt=""
            style="width: 26px; height: 26px; border-radius: 50%;">
        <p>${user.name}</p>
        <i class="fa-solid fa-caret-down ti-down">
            <div class="profile">
                <div class="profile__user">Profile</div>
                <div class="profile__logout">Logout</div>
            </div>
        </i>
    `
    profileRespone.innerHTML = `
        <img src="${user.avatar}">
        <div class="personal-account">${user.name}</div>
        <img class="personal-logout" src="./assets/img/main/logout.png" style="width: 30px; height: 30px;">
    `

    $('.profile__logout').onclick = () => {
        location.reload()
    }
    $('.personal-logout').onclick = () => {
        location.reload()
    }
}

function loginFail() {
    toast(TOASTERROR)
}

function savetoLocalStorage(data) {
    const dataString = JSON.stringify(data)
    localStorage.setItem(data.id, dataString)
}

function getItemFromLocal() {
    for (let i = 0; i < localStorage.length; i++) {
        allUsersData.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
}

function toast({ title = '', message = '', type = '' }) {
    if (main) {
        const toast = document.createElement('div')

        //Auto remove
        main.appendChild(toast)
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast)
        }, 3000)

        //handle remove
        toast.onclick = (e) => {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
        }

        const icon = icons[type]


        toast.classList.add('toast', `toast--${type}`)

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `


    }
}

