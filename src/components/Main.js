import { Article } from "./Article.js"
import { AppendElements } from "../utils/AppendElements.js"

export function Main() {
    const main = document.createElement('main')

    main.setAttribute('class', 'container conteudo')
    main.setAttribute('id', 'conteudo')

    main.appendChild(Article())

    return main
}