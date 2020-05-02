import { Component, OnInit} from '@angular/core';
import {DatosUsuarioService} from '../datos-usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //VARIABLE FOR USERS
  listadatos

  constructor(public datos : DatosUsuarioService) {

  }

  //WHEN SCREEN APPEARS
  ngOnInit(){
    this.datos.obtenerDatos().subscribe(
      (data)=>{this.listadatos=data;},
      (error)=>{console.log(error);}
    )
  }

}
