import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-sales',
  templateUrl: 'sales.page.html',
  styleUrls: ['sales.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle],
})
export class SalesPage {
  constructor() { }
}
