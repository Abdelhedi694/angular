import { jeux } from "./creationTableauEnDur"
import "./style.css"
import {tableauJeux} from "./data/games.data"


function ajoutUnJeux(jeux:jeux) {
    let ul:HTMLUListElement = document.createElement("ul")
    let supp:HTMLButtonElement = document.createElement("button")
    supp.innerText = "supprimer"
       ul.innerHTML += `<li>${jeux.nom}</li>
        <li>${jeux.genre}</li>
        <li>${jeux.editeur}</li>
        <li>${jeux.pegi}</li>
        <li>${jeux.anneeSortie}</li>
        <li>${jeux.multijoueur}</li>
        <li>${jeux.enLigne}</li>
        <li><img src="${jeux.image}"></img></li>`
    ul.innerHTML+= `</ul>`
    
    
    let section = document.querySelector("#listeJeux") as HTMLTableSectionElement;
    section.append(ul)
    ul.append(supp)
    supp.addEventListener("click", function supprimer() {
        ul.remove()
        tableauJeux.splice(tableauJeux.indexOf(jeux),1)
        console.log(tableauJeux);
        
    })
}

function ajoutJeuxTableau(tableau:jeux[]) {
    for (const jeu of tableau) {
        ajoutUnJeux(jeu)
    }
    
}
ajoutJeuxTableau(tableauJeux)


document.querySelector("form")?.addEventListener("submit",function (e:Event) {
    e.preventDefault()
    let newGame = new jeux(this.nom.value, this.genre.value, this.editeur.value, this.pegi.value, this.date.value, this.multi.value, this.online.value, this.url.value)
    
    tableauJeux.push(newGame)
    
})