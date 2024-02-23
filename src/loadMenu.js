const loadMenuPage = () => {
    const container = document.querySelector('.container')
    const menuContainer = document.createElement('div')
    const menuItemEspresso = document.createElement('div')
    const menuItemAmericano = document.createElement('div')
    const menuItemLatte = document.createElement('div')
    const menuItemCappuccino = document.createElement('div')
    const menuItemEspressoText = document.createElement('div')
    const menuItemAmericanoText = document.createElement('div')
    const menuItemLatteText = document.createElement('div')
    const menuItemCappuccinoText = document.createElement('div')
    const menuItemEspressoPrice = document.createElement('div')
    const menuItemAmericanoPrice = document.createElement('div')
    const menuItemLattePrice = document.createElement('div')
    const menuItemCappuccinoPrice = document.createElement('div')
    
    container.textContent = ''

    menuContainer.classList.add('menu-container')
    menuItemEspresso.classList.add('menu-item')
    menuItemAmericano.classList.add('menu-item')
    menuItemLatte.classList.add('menu-item')
    menuItemCappuccino.classList.add('menu-item')
    menuItemEspressoText.classList.add('item-text')
    menuItemAmericanoText.classList.add('item-text')
    menuItemLatteText.classList.add('item-text')
    menuItemCappuccinoText.classList.add('item-text')
    menuItemEspressoPrice.classList.add('item-prize')
    menuItemAmericanoPrice.classList.add('item-prize')
    menuItemLattePrice.classList.add('item-prize')
    menuItemCappuccinoPrice.classList.add('item-prize')

    menuItemEspressoText.textContent = 'Espresso'
    menuItemEspressoPrice.textContent = '2$'
    menuItemAmericanoText.textContent = 'Americano'
    menuItemAmericanoPrice.textContent = '3$'
    menuItemLatteText.textContent = 'Latte'
    menuItemLattePrice.textContent = '4$'
    menuItemCappuccinoText.textContent = 'Cappuccino'
    menuItemCappuccinoPrice.textContent = '5$'

    container.appendChild(menuContainer)
    menuContainer.appendChild(menuItemEspresso)
    menuContainer.appendChild(menuItemAmericano)
    menuContainer.appendChild(menuItemLatte)
    menuContainer.appendChild(menuItemCappuccino)
    menuItemEspresso.appendChild(menuItemEspressoText)
    menuItemEspresso.appendChild(menuItemEspressoPrice)
    menuItemAmericano.appendChild(menuItemAmericanoText)
    menuItemAmericano.appendChild(menuItemAmericanoPrice)
    menuItemLatte.appendChild(menuItemLatteText)
    menuItemLatte.appendChild(menuItemLattePrice)
    menuItemCappuccino.appendChild(menuItemCappuccinoText)
    menuItemCappuccino.appendChild(menuItemCappuccinoPrice)
}

export default loadMenuPage