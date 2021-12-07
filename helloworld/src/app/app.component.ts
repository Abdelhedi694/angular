import { Component } from '@angular/core';
import { Personne } from './models/personne';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prenom1 = 'hedi';
  prenom2 = 'flo'
  prenom3 = 'amina'
 
   tabPrenom:string[] = [this.prenom1,this.prenom2,this.prenom3]
  mathieu = new Personne("mathieu","delorme", 1910)  
  roger = new Personne("roger", "moure", 1992)
  dave = new Personne("hedi", "rafai", 1992)
  mohamed = new Personne("mohamed", "ex", 2005)
  george = new Personne("george", "erx", 2008)
  tabNovellePersonne: Personne[] = [this.roger,this.dave, this.mathieu, this.mohamed, this.george]
  constructor(){}
  delete(personne:Personne) {
    let index = this.tabNovellePersonne.indexOf(personne)
    this.tabNovellePersonne.splice(index,1)
  }

}




