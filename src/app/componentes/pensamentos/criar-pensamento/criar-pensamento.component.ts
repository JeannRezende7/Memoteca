import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Adicione a importação do FormsModule

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule],  // Inclua o FormsModule na propriedade 'imports'
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  };

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("Novo pensamento criado!");
  }

  cancelar() {
    alert("Ação cancelada!");
  }

}
