import { AppendElements } from "../utils/AppendElements.js"

export function Main() {
    const main = document.createElement('main')

    main.setAttribute('class', 'container conteudo')
    main.setAttribute('id', 'conteudo')

    const article = document.createElement('article')

    AppendElements(main, article)

    return main
}