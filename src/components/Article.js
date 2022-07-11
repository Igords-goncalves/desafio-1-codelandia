import { AppendElements } from "../utils/AppendElements.js";

export function Article(date, title, news, links, shortLink) {
    const article = document.createElement("article");

    const div = document.createElement("div");
    div.setAttribute("class", "cabecalho");

    AppendElements(article, div);

    const p = document.createElement("p");
    p.setAttribute("class", "date");

    const icon = document.createElement("i");
    icon.setAttribute("id", "icon");
    icon.setAttribute("class", "far fa-heart");

    AppendElements(div, p);
    p.insertAdjacentText("beforeend", date);

    AppendElements(div, icon);

    const span = document.createElement("span");

    AppendElements(article, span);

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "title");
    h2.insertAdjacentText("beforeend", title);
    
    const pText = document.createElement("p");
    pText.setAttribute("class", "description");

    AppendElements(span, h2);
    AppendElements(span, pText);
    pText.insertAdjacentText("beforeend", news);

    const link = document.createElement("a");
    link.setAttribute("class", "font");
    link.setAttribute("href", links);
    link.setAttribute("target", "Blank");
    link.insertAdjacentText("beforeend", shortLink);
    AppendElements(span, link);

    return article;
}
