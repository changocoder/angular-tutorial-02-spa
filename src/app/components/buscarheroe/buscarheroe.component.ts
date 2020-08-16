import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { IHeroe } from '../../models/IHeroe' ;

@Component({
  selector: 'app-buscarheroe',
  templateUrl: './buscarheroe.component.html'
})
export class BuscarHeroeComponent implements OnInit{

  @Input () heroesBuscados: IHeroe[]  = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {       }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroesBuscados = this.heroesService.buscarHeroes( params.termino );
      console.log(this.heroesBuscados);
  });
  }

}

