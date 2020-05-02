import { Injectable } from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  constructor(public http:HttpClient) { 
   
  }

  //GET USERS FROM URL
  obtenerDatos(){
      return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  //GET AMBUMS FROM USERID 
  obtenerAlbumns(id: string){
    return this.http.get('https://jsonplaceholder.typicode.com/albums?userId='+id);
}
}
