import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { AuthProvider } from '../../providers/auth/auth';
import { ContactoPage } from '../contacto/contacto';
import { Store } from '@ngrx/store';
import * as rec from '../../store/reducer/reducer';
import * as ac from '../../store/action/action';
import { user } from '../../store/reducer/reducer';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  $cosa: Store<user[]>;
  items: any;
  datos: any;
  title: string;
  constructor(public navCtrl: NavController, public auth: AuthProvider, public store: Store<user>) {
    this.$cosa = this.store.select(rec.selectAllCosas);
    //console.log(this.$cosa);
    this.items = this.$cosa.subscribe((e) => {
      this.datos = e;
      console.log(e);
    }
    );
    this.items.unsubscribe();


  }
  editar(){

  }
  actualizar(item){
    
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
