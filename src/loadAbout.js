const loadAboutPage = () => {
    const container = document.querySelector('.container')
    const aboutInfo = document.createElement('div')
    const aboutPhone = document.createElement('div')
    const aboutEmail = document.createElement('div')

    container.textContent = ''

    aboutInfo.classList.add('about-info')
    aboutPhone.classList.add('about-text')
    aboutEmail.classList.add('about-text')

    aboutPhone.textContent = 'Phone: 000 000 000'
    aboutEmail.textContent = 'Email: email@gmail.com'

    container.appendChild(aboutInfo)
    aboutInfo.appendChild(aboutPhone)
    aboutInfo.appendChild(aboutEmail)
}

export default loadAboutPage