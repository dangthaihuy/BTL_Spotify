import { allUsersData } from "./usersDatabase.js"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

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

    console.log('dang nhap thanh cong');
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
    console.log('tai khoan hoac mat khau khong dung');
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