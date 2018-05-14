import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//Implementacion de proveedor de autentificaciones
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
//ngrx
import { Store } from '@ngrx/store';
import * as rec from '../../store/reducer/reducer';
import * as ac from '../../store/action/action';
import { user } from '../../store/reducer/reducer';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  username: string = '';
  password: '';
  $cosa: Store<user[]>;
  cos: Observable<user>;
  num = 0;
  verdadero: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public alertCtrl: AlertController,
    public afAuth: AngularFireAuth,
    public store: Store<user>) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  login() {
    let User: user = { username: this.username, password: this.password };
    User.id = this.username;
    this.$cosa = this.store.select(rec.selectAllCosas);
    this.store.dispatch(new ac.Login({ User }));
    console.log(this.username);
    this.auth.loginUser(this.username, this.password)
      .then((user) => {
        this.navCtrl.setRoot(HomePage)
      })
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'No se ha podido conectar',
          buttons: ['Aceptar']

        });
        this.verdadero = false;
        alert.present();
        this.store.dispatch(new ac.Logout( this.username ));
      
      })

    
  }

}
