import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth"
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  user : User[] = Array();
  novoUser: User = new User;

  constructor(private afauth: AngularFireAuth,
              public userProvide: UserServiceProvider, 
              public navCtrl: NavController, public navParams: NavParams, 
              public toastCtrl: ToastController) {
  }

  async AuthUser(user : User){
    try{
      const result = await this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }
    catch(e){
      console.error(e);
    } 
  }

  CadastrarUser(){
    this.userProvide.cadastrarNovoUser(this.novoUser)
    .subscribe(resposta => 
      {
        this.exibirToast();
        this.navCtrl.pop();
      });
  }

  exibirToast(){
    let toast = this.toastCtrl.create({
      message: 'Usuário Cadastrado',
      duration: 2000,
      position: 'center'
    });
    toast.present();
  }
}

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }*/

