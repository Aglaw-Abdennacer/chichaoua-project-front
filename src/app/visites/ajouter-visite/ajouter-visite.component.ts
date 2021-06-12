import { Component, OnInit } from '@angular/core';
import {DemandeServiceService} from "../../services/demande-service.service";
import {VisiteurService} from "../../services/visiteur.service";
import {Visiteur} from "../../model/visiteur.model";

@Component({
  selector: 'app-ajouter-visite',
  templateUrl: './ajouter-visite.component.html',
  styleUrls: ['./ajouter-visite.component.css']
})
export class AjouterVisiteComponent implements OnInit {


  constructor(private demandeService:DemandeServiceService , private visiteurService:VisiteurService) { }

  public visiteur = new Visiteur();



  ngOnInit(): void {
    return this.visiteurService.getAll();
  }

  public get demande(){
    return this.demandeService.demande;
  }
  // @ts-ignore
  public get dossier(){
    this.demandeService.dossier;
  }

  verificaton(){
    return this.visiteurService.verification;
  }




  // ajouter visite
  public ajouterVisite() {
    return this.demandeService.ajouterVisite();
  }



  // verify
  public verify(){
    return this.visiteurService.verify(this.visiteur.numCin);
  }


  //visiteur
  ajouterVisiteur(){
    return this.visiteurService.ajouterVisiteur();
  }


}
