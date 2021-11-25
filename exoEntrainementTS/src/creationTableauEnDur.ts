
export class Jeux{
   public nom : string;
   public genre : string;
   public editeur : string;
   public pegi : number;
   public anneeSortie : number;
   public multijoueur : boolean;
   public enLigne : boolean;
   public image : URL;

   constructor(nom:string, genre:string, editeur:string, pegi:number, anneeSortie:number,multijoueur:boolean, enLigne:boolean, image:URL){
       this.nom = nom;
       this.genre = genre;
       this.editeur = editeur;
       this.pegi = pegi;
       this.anneeSortie = anneeSortie;
       this.multijoueur = multijoueur;
       this.enLigne = enLigne;
       this.image = image
   }
}






