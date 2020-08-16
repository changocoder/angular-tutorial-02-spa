import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { IHeroe } from '../../models/IHeroe' ;


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: IHeroe | null = null;

  constructor(private activatedRouted: ActivatedRoute,
              private heroesService: HeroesService) {

    this.activatedRouted.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params.id);
      console.log(this.heroe);
    });
  }



}
