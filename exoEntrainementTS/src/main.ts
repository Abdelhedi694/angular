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
    let jeuxUser:jeux = {
    nom : this.nom.value,
    genre : this.genre.value,
    editeur : this.editeur.value,
    pegi : this.pegi.value,
    anneeSortie : this.date.value,
    multijoueur : this.multi.value,
    enLigne : this.online.value,
    image : this.url.value,
    }
    tableauJeux.push(jeuxUser)
    ajoutUnJeux(jeuxUser)
    
})