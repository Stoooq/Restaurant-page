const loadHomePage = () => {
    const body = document.querySelector('body')
    const container = document.querySelector('.container')
    const shadow = document.createElement('div')
    const mainText = document.createElement('div')
    const text = document.createElement('div')

    container.classList.add('img')
    shadow.classList.add('shadow')
    mainText.classList.add('main-text')
    text.classList.add('text')
    
    mainText.textContent = 'Bean and Lounge'
    text.textContent = 'Best coffee in whole city'

    body.appendChild(container)
    container.appendChild(shadow)
    container.appendChild(mainText)
    container.appendChild(text)
}

export default loadHomePage