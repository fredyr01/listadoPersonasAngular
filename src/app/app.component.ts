import { Component } from '@angular/core';
import { Persona } from './persona.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Personas';

  personas: Persona[] = [new Persona ('Juan', 'Perez'), new Persona ('Laura', 'Juarez') , new Persona ('Fredy', 'Rios')];

  nombreInput:string = '';
  apellidoInput:string = '';

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
}
