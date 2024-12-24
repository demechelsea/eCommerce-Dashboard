import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-popovers',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
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
