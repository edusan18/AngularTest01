import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations: [ //DICEN QUE COMPONENTES TIENEN ESTE MODULO
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ // Son los componentes publicas o visibles fuera de este modulo
        ListadoComponent,
        HeroeComponent
    ],
    imports:[ // Van solo módulos 
        CommonModule // Si comentamos este módulo, no podremos usar el NgFor, NgIf // Directivas personalizadas de Angular
    ]


})
export class HeroesModule{

}