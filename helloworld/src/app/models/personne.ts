export class Personne {
    prenom:string;
    nom:string;
    dateNaissance:number
    nomComplet:string;
    majeur:boolean;
    constructor(prenom:string,nom:string,dateNaissance:number){
        this.prenom = prenom;
        this.nom = nom;
        this.dateNaissance = dateNaissance
        this.nomComplet = `${prenom.charAt(0).toUpperCase()}${prenom.slice(1)}-${nom.charAt(0).toUpperCase()}${nom.slice(1)}`
        this.majeur = this.calculAge()
    }
    calculAge(){
        if (this.dateNaissance > 2003) {
            this.majeur = false
        } else if (this.dateNaissance <= 2003) {
            this.majeur = true
        }
        return this.majeur
    }
}





