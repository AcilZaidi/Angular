import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/Emploi';
import { MethodServiceService } from '../method-service.service';

@Component({
  selector: 'app-offres-emplois',
  templateUrl: './offres-emplois.component.html',
  styleUrls: ['./offres-emplois.component.css']
})
export class OffresEmploisComponent implements OnInit {

  constructor(private calcul : MethodServiceService) { }
  listOffresEmploi! : Emploi[];
  s=0  ;
  k=0;

  ngOnInit(): void {
    this.listOffresEmploi = [{reference : "2" , titre : "offre 1" , entreprise : "vermeg" , etat : true},
    {reference : "3" , titre : "offre 2" , entreprise : "sofrecom" , etat : false},
    {reference : "4" , titre : "offre 3" , entreprise : "telnet" , etat : true}]
  }
  Number() {
    for(let i = 0 ; i < this.listOffresEmploi.length ; i ++) {

      if(this.listOffresEmploi[i].etat==true) {
        this.s++ ;
      }

    }
     }
     calculFalse(){
      this.k=this.calcul.calculMethod(this.listOffresEmploi,'etat',false);
      console.log("aslema");

      console.log(this.calcul.calculMethod(this.listOffresEmploi,'etat',false));
    }

}
