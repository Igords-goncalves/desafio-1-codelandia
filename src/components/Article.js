import { AppendElements } from "../utils/AppendElements.js";

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

    const textTitle = "Kurama morta e Sasuske sem hinegan";
    const h2 = document.createElement("h2");
    h2.setAttribute("class", "title");
    h2.insertAdjacentText("beforeend", textTitle);

    const pText = document.createElement("p");
    pText.setAttribute("class", "description");

    const textNews = `O parceiro de Naruto, Kurama - a 
    raposa de nove caudas, morreu no capítulo 55 do mangá 
    Boruto: Naruto Next Generations devido ao uso excessivo de 
    chakra quando Naruto e Kurama usaram o modo Baryon contra Isshiki Ohtsutsuki..`;
    AppendElements(span, h2);
    AppendElements(span, pText);
    pText.insertAdjacentText("beforeend", textNews);

    const linkUrl = `https://pt.epicdope.com/boruto-cap%C3%ADtulo-55-kurama-est%C3%A1-morto%2C-internautas-n%C3%A3o-est%C3%A3o-felizes/#:~:text=O%20parceiro%20de%20Naruto%2C%20Kurama,modo%20Baryon%20contra%20Isshiki%20Ohtsutsuki.&text=Naruto%20fica%20chocado%20e%20totalmente%20devastado%20pela%20implica%C3%A7%C3%A3o%20de%20Kurama.`;

    const link = document.createElement("a");
    link.setAttribute("class", "font");
    link.setAttribute("href", linkUrl);
    link.setAttribute("target", "Blank");
    link.insertAdjacentText("beforeend", "jbox.com.br");
    AppendElements(span, link);

    return article;
}
