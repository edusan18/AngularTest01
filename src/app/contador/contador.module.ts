//import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { ContadorComponent } from './contador/contador.component';




@NgModule({
    declarations: [ //DICEN QUE COMPONENTES TIENEN ESTE MODULO
        ContadorComponent
    ],
    exports:[ // Son los componentes publicas o visibles fuera de este modulo
        ContadorComponent
    ],
    imports:[ // Van solo módulos 
       // CommonModule // Si comentamos este módulo, no podremos usar el NgFor, NgIf // Directivas personalizadas de Angular
    ]


})
export class ContadorModule{

}