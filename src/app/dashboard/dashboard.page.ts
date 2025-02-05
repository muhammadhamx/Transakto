import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonNote, IonLabel, IonItem, IonSelect, IonSelectOption, IonButton, IonGrid, IonCol, IonIcon, IonRow, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, cartOutline, cashOutline, closeCircleOutline, cubeOutline, listOutline, peopleOutline, settingsOutline, starOutline, warningOutline } from 'ionicons/icons';
import { provideCharts, withDefaultRegisterables, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, BaseChartDirective, FormsModule, IonItem, IonSelect, IonSelectOption, IonLabel, IonNote, IonButton, IonIcon, IonGrid, IonCol, IonRow, IonCardHeader, IonCardTitle],
  providers: [
    provideCharts(withDefaultRegisterables()), // Configure Chart.js
  ],
})
export class Dashboard {
  // Line Chart - Sales Trends with Multiple Lines
  public allChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales 2023',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#459D7A', // Green line
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: '#4CAF50',
        pointRadius: 2,
        pointHoverRadius: 7,
      },
      {
        label: 'Sales 2022',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#FF6384', // Red line
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: '#FF6384',
        pointRadius: 2,
        pointHoverRadius: 7,
      },
      {
        label: 'Sales 2021',
        data: [45, 30, 60, 70, 50, 65, 75],
        fill: false,
        borderColor: '#36A2EB', // Blue line
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: '#36A2EB',
        pointRadius: 2,
        pointHoverRadius: 7,
      },
    ],
  };
  public lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to fit container
    plugins: {

      legend: {
        display: true,
        labels: {
          color: '#333', // Legend text color
          font: {
            size: 12, // Smaller font size for mobile
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Tooltip background
        titleColor: '#fff', // Tooltip title color
        bodyColor: '#fff', // Tooltip body color
        bodySpacing: 5,
        padding: 10,
      },
    },
  };

  // Current chart data (will be updated based on filter)
  public lineChartData = { ...this.allChartData };

  // Selected filter value
  public selectedYears: 'all' | '2023' | '2022' | '2021' = 'all';

  constructor() {
    addIcons({ addCircleOutline, cashOutline, listOutline, peopleOutline, settingsOutline, cartOutline, cubeOutline, warningOutline, closeCircleOutline, starOutline });
  }

  updateChart() {
    if (this.selectedYears === 'all') {
      // Show all datasets
      this.lineChartData = { ...this.allChartData };
    } else {
      // Show only the selected year's dataset
      this.lineChartData = {
        labels: this.allChartData.labels,
        datasets: this.allChartData.datasets.filter(
          (dataset) => dataset.label === `Sales ${this.selectedYears}`
        ),
      };
    }
  }
}
