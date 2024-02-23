import loadHomePage from './loadHome.js';
import loadMenuPage from './loadMenu.js';
import loadAboutPage from './loadAbout.js';

const body = document.querySelector('body')
const header = document.createElement('header')
const nav = document.createElement('nav')
const btnHome = document.createElement('button')
const btnMenu = document.createElement('button')
const btnAbout = document.createElement('button')
const container = document.createElement('div')

header.classList.add('header')
nav.classList.add('nav')
btnHome.classList.add('btn')
btnMenu.classList.add('btn')
btnAbout.classList.add('btn')
container.classList.add('container')

btnHome.textContent = 'Home'
btnMenu.textContent = 'Menu'
btnAbout.textContent = 'About'

body.appendChild(header)
header.appendChild(nav)
nav.appendChild(btnHome)
nav.appendChild(btnMenu)
nav.appendChild(btnAbout)
body.appendChild(container)

loadHomePage()

btnHome.addEventListener('click', loadHomePage)
btnMenu.addEventListener('click', loadMenuPage)
btnAbout.addEventListener('click', loadAboutPage)