import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  @Input() isDarkTheme: boolean = false; // Accept the dark theme input

  // You can also add any other logic or properties needed for your dashboard here
}
