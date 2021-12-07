import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type ville = {
  nom: string;
};

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  nom!: string;
  tabVille!: ville[];
  constructor(private http: HttpClient) {}
  soumettre() {
    this.http
      .get(`https://geo.api.gouv.fr/communes?nom=${this.nom}`)
      .toPromise()
      .then((res) => {
        this.tabVille = res as ville[];
      });
  }
  ngOnInit(): void {}
}
