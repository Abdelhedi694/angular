



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

let tableauJeux:jeux[] = [
    {
        nom : "oddworld",
        genre : "aventure",
        editeur : "jeuxConsole",
        pegi : 11,
        anneeSortie : 1996,
        multijoueur : false,
        enLigne : false,
        image : new URL("https://www.numerama.com/wp-content/uploads/2021/04/capture-decran-2021-04-09-a-16-41-02.jpg")   
    },
    {
        nom : "medievil",
        genre : "horeur",
        editeur : "konami",
        pegi : 18,
        anneeSortie : 1992,
        multijoueur : false,
        enLigne : false,
        image : new URL("https://d3isma7snj3lcx.cloudfront.net/optim/images/news/30/3050819933/le-remake-de-medievil-se-devoile-en-compagnie-de-ses-restaurateurs-085a6bfc__w854.jpg")   
    }
]


export { tableauJeux } ;