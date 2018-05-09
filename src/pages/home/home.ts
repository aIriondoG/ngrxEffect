import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { AuthProvider } from '../../providers/auth/auth';
import { ContactoPage } from '../contacto/contacto';
import { Store } from '@ngrx/store';
import * as rec from '../../store/reducer/reducer';
import * as ac from '../../store/action/action';
import { user } from '../../store/reducer/reducer';
import { Observable } from 'rxjs/Observable';
import { InputModalPage } from './modal/input-modal';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  $cosa: Store<user[]>;
  items: any;
  datos: any;
  title: string;
  constructor(
    public navCtrl: NavController,
    public auth: AuthProvider,
    public store: Store<user>,
    public modalCtrl: ModalController
  ) {
    this.$cosa = this.store.select(rec.selectAllCosas);
    //console.log(this.$cosa);
    this.items = this.$cosa.subscribe((e) => {
      this.datos = e;
      console.log(e);
    }
    );
    this.items.unsubscribe();


  }
  editar() {

  }
  updateItem(param: rec.user) {
    let changes: rec.user = {
      username: param.username,
      password: param.password
    };
    let User = {
      id: param.id,
      changes
    }
    this.store.dispatch(new ac.Update({ User }));
  }
  actualizar(item) {
    console.log("Actualizar");
    let themodal = this.modalCtrl.create(InputModalPage, { item });

    themodal.onDidDismiss(data => {
      if (data.success) {
        if (data.id) {
          this.updateItem(data);
        }
      }
    });
    themodal.present();
  }
  salir() {
    this.store.dispatch(new ac.Logout(this.auth.User));
    this.auth.logout();
    this.navCtrl.setRoot(RegistroPage);
  }
  contacto(event) {

    this.navCtrl.push(ContactoPage, {

    });

  }


}
