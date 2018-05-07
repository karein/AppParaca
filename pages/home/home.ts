import { Component } from '@angular/core';
import { NavController, Toast, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
              public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
     if (data && data.email && data.uid){ 
       this.toast.create({
         message: `Bem-vindo ao APP_NAME, ${data.email}`,
         duration: 3000
       }).present();
      }
      else{
        this.toast.create({
          message: `Não foi possivel encontrar os detalhes da autenticação`,
          duration: 3000
        }).present();
      }
    });
  }
}
