import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template:`
    
        <h1>Hola Mundo</h1>
        <h1>{{titulo}}</h1>
        <h1>{{1+3}}</h1>
        <h3> La base es {{base}}</h3>

        <button (click)="acumular(+base);">+ {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base);">- {{base}}</button>


    `

})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    sumar(){
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    }
  
    acumular(valor :number){
      this.numero += valor;
    }

}