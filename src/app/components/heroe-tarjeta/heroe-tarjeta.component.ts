import { Component, OnInit, Input } from '@angular/core';
import { IHeroe } from 'src/app/models/IHeroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: IHeroe | null = null;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  verHeroe(): void{

    console.log();
    this.router.navigate( ['/heroe', this.index]);

  }

}
