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
    let html:string = ``
    html+= `<ul>`
    
        html+= `<li>${jeux.nom}</li>
        <li>${jeux.genre}</li>
        <li>${jeux.editeur}</li>
        <li>${jeux.pegi}</li>
        <li>${jeux.anneeSortie}</li>
        <li>${jeux.multijoueur}</li>
        <li>${jeux.enLigne}</li>
        <li>${jeux.image}</li>`
    
    html+= `</ul>`
    console.log(html);
    
    
}
ajoutUnJeux(tableauJeux[1])


document.querySelector("form")?.addEventListener("submit",function (e:Event) {
    e.preventDefault()

})