import { Component, OnInit } from '@angular/core';
import {DatosUsuarioService} from '../datos-usuario.service';
import {ActivatedRoute} from '@angular/router'
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  //VARIABLE ALBUMS
  listaAlbums

  constructor(public datos : DatosUsuarioService, private route: ActivatedRoute, private loadingController: LoadingController) { }

  //WHEN SCREEN APPEARS
  ngOnInit() {
    this.loadAlbums();
  }

  //Async function for loading
  async loadAlbums(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
    //PARAM BY URL
    this.datos.obtenerAlbumns((this.route.snapshot.params['id']).toString()).subscribe(
      (data)=>{this.listaAlbums=data;},
      (error)=>{console.log(error);}
    )
    loading.dismiss();
  }

}
