export function Header() {
    const header = document.createElement('header');

    const divContainer = document.createElement('div')

    const divNavegation = document.createElement('div')

    header.appendChild(divContainer).setAttribute('class', 'container')

    divContainer.appendChild(divNavegation).setAttribute('class', 'navegacao')

    const nav = document.createElement('nav')

    divNavegation.appendChild(nav)

    const aMenu1 = document.createElement('a')
    const aMenu2 = document.createElement('a')

    nav.appendChild(aMenu1).setAttribute('href', '#')
    nav.appendChild(aMenu2).setAttribute('href', '#')

    return header
}