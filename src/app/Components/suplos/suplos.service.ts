import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class SuplosService{
    private API_KEY = '13119377-fc7e10c6305a7de49da6ecb25';
    private URL = "https://pixabay.com/api/?key="+this.API_KEY;
    constructor(private http: HttpClient){}

    getImagenes(){
        return this.http.get(this.URL);
    }
    getImagenesFilter(busqueda: string){
        return this.http.get(`${this.URL}&q=`+busqueda)
    }
    getImagenesCategory(busqueda1: string){
        return this.http.get(`${this.URL}&category=`+busqueda1)
    }
    getImagenesPagina(busqueda2: string, page: number){
        return this.http.get(`${this.URL}&category=`+busqueda2+`&page=`+page)
    }
    getImagenesSinCategory(page: number){
        return this.http.get(`${this.URL}&page=`+page);
    }
}