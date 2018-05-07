//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../../models/user';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  usuarios : AngularFireList<any>;

  constructor(public db: AngularFireDatabase,  
              //public http: HttpClient
            ) {
   
    this.usuarios = this.db.list('usuarios');
    //console.log('Hello PracaServiceProvider Provider');
  }

  getUsuario(){
    return this.usuarios.valueChanges();
  }

  cadastrarNovoUser(novoUser : User){
    console.log('[PROVIDER] cadastrando novo ususario: ');
    console.log(novoUser);
    this.usuarios.push(novoUser);
    return this.usuarios.valueChanges();
  }

}
