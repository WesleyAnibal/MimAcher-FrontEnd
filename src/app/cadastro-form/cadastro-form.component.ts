import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent implements OnInit {

 
  columns = [
    { columnDef: 'tipo',  header: 'Tipo',     cell: (row: any) => `${row.name}` },
    { columnDef: 'descricao',  header: 'Descrição',     cell: (row: any) => `${row.name}` },
    { columnDef: 'item',  header: 'item',     cell: (row: any) => `${row.name}` },
  ];
  displayedColumns: string[] = this.columns.map(x => x.columnDef);
  projetos = [];
  recursos: any[];
  headerValue: any = 'Cadastrar Item ';
  cadastroForm: FormGroup;

  alocacoes = [];

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      tipo: new FormControl(''),
      item: new FormControl(''),
      descricao: new FormControl('')
    });
    let length = this.route.snapshot.paramMap.get("typeCadastro")?.length;
    this.headerValue += this.route.snapshot.paramMap.get("typeCadastro")?.substring(0,1).toUpperCase() + String(this.route.snapshot.paramMap.get("typeCadastro")?.substring(1,length));
  }
}
