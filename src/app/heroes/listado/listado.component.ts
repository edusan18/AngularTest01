import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes :string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan América']
  //heroeBorrado :any = '';
  heroeBorrado : string = '';
  SeBorro :boolean = false;

  constructor() { 
    // Se ejecuta antes que ngOnInit
  }

  ngOnInit(): void {
  }

  borrarHeroe(){
    //this.heroeBorrado = this.heroes.pop();
    this.SeBorro = true;
    this.heroeBorrado = this.heroes.shift() || '';

    //console.log('Boton');
  }
}
