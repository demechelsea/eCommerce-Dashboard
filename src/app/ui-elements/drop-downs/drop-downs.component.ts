import { CommonModule, NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-drop-downs',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './drop-downs.component.html',
  styleUrl: './drop-downs.component.scss'
})
export class DropDownsComponent {
  // instead of declaring the following vars, look if there is a way to add property style="display:none" based on a condition
openDropDown_1: boolean = false;
openDropDown_2: boolean = false;
openDropDown_3: boolean = false;
// rotaion not working


}
