import { Header } from "./components/Header.js";


export function App() {
    const body = document.querySelector("body");

    return body.appendChild(Header())
}
