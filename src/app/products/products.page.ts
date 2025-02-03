import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-tab2',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class ProductsPage {

  constructor() { }

}
