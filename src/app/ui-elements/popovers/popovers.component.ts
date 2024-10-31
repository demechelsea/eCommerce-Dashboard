import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popovers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popovers.component.html',
  styleUrl: './popovers.component.scss'
})
export class PopoversComponent {
  popover_1:boolean = false;
  popover_2:boolean = false;
  popover_3:boolean = false;
  popover_4:boolean = false;
  popover_5:boolean = false;

}
