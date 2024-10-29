import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "../ui-elements/accordion/accordion.component";
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AccordionComponent, RouterModule, MatSidenavModule, MatIconModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  @Input() opened: boolean = false;
  @Input() isMobile: boolean = false;
  @Input() isDarkTheme: boolean = false;
  @Output() close = new EventEmitter<void>();
  selected: string = '';

  toggleSidebar() {
    this.opened = !this.opened;
  }

  toggleMenu(selectedMenu: string) {
    this.selected = this.selected === selectedMenu ? '' : selectedMenu;
  }
}