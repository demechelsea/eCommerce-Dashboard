import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  openDropDown_1:boolean = false;
  openDropDown_2:boolean = false;
  openDropDown_3:boolean = false;
  openDropDown_4:boolean = false;

}
