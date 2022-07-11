import { Article } from "./Article.js"
import { titles, news, links, shortLink, headerDate } from "../utils/NewsAndLinks.js"

export function Main() {
    const main = document.createElement('main')

    main.setAttribute('class', 'container conteudo')
    main.setAttribute('id', 'conteudo')

    main.appendChild(
        Article(
            headerDate.date1,
            titles.title1,
            news.news1,
            links.link1,
            shortLink.shortLink1
        )
    )

    main.appendChild(
        Article(
            headerDate.date2,
            titles.title2,
            news.news2,
            links.link2,
            shortLink.shortLink2
        )
    )

    main.appendChild(
        Article(
            headerDate.date3,
            titles.title3,
            news.news3,
            links.link3,
            shortLink.shortLink3
        )
    )

    main.appendChild(
        Article(
            headerDate.date4,
            titles.title4,
            news.news4,
            links.link4,
            shortLink.shortLink4
        )
    )
    return main
}