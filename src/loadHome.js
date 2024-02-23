const loadHomePage = () => {
    const container = document.querySelector('.container')
    const img = document.createElement('div')
    const shadow = document.createElement('div')
    const mainText = document.createElement('div')
    const text = document.createElement('div')
    
    container.textContent = ''

    img.classList.add('img')
    shadow.classList.add('shadow')
    mainText.classList.add('main-text')
    text.classList.add('text')
    
    mainText.textContent = 'Bean and Lounge'
    text.textContent = 'Best coffee in the whole city'

    container.appendChild(img)
    img.appendChild(shadow)
    img.appendChild(mainText)
    img.appendChild(text)
}

export default loadHomePage