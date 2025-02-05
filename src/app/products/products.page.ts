import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-products',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle]
})
export class ProductsPage {

  constructor() { }

}
