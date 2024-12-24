import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.scss'
})
export class ModalsComponent {
  modalOpen_1:boolean = false;
  modalOpen_2:boolean = false;
  modalOpen_3:boolean = false;

}
