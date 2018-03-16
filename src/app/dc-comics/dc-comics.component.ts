import { Component, OnInit } from '@angular/core';

import { HerosService } from './dc-comics.service';

@Component({
  selector: 'app-dc-comics',
  templateUrl: './dc-comics.component.html',
  styleUrls: ['./dc-comics.component.css'], 
  providers : [ HerosService ]
})

export class DcComicsComponent implements OnInit {

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
