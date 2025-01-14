import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { CriarPensamentoComponent } from "./componentes/pensamentos/criar-pensamento/criar-pensamento.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component"; // Importe o FormsModule aqui

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CabecalhoComponent, CriarPensamentoComponent, RodapeComponent], // Adicione o FormsModule aqui na propriedade 'imports'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memoteca';
  pensamento = {
    conteudo: ''
  };
}
