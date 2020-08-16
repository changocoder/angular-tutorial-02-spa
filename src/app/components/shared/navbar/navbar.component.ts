import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(buscarTexto: string): void {

    console.log(buscarTexto);
    this.router.navigate( ['/buscarheroe', buscarTexto]);

  }


}
