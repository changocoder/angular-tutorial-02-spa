import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service' ;
import { IHeroe } from 'src/app/models/IHeroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idHeroe: number): void{

    console.log(idHeroe);
    this.router.navigate( ['/heroe', idHeroe] );

  }


}
