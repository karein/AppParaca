import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User[] = Array();

  constructor(private afAuth: AngularFireAuth,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user : User){
   try{ 
     const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
     if(result){
      this.navCtrl.setRoot(HomePage, /*{ usuarioSelecionado : user }*/);
     }
    }
    catch(e){
      console.error(e);
    }
  }

  registrar(){
    this.navCtrl.push('RegistrarPage');
  }


  /*ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }*/

}
