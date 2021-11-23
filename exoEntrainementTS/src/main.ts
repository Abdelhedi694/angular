import {tableauJeux} from "./creationTableauEnDur";
import "./style.css"


type jeux = {
    nom : string
    genre : string
    editeur : string
    pegi : number
    anneeSortie : number
    multijoueur : boolean
    enLigne : boolean
    image : URL
}

function ajoutUnJeux(jeux:jeux) {
    let ul:HTMLUListElement = document.createElement("ul")
    
       ul.innerHTML += `<li>${jeux.nom}</li>
        <li>${jeux.genre}</li>
        <li>${jeux.editeur}</li>
        <li>${jeux.pegi}</li>
        <li>${jeux.anneeSortie}</li>
        <li>${jeux.multijoueur}</li>
        <li>${jeux.enLigne}</li>
        <li>${jeux.image}</li>`
    ul.innerHTML+= `</ul>`
    
    
    let section = document.querySelector("#listeJeux") as HTMLTableSectionElement;
    section.append(ul)
}

function ajoutJeuxTableau(tableau:jeux[]) {
    for (const jeu of tableau) {
        ajoutUnJeux(jeu)
    }
    
}
ajoutJeuxTableau(tableauJeux)



document.querySelector("form")?.addEventListener("submit",function (e:Event) {
    e.preventDefault()
    // ajoutJeuxTableau(tableauJeux)
})