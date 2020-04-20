import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-object',
  templateUrl: './search-object.component.html',
  styleUrls: ['./search-object.component.scss']
})
export class SearchObjectComponent implements OnInit {

  columns = [
    { columnDef: 'tipo',  header: 'Tipo',     cell: (row: any) => `${row.name}` },
    { columnDef: 'descricao',  header: 'Descrição',     cell: (row: any) => `${row.name}` },
    { columnDef: 'item',  header: 'item',     cell: (row: any) => `${row.name}` },
  ];
  displayedColumns: string[] = this.columns.map(x => x.columnDef);
  projetos = [{nome: 'Beatrix', codigo: '192929'},
              {nome: 'Fusion', codigo: '192929'},
              {nome: 'Sustentação', codigo: '192929'}];
  recursos: any[];

  alocacaoForm: FormGroup;

  alocacoes = [];

  constructor(private formBuilder: FormBuilder,
              ) { }

  ngOnInit(): void {
    this.alocacaoForm = new FormGroup({
      projeto: new FormControl(''),
      recurso: new FormControl(''),
      inicio: new FormControl(''),
      fim: new FormControl(''),
      data: new FormControl(''),
    });
  }

 
  createAlocacao() {
    const ini = new Date(this.alocacaoForm.value.inicio);
    console.log(ini.getDay());
    this.columns = [...this.columns,
      { columnDef: `${this.formatDayAndMonth(ini.getDate())}-${this.formatDayAndMonth(ini.getUTCMonth() + 1)}`,
      header: `${this.formatDayAndMonth(ini.getDate())}-${this.formatDayAndMonth(ini.getUTCMonth() + 1)}`,
      cell: (row) => `${row.name}` }];
    console.log(this.alocacaoForm);
    this.displayedColumns = this.columns.map(x => x.columnDef);
  }

  private formatDayAndMonth(value: string | number) {
    if (value < 10) {
      return '0' + value;
    }
    return value.toString();
  }

}
