import { Jeux } from "./creationTableauEnDur"
import "./style.css"
import {tableauJeux} from "./data/games.data"
let editMode:boolean = false
console.log(editMode);

function ajoutUnJeux(jeux:Jeux) {
    let ul:HTMLUListElement = document.createElement("ul")
    let supp:HTMLButtonElement = document.createElement("button")
    let modif:HTMLButtonElement = document.createElement("button")
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
    modif.innerText = "modifier"
    ul.append(modif)
    modif.addEventListener("click", function () {
        editMode = true
        let boutonSoumettre = document.querySelector("#soumettre") as HTMLInputElement
        boutonSoumettre.value = "modifier le jeu"
       let name = document.querySelector("#nom") as HTMLInputElement
       name.value = jeux.nom
       let genre = document.querySelector("#genre") as HTMLInputElement
       genre.value = jeux.genre
       let edit = document.querySelector("#editeur") as HTMLInputElement
       edit.value = jeux.editeur
       let peg = document.querySelector("#pegi") as HTMLInputElement
       peg.valueAsNumber = jeux.pegi
       let date = document.querySelector("#date") as HTMLInputElement
       date.valueAsNumber = jeux.anneeSortie
       let multi = document.querySelector("#multi") as HTMLInputElement
       multi.value = jeux.multijoueur.toString()
       let ligne = document.querySelector("#online") as HTMLInputElement
       ligne.value = jeux.enLigne.toString()
       let url = document.querySelector("#url") as HTMLInputElement
       url.value = jeux.image.toString()
       
        document.querySelector("form")?.addEventListener("submit",function () {
            let jeuxModifie = new Jeux(name.value,genre.value,edit.value,peg.valueAsNumber,date.valueAsNumber,multi.value == "Oui",ligne.value == "Oui",new URL(url.value))
            if (JSON.stringify(jeux)!= JSON.stringify(jeuxModifie)) {
                ul.innerHTML = `<li>${name.value}</li>
                <li>${genre.value}</li>
                <li>${edit.value}</li>
                <li>${peg.valueAsNumber}</li>
                <li>${date.valueAsNumber}</li>
                <li>${multi.value == "Oui"}</li>
                <li>${ligne.value == "Oui"}</li>
                <li><img src="${new URL(url.value)}"></img></li>`
                ul.innerHTML+= `</ul>`
                
                tableauJeux.splice(tableauJeux.indexOf(jeux),1)
                tableauJeux.push(jeuxModifie)
                    console.log(tableauJeux);
                 editMode = false   
                 boutonSoumettre.value = "ajouter un jeu"
                 ul.append(supp)
                 ul.append(modif)
                 name.value = ""
                 genre.value = ""
                 edit.value = ""
                 peg.valueAsNumber = 0
                 date.valueAsNumber = 0
                 multi.value = ""
                 ligne.value = ""
                 url.value = ""
                console.log(tableauJeux);
                
                
            }
                
            
           
        })
    })
}

function ajoutJeuxTableau(tableau:Jeux[]) {
    for (const jeu of tableau) {
        ajoutUnJeux(jeu)
    }
    
}


ajoutJeuxTableau(tableauJeux)
document.querySelector("form")?.addEventListener("submit",function (e:Event) {
    e.preventDefault()
    let newGame = new Jeux(this.nom.value, this.genre.value, this.editeur.value, this.pegi.valueAsNumber, this.date.value, this.multi.value, this.online.value, this.url.value)
    if (editMode == false) {
        ajoutUnJeux(newGame)
        tableauJeux.push(newGame) 
    }
    
    
})