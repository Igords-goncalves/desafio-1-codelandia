import { Header } from "./components/Header.js";
import { Main } from './components/Main.js'

const root = document.querySelector("body")

root.append(Header())
root.append(Main())