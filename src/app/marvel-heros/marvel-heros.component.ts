import { Component, OnInit } from '@angular/core';

import { HerosService } from './marvel-hero.service';

@Component({
  selector: 'app-marvel-heros',
  templateUrl: './marvel-heros.component.html',
  styleUrls: ['./marvel-heros.component.css'], 
  providers : [ HerosService ]
})
export class MarvelHerosComponent implements OnInit {

  heros:string[];

  inputHero = null;

  btnDisable = false

  Adding = false

  AddHero(){

    this.heros.push(this.inputHero)

    this.inputHero = null

    this.Adding = false
    
  }

  addMore(){
    this.Adding = !this.Adding
  }

  constructor(private ajax: HerosService) {

    this.heros = this.ajax.heros

   }

  ngOnInit() {
  }

}
