class Commune {
    constructor(nom, population, codeDepartement) {
        this.nom = nom;
        this.population = population;
        this.codeDepartement = codeDepartement;
    }
}
function recupererStats() {
    return fetch(`https://geo.api.gouv.fr/communes?nom=${clickSearch()}`).then((res) => {
        return res.json().then(function (data) {
            let tabStats = [];
            for (const statServeur of data) {
                tabStats.push(new Commune(statServeur.nom, statServeur.population, statServeur.codeDepartement));
            }
            return tabStats;
        });
    });
}
function clickSearch() {
    let recherche = document.querySelector("#name");
    return recherche.value;
}
function final() {
    recupererStats().then((retour) => {
        let maSection = document.querySelector("#corps");
        // let maDiv = document.createElement("div")
        for (const monObjet of retour) {
            maSection.innerHTML += `<div><li>nom :${monObjet.nom} - Population:${monObjet.population} - Code département:${monObjet.codeDepartement}</li></div>`;
        }
    });
}
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    final();
});
