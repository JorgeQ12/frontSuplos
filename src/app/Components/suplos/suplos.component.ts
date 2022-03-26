import { Component, OnInit } from '@angular/core';
import { SuplosService } from './suplos.service';
import { VistasImg } from 'src/app/interfaces/vistasImg';
@Component({
  selector: 'app-suplos',
  templateUrl: './suplos.component.html',
  styleUrls: ['./suplos.component.css']
})
export class SuplosComponent implements OnInit {
  categoria: string[] = ['science','education', 'people', 'feelings', 'computer', 'buildings'];
  txtFiltro: string = "";
  arrayImg: string[] = [];
  imgImg: VistasImg[] = [];
  imgDetalles: VistasImg[] = [];
  categoriSelect: string = "";
  detalles: boolean = false;
  page: number = 0;
  nPagin: number = 1;

  constructor(private suplos: SuplosService) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.detalles = false;
  }

  obtenerProductos(){
    this.suplos.getImagenes().subscribe((data:any) => { 
      this.arrayImg = data.hits;
      this.mostrarImg();
    }, error => {
      console.log(error);
    })
  }
  confirmarFiltro() {
    this.suplos.getImagenesFilter(this.txtFiltro).subscribe((data:any) => {
      this.arrayImg = data.hits;
      console.log(this.arrayImg)
      this.mostrarImg();
    }, error =>{
      console.log(error)
    });
  }
  filtroSelect(){
    this.suplos.getImagenesCategory(this.categoriSelect).subscribe((data:any) => {
      this.arrayImg = data.hits;
      this.mostrarImg();
    }, error =>{
      console.log(error)
    });
  }
  mostrarImg(){
    this.imgImg = [];
    this.arrayImg.map((item:any)=>{
      this.imgImg.push(item);
    });
    console.log(this.imgImg)
  }
  infoCard(id:any){
    this.detalles = true;
    this.imgDetalles = [];
    this.arrayImg.map((item:any)=>{
      if(item.id == id){
        this.imgDetalles.push(item);
      }
    });
    console.log(this.imgImg)
    console.log(this.imgDetalles)
  }
  pagina(num:number){
    this.nPagin = num + this.nPagin;
    if(this.categoriSelect == "" ){
      this.suplos.getImagenesPagina(this.txtFiltro, this.nPagin).subscribe((data:any) => {
        this.arrayImg = data.hits;
        this.mostrarImg();
      }, error =>{
        console.log(error)
      });
    }else if(this.txtFiltro == ""){
      this.suplos.getImagenesPagina(this.categoriSelect, this.nPagin).subscribe((data:any) => {
        this.arrayImg = data.hits;
        this.mostrarImg();
      }, error =>{
        console.log(error)
      });
    }else{
      this.suplos.getImagenesSinCategory(this.nPagin).subscribe((data:any) => {
        this.arrayImg = data.hits;
        this.mostrarImg();
      }, error =>{
        console.log(error)
      });
    }

  }
  isEnter(event: KeyboardEvent){
    if(event.keyCode == 13){
      this.confirmarFiltro();
    }
  }
}