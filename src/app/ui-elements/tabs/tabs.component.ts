import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
openTab_1 : number = 1 ;
openTab_2 : number= 1;
openTab_3 : number= 1;

activeClasses: number =1; 

}
