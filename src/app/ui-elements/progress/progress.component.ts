import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [MatProgressBarModule, CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {

}
