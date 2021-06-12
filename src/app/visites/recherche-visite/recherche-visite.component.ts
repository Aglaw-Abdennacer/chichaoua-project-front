import { Component, OnInit } from '@angular/core';
import {DemandeServiceService} from "../../services/demande-service.service";
import {Plainte} from "../../controller/models/plainte.model";
import { Vo } from 'src/app/model/vo.model';
import {Demande} from "../../model/demande.model";

@Component({
  selector: 'app-recherche-visite',
  templateUrl: './recherche-visite.component.html',
  styleUrls: ['./recherche-visite.component.css']
})
export class RechercheVisiteComponent implements OnInit {


  constructor(private demandeService:DemandeServiceService) { }

  ngOnInit(): void {
  }

  public get demande(){
    return this.demandeService.demande;
  }

  public get demandes(){
    return this.demandeService.demandes;
  }

  public get vo(){
    return this.demandeService.vo;
  }


  findBynumOrder(numOrder: number){
    return this.demandeService.findByNum(numOrder)
  }

  findByCriterie(vo: Vo){
    return this.demandeService.findByCriteria(vo)
  }

  findByNum(numOrder :number){
    return this.demandeService.findByNum(numOrder)
  }

}
