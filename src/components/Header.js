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

    aMenu1.insertAdjacentHTML("beforeend", 'Codelândia')
    aMenu2.insertAdjacentHTML("beforeend", 'Blog')

    const input = document.createElement("input")
    input.setAttribute('class', 'txtBusca')
    input.setAttribute('id', 'txtBusca')
    input.setAttribute('name', 'pesquisar')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'Pesquisar no Blog')

    nav.appendChild(input)

    return header
}