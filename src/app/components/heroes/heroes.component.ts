import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service' ;
import { IHeroe } from 'src/app/models/IHeroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }


}
