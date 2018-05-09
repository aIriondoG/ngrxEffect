import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'input-modal.html'
})
export class InputModalPage {
  item = { username: "", password: "" };
  title: string;
  constructor(
    public viewCtrl: ViewController,
    private params: NavParams
  ) {
    //Se recojen los datos pasados
    let inputParams = this.params.get('item');
    //Se rellena la variable title
    if (inputParams != null) {
      this.title = 'Modificar tarjeta';
      this.item = inputParams;
    }
  }

  /**
   * return success as false, no update required
   */
  cancel() {
    this.viewCtrl.dismiss({ success: false });
  }

  /**
   * return the updated data to the parent inorder
   * to update the store
   */
  saveItem() {
    let result = {
      success: true,
      ...this.item
    };
    this.viewCtrl.dismiss(result);
  }
}