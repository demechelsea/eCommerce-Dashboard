import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule,CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent implements OnInit {
  accordionStates: boolean[] = [false, false, false, false, false, false,false,false,false];


  // Toggle accordion state
  toggleAccordion(index: number): void {
    let bool:Boolean = this.accordionStates[index];
    this.accordionStates =[]  ;
    this.accordionStates[index] = !bool;

  }

  title = "Accordion";
  ngOnInit(): void {
    console.log("accordion")
  }
 
}
