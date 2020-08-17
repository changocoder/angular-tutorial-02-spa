import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHeroe } from 'src/app/models/IHeroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: IHeroe | null = null;
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {

  }

  verHeroe(): void{
     this.router.navigate( ['/heroe', this.index]);
    // this.heroeSeleccionado.emit( this.index );

  }

}
