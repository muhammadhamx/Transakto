import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-tab3',
  templateUrl: 'sales.page.html',
  styleUrls: ['sales.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class SalesPage {
  constructor() { }
}
