import { Component, OnInit } from '@angular/core';
import { SuplosService } from './suplos.service';

@Component({
  selector: 'app-suplos',
  templateUrl: './suplos.component.html',
  styleUrls: ['./suplos.component.css']
})
export class SuplosComponent implements OnInit {
  categoria: string[] = ['science','education', 'people', 'feelings', 'computer', 'buildings'];
  txtFiltro: string = "";
  categoriSelect: string = "";
  constructor(private suplos: SuplosService) { 
    
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.suplos.getImagenes().subscribe(data => { 
      console.log(data);
      // this.listaProductos = data;
    }, error => {
      console.log(error);
    })
  }
  confirmarFiltro() {
    this.suplos.getImagenesFilter(this.txtFiltro).subscribe(data => {
      console.log(data);
    }, error =>{
      console.log(error)
    });
  }
  filtroSelect(){
    this.suplos.getImagenesCategory(this.categoriSelect).subscribe(data => {
      console.log(data);
    }, error =>{
      console.log(error)
    });
  }
}