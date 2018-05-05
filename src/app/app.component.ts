import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-end Angular Js';
  public descricao: string = "Interface Front-end para interagir com o serviço REST 'SpaceLaunches'."
}
