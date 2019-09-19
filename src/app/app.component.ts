import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!';
  foto = 'favicon.ico';

  exibir()
  {
    alert(this.title);
  }

  peso = 80;
  altura = 1.80;
  
  exibirImc()
  {
    alert(this.peso / (this.altura * this.altura));
  }  
}
