import { AppendElements } from "../utils/AppendElements.js";
import { links, news, titles } from "../utils/NewsAndLinks.js";

export function Article() {
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
    p.insertAdjacentText("beforeend", "20 de jun, 2021");

    AppendElements(div, icon);

    const span = document.createElement("span");

    AppendElements(article, span);

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "title");
    h2.insertAdjacentText("beforeend", titles.title1);

    const pText = document.createElement("p");
    pText.setAttribute("class", "description");

    AppendElements(span, h2);
    AppendElements(span, pText);
    pText.insertAdjacentText("beforeend", news.news1);

    const link = document.createElement("a");
    link.setAttribute("class", "font");
    link.setAttribute("href", links.link1);
    link.setAttribute("target", "Blank");
    link.insertAdjacentText("beforeend", "jbox.com.br");
    AppendElements(span, link);

    return article;
}
