import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ItemService } from '../core/item/item.service';

@Component({
  selector: 'app-search-object',
  templateUrl: './search-object.component.html',
  styleUrls: ['./search-object.component.scss']
})
export class SearchObjectComponent implements OnInit {

  columns = [
    { columnDef: 'tipo',  header: 'Tipo',     cell: (row: any) => `${row.tipo}` },
    { columnDef: 'descricao',  header: 'Descrição',     cell: (row: any) => `${row.descricao}` },
  ];
  displayedColumns: string[] = [...this.columns.map(x => x.columnDef), 'score'];
  projetos = [{nome: 'Beatrix', codigo: '192929'},
              {nome: 'Fusion', codigo: '192929'},
              {nome: 'Sustentação', codigo: '192929'}];
  recursos: any[];

  alocacaoForm: FormGroup;

  alocacoes: any[] = [];

  constructor(private formBuilder: FormBuilder,
    private itemService: ItemService
              ) { }

  ngOnInit(): void {
    this.alocacaoForm = new FormGroup({
      descricao: new FormControl(''),
    });
  }

  updateColor(progress: any) {
    if (progress<21){
       return 'warn';
    } else if (progress>80){
       return 'primary';
    } else {
      return 'accent';
    }
 }

 
  createAlocacao() {
    this.itemService.getitens(this.alocacaoForm.value.descricao).subscribe((res: any[]) => {
      this.alocacoes = res;
    })
  }

  getItens(){
    this.itemService.getitens("").subscribe((res: any[]) => {
      this.alocacoes = res;
    })
  }

}
